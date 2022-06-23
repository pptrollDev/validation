import React from 'react'
import * as $ from './styles'
import Wrapper from '../../molecules/Wrapper'
import Label from '../../atoms/Label'
import { GRAY_50, GRAY_80, RED } from '../../../styles/colors'
import Button from '../../atoms/Button'
import { IWaiting } from './type'

const Waiting = ({ minute, second, time, submit }: IWaiting) => {
  return (
    <Wrapper>
      <$.TimeWrapper>
        <$.TitleContainer>
          <Label
            label={`${'카카오 지갑으로'}\n${'간편인증 요청을 보냈습니다'}`}
            fontWeight="700"
            fontSize="24px"
            lineHeight="150%"
          />
        </$.TitleContainer>
        <$.TimerContainer>
          <$.TimerDiv time={time}>
            <img src={`/icons/${time > 10 ? 'Timer' : 'TimerRed'}.svg`} />
            <Label
              label={`${minute}:${second}`}
              color={time > 10 ? GRAY_50 : RED}
              fontWeight="700"
            />
          </$.TimerDiv>
        </$.TimerContainer>
      </$.TimeWrapper>
      <$.dividerWrapper />
      <$.ContentWrapper>
        <div>
          <$.InfoWrapper>
            <$.InfoImgDiv>
              <img src="/icons/KakaoApp.svg" />
            </$.InfoImgDiv>
            <$.InfoTextWrapper>
              <div>
                <$.InfoTextTitleContainer>
                  <Label
                    label="01. 카카오톡앱에서"
                    color={GRAY_80}
                    lineHeight="150%"
                    fontWeight="500"
                    fontSize="18px"
                  />
                </$.InfoTextTitleContainer>
                <div>
                  <Label
                    label="지갑 채팅방에서 ‘인증하기’ 버튼 선택하기"
                    color={GRAY_50}
                    fontWeight="500"
                  />
                </div>
              </div>
            </$.InfoTextWrapper>
          </$.InfoWrapper>
          <$.InfoWrapper>
            <$.InfoImgDiv>
              <img src="/icons/KakaoPassword.svg" />
            </$.InfoImgDiv>
            <$.InfoTextWrapper>
              <div>
                <div>
                  <Label
                    label="카카오 My 비밀번호 입력하기"
                    color={GRAY_50}
                    fontWeight="500"
                  />
                </div>
              </div>
            </$.InfoTextWrapper>
          </$.InfoWrapper>
          <$.InfoWrapper>
            <$.InfoImgDiv>
              <img src="/icons/Three.svg" />
            </$.InfoImgDiv>
            <$.InfoTextWrapper>
              <div>
                <$.InfoTextTitleContainer>
                  <Label
                    label="02. 삼쩜삼에서"
                    color={GRAY_80}
                    lineHeight="150%"
                    fontWeight="500"
                    fontSize="18px"
                  />
                </$.InfoTextTitleContainer>
                <div>
                  <Label
                    label="아래 인증완료 버튼 선택하면끝"
                    color={GRAY_50}
                    fontWeight="500"
                  />
                </div>
              </div>
            </$.InfoTextWrapper>
          </$.InfoWrapper>
        </div>
      </$.ContentWrapper>
      <$.ButtonContainer>
        <Button
          id="submit"
          label="인증완료"
          width="100%"
          onClick={() => submit()}
        />
      </$.ButtonContainer>
    </Wrapper>
  )
}

export default Waiting
