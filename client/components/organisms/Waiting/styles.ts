import styled from 'styled-components'
import { GRAY_10, RED_LIGHT } from '../../../styles/colors'

export const TimeWrapper = styled.div`
  margin: 64px 50px 32px 50px;
`

export const TitleContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const TimerDiv = styled.div<{ time: number }>`
  border-radius: 4px;
  padding: 4px 9px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.time > 10 ? GRAY_10 : RED_LIGHT)};

  img {
    margin-right: 4px;
  }
`

export const dividerWrapper = styled.div`
  height: 12px;
  background-color: ${GRAY_10};
`
export const ContentWrapper = styled.div`
  margin: 36px 40px 0 40px;
  display: flex;
  justify-content: center;
`

export const GuideWrapper = styled.div`
  margin-bottom: 36px;
  display: flex;

  &:last-child{
    margin-bottom 0;
  }
`

export const GuideImgDiv = styled.div`
  margin-right: 36px;
  display: flex;
  align-items: center;

  img {
    width: 88px;
  }
`

export const GuideTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const GuideTextTitleContainer = styled.div`
  margin-bottom: 8px;
`

export const ButtonContainer = styled.div`
  margin: 24px;
`
