import styled from 'styled-components'
import { GRAY_10, RED_LIGHT } from '../../../styles/colors'

export const TimeWrapper = styled.div`
  padding: 64px 50px 32px 50px;
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
  padding: 36px 40px 122px 40px;
  display: flex;
  justify-content: center;
`

export const InfoWrapper = styled.div`
  margin-bottom: 36px;
  display: flex;

  &:last-child{
    margin-bottom 0;
  }
`

export const InfoImgDiv = styled.div`
  margin-right: 36px;
  display: flex;
  align-items: center;
`

export const InfoTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const InfoTextTitleContainer = styled.div`
  margin-bottom: 8px;
`

export const ButtonContainer = styled.div`
  padding: 24px;
`
