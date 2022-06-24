import styled from 'styled-components'
import { BLUE_LIGHT } from '../../../styles/colors'

export const HeaderWrapper = styled.div`
  padding: 64px 0 32px 0;
`

export const HeaderImgContainer = styled.div`
  margin-bottom: 16px;
`

export const HeaderTitleContainer = styled.div`
  margin-bootom: 16px;
`

export const ContentWrapper = styled.div<{ backgroundColor?: string }>`
  margin-bottom: 36px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : BLUE_LIGHT};

  &:last-child {
    margin-bottom: 0;
  }
`

export const ContentTitleContainer = styled.div`
  padding: 16px;
`

export const ContentInfoContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`
