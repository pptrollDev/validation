import React from 'react'
import * as $ from './styles'
import { IModal } from './type'

const Modal = ({ isVisible, children, onClick }: IModal) => {
  return isVisible ? (
    <$.Wrapper>
      <$.BackgroundWrapper onClick={() => onClick('close')} />
      <$.ContentWrapper>
        <$.ContentDiv>{children}</$.ContentDiv>
      </$.ContentWrapper>
    </$.Wrapper>
  ) : null
}

export default Modal
