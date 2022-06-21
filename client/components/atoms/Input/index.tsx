import React from 'react'
import * as $ from './styles'
import { IInput } from './type'

const Input = ({ id, onChange }: IInput) => {
  return (
    <$.Wrapper>
      <$.Input id={id} onChange={(e) => onChange(id, e.target.value)} />
    </$.Wrapper>
  )
}
export default Input
