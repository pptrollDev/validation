import React from 'react'
import * as $ from './styles'
import { IInputWithLabel } from './type'
import { BLUE, GRAY_70, RED } from '../../../styles/colors'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'

const InputWithLabel = ({
  id,
  label,
  tipLabel,
  errorLabel,
  onChange,
}: IInputWithLabel) => {
  return (
    <$.Wrapper>
      <$.LabelContainer>
        <Label color={GRAY_70} label={label} />
      </$.LabelContainer>
      <$.InputContainer errorLabel={errorLabel}>
        <Input id={id} onChange={onChange} />
      </$.InputContainer>
      {tipLabel && !errorLabel && (
        <$.TipContainer>
          <Label color={BLUE} label="TIP" />
          &nbsp;
          <Label color={GRAY_70} label={tipLabel} />
        </$.TipContainer>
      )}
      {errorLabel && (
        <$.ErrorContainer>
          <Label color={RED} label={errorLabel} />
        </$.ErrorContainer>
      )}
    </$.Wrapper>
  )
}
export default InputWithLabel
