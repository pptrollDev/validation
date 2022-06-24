import React from 'react'
import * as $ from './styles'
import { IInput } from './type'

const Input = ({
  id,
  type = 'text',
  defaultValue = '',
  autoFocus = false,
  onChange,
  onEnter,
}: IInput) => {
  return (
    <$.Wrapper>
      <$.Input
        id={id}
        defaultValue={defaultValue}
        type={type}
        autoFocus={autoFocus}
        onChange={(e) => onChange(id, e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && onEnter) {
            e.preventDefault()

            onEnter()
          }
        }}
      />
    </$.Wrapper>
  )
}
export default Input
