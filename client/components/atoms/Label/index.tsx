import React from 'react'
import * as $ from './styles'
import { BLACK } from '../../../styles/colors'
import { ILabel } from './type'

const Label = ({
  label,
  color = BLACK,
  fontWeight = '400',
  fontSize = '14px',
  lineHeight = '140%',
}: ILabel) => {
  return (
    <$.Label
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {label}
    </$.Label>
  )
}
export default Label
