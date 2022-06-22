import styled from 'styled-components'
import { BLACK, WHITE } from '../../../styles/colors'

export const Wrapper = styled.div``

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${BLACK};
  opacity: 0.5;
  z-index: 1;
  cursor: pointer;
`

export const ContentWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`
export const ContentDiv = styled.div`
  border-radius: 24px 24px 0 0;
  padding: 20px;
  width: 600px;
  min-width: 375px;
  background-color: ${WHITE};
`
