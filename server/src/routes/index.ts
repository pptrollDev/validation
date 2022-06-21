import { FastifyPluginCallback } from "fastify";
import v1Route from "./v1";

const apiRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.register(v1Route, { prefix: "/v1" });
  done();
};

export default apiRoute;
