import React from 'react'
import * as $ from './styles'
import { IWrapper } from './type'

const Wrapper = ({ children }: IWrapper) => {
  return (
    <$.Wrapper>
      <$.ContentWrapper>{children}</$.ContentWrapper>
    </$.Wrapper>
  )
}

export default Wrapper
