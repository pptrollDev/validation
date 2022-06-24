import React, { useEffect, useState } from 'react'
import * as $ from './styles'
import { IRegNoWithLabel } from './type'
import { BLUE, GRAY_70, RED } from '../../../styles/colors'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'

const RegNoWithLabel = ({
  id,
  label,
  defaultValue = '',
  tipLabel,
  errorLabel,
  onChange,
}: IRegNoWithLabel) => {
  const [form, setForm] = useState({
    [id]: defaultValue,
    regNo2: '',
  })

  useEffect(() => {
    onChange(id, form[id] + form.regNo2)
  }, [form])

  const handleChange = (id: string, value: string) => {
    setForm({ ...form, [id]: value })
  }

  return (
    <$.Wrapper>
      <$.LabelContainer>
        <Label color={GRAY_70} label={label} />
      </$.LabelContainer>
      <$.InputContainer errorLabel={errorLabel}>
        <$.InputDiv errorLabel={errorLabel}>
          <Input id={id} defaultValue={defaultValue} onChange={handleChange} />
        </$.InputDiv>
        <$.InputDashDiv>-</$.InputDashDiv>
        <$.InputDiv errorLabel={errorLabel}>
          <Input id="regNo2" type="password" onChange={handleChange} />
        </$.InputDiv>
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
export default RegNoWithLabel
