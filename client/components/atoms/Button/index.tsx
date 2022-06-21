import React from 'react'
import { BLUE, WHITE } from '../../../styles/colors'
import * as $ from './styles'
import { IButton } from './type'

const Button = ({
  id,
  label,
  color = WHITE,
  backgroundColor = BLUE,
  width,
  disabled = false,
  onClick,
}: IButton) => {
  return (
    <$.Button
      type="button"
      color={color}
      backgroundColor={backgroundColor}
      width={width}
      disabled={disabled}
      onClick={(e) => onClick && onClick(id)}
    >
      {label}
    </$.Button>
  )
}
export default Button
