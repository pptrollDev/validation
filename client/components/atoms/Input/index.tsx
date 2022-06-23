import React from 'react'
import * as $ from './styles'
import { IInput } from './type'

const Input = ({ id, type = 'text', defaultValue = '', onChange }: IInput) => {
  return (
    <$.Wrapper>
      <$.Input
        id={id}
        defaultValue={defaultValue}
        type={type}
        onChange={(e) => onChange(id, e.target.value)}
      />
    </$.Wrapper>
  )
}
export default Input
