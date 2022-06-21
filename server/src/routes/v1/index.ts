import { FastifyPluginCallback } from "fastify";
import {
  validateFullRegNo,
  validateName,
  validatePhoneNumber,
} from "../../utils/validationUtil";
import easysignGuides from "../../../assets/easysign/guides.json";
import taxIncomes from "../../../assets/tax/incomes.json";
import taxOffice from "../../../assets/tax/office.json";
import {
  ApiError,
  EasysignCompleteParams,
  EasysignRequestResponse,
} from "../types";
import {getCurrentTime} from "../../utils/timeUtil";
import { FIVE_MINUTE, UTC_TIME } from "../contants";

const v1Route: FastifyPluginCallback = (fastify, option, done) => {
  /** GET API */
  fastify.get("/check", async () => {
    return "0.0.1";
  });

  fastify.get("/easysign/guides", async () => {
    return easysignGuides;
  });

  fastify.get("/tax/incomes", async () => {
    return taxIncomes;
  });

  fastify.get("/tax/office", async () => {
    return taxOffice;
  });

  fastify.get("/serverTime", async () => {
    const currentTime = getCurrentTime()
    const dateTime = new Date(currentTime + UTC_TIME)

    return { ok: true, data: { serverTime: dateTime } };
  });

  /** POST API */
  fastify.post<{
    Reply:
      | { ok: true; data: EasysignRequestResponse }
      | { ok: false; error: ApiError };
  }>("/easysign/request", async (req, rep) => {
    const currentTime = getCurrentTime()
    const startedAt = new Date(currentTime + UTC_TIME)
    const expiredAt = new Date(
        currentTime + (UTC_TIME + FIVE_MINUTE)
    )

    rep.status(200).send({
      ok: true,
      data: { startedAt, expiredAt },
    });
  });

  fastify.post<{
    Body: EasysignCompleteParams
    Reply:
        | { ok: true; data: null }
        | { ok: false; error: ApiError };
  }>("/easysign/complete", async (req, rep) => {
    const { body } = req;
    if(!body) {
      return rep.status(400).send({
        ok: false,
        error: {
          code: 400,
          message: "인증 정보를 입력해주세요",
        },
      });
    }

    const { name, phoneNumber, regNumber } = body;
    if (!validateName(name)) {
      return rep.status(400).send({
        ok: false,
        error: {
          code: 400,
          message: "올바른 이름을 입력해주세요.",
        },
      });
    }

    if (!validatePhoneNumber(phoneNumber)) {
      return rep.status(400).send({
        ok: false,
        error: {
          code: 400,
          message: "올바른 휴대전화 번호를 입력해주세요",
        },
      });
    }

    if (!validateFullRegNo(regNumber)) {
      return rep.status(400).send({
        ok: false,
        error: {
          code: 400,
          message: "올바른 주민등록번호 입력해주세요",
        },
      });
    }

    if (name !== '김점삼') {
      return rep.status(400).send({
        ok: false,
        error: {
          code: 400,
          message: "인증 정보를 확인할 수 없습니다",
        },
      });
    }

    rep.status(200).send({
      ok: true,
      data: null
    });
  });

  done();
};

export default v1Route;
