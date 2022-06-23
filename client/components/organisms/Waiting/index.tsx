import React from 'react'
import * as $ from './styles'
import Wrapper from '../../molecules/Wrapper'
import Label from '../../atoms/Label'
import { GRAY_50, GRAY_80, RED } from '../../../styles/colors'
import Button from '../../atoms/Button'
import { IWaiting } from './type'

const Waiting = ({ guides, minute, second, time, submit }: IWaiting) => {
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
          {guides.map((guide) => (
            <$.GuideWrapper>
              <$.GuideImgDiv>
                <img src={guide.image} />
              </$.GuideImgDiv>
              <$.GuideTextWrapper>
                <div>
                  {guide.title && (
                    <$.GuideTextTitleContainer>
                      <Label
                        label={guide.title}
                        color={GRAY_80}
                        lineHeight="150%"
                        fontWeight="500"
                        fontSize="18px"
                      />
                    </$.GuideTextTitleContainer>
                  )}
                  <div>
                    <Label
                      label={guide.description}
                      color={GRAY_50}
                      fontWeight="500"
                    />
                  </div>
                </div>
              </$.GuideTextWrapper>
            </$.GuideWrapper>
          ))}
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
