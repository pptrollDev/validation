import React from 'react';
import * as $ from './styles';
import { IModal } from './type';

const Modal = ({ isVisible, children, onClick }: IModal) => {
  return isVisible ? (
    <$.Wrapper>
      <$.BackgroundWrapper onClick={() => onClick('close')} />
      <$.ContentWrapper>{children}</$.ContentWrapper>
    </$.Wrapper>
  ) : null;
};

export default Modal;
