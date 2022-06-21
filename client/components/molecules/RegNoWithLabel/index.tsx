import React, { useEffect, useState } from 'react'
import * as $ from './styles'
import { IRegNoWithLabel } from './type'
import { BLUE, GRAY_70, RED } from '../../../styles/colors'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'

const RegNoWithLabel = ({
  id,
  label,
  tipLabel,
  errorLabel,
  onChange,
}: IRegNoWithLabel) => {
  const [form, setForm] = useState({
    regNo1: '',
    regNo2: '',
  })

  useEffect(() => {
    onChange(id, form.regNo1 + form.regNo2)
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
          <Input id="regNo1" value={form.regNo1} onChange={handleChange} />
        </$.InputDiv>
        <$.InputDashDiv>-</$.InputDashDiv>
        <$.InputDiv errorLabel={errorLabel}>
          <Input id="regNo2" value={form.regNo2} onChange={handleChange} />
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
