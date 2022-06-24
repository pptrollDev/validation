import React from 'react'
import * as $ from './styles'
import Wrapper from '../../molecules/Wrapper'
import Label from '../../atoms/Label'
import { BASIC, GRAY_60 } from '../../../styles/colors'
import { IComplete } from './type'

const Complete = ({ certification, incomes, office }: IComplete) => {
  const numberWithCommas = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Wrapper>
      <$.HeaderWrapper>
        <$.HeaderImgContainer>
          <img src="/icons/CheckGreen.svg" alt="check" />
        </$.HeaderImgContainer>
        <$.HeaderTitleContainer>
          <Label
            label="인증 완료"
            fontWeight="700"
            fontSize="24px"
            lineHeight="150%"
          />
        </$.HeaderTitleContainer>
        <div>
          <Label
            label="본인인증이 완료되었습니다."
            color={GRAY_60}
            fontWeight="500"
            fontSize="16px"
            lineHeight="150%"
          />
        </div>
      </$.HeaderWrapper>
      <$.ContentWrapper>
        <$.ContentTitleContainer>
          <Label
            label="기본 정보"
            fontWeight="500"
            fontSize="16px"
            lineHeight="150%"
          />
        </$.ContentTitleContainer>
        <$.ContentInfoContainer>
          <div>
            <Label label="이름" fontSize="16px" lineHeight="150%" />
          </div>
          <div>
            <Label
              label={certification.name}
              fontSize="16px"
              lineHeight="150%"
            />
          </div>
        </$.ContentInfoContainer>
        <$.ContentInfoContainer>
          <div>
            <Label label="휴대폰 번호" fontSize="16px" lineHeight="150%" />
          </div>
          <div>
            <Label
              label={certification.phoneNumber}
              fontSize="16px"
              lineHeight="150%"
            />
          </div>
        </$.ContentInfoContainer>
        <$.ContentInfoContainer>
          <div>
            <Label label="주민등록번호" fontSize="16px" lineHeight="150%" />
          </div>
          <div>
            <Label
              label={`${certification.regNumber.slice(0, 6)}-${
                certification.regNumber[6]
              }*****`}
              fontSize="16px"
              lineHeight="150%"
            />
          </div>
        </$.ContentInfoContainer>
      </$.ContentWrapper>
      <$.ContentWrapper backgroundColor={BASIC}>
        <$.ContentTitleContainer>
          <Label
            label="상세정보"
            fontWeight="500"
            fontSize="16px"
            lineHeight="150%"
          />
        </$.ContentTitleContainer>
        {incomes.map((income, index) => (
          <$.ContentInfoContainer key={index}>
            <div>
              {income.type === 'prepaid' && (
                <Label label="이미 낸 세금" fontSize="16px" lineHeight="150%" />
              )}
              {income.type === 'refund' && (
                <Label
                  label="돌려받을 세금"
                  fontSize="16px"
                  lineHeight="150%"
                />
              )}
            </div>
            <div>
              <Label
                label={`${numberWithCommas(income.amount)} 원`}
                fontSize="16px"
                lineHeight="150%"
              />
            </div>
          </$.ContentInfoContainer>
        ))}
      </$.ContentWrapper>
      <$.ContentWrapper>
        <$.ContentTitleContainer>
          <Label
            label="환급액 입금 안내"
            fontWeight="500"
            fontSize="16px"
            lineHeight="150%"
          />
        </$.ContentTitleContainer>
        <$.ContentInfoContainer>
          <div>
            <Label label="관할 세무서" fontSize="16px" lineHeight="150%" />
          </div>
          <div>
            <Label label={office.name} fontSize="16px" lineHeight="150%" />
          </div>
        </$.ContentInfoContainer>
        <$.ContentInfoContainer>
          <div>
            <Label label="연락처" fontSize="16px" lineHeight="150%" />
          </div>
          <div>
            <Label label={office.phone} fontSize="16px" lineHeight="150%" />
          </div>
        </$.ContentInfoContainer>
      </$.ContentWrapper>
    </Wrapper>
  )
}

export default Complete
