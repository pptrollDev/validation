import React, { useEffect } from 'react'
import * as $ from './styles'
import {
  validateFullRegNo,
  validateName,
  validatePhoneNumber,
} from '../../../utils/validationUtil'
import Label from '../../atoms/Label'
import InputWithLabel from '../../molecules/InputWithLabel'
import RegNoWithLabel from '../../molecules/RegNoWithLabel'
import { ICertification, IError } from './type'
import Button from '../../atoms/Button'
import { GRAY_70 } from '../../../styles/colors'
import Wrapper from '../../molecules/Wrapper'

const Certification = ({
  form,
  setForm,
  error,
  setError,
  disabled,
  setDisabled,
  setIsVisible,
}: ICertification) => {
  useEffect(() => {
    if (error.name === '' && error.phone === '' && error.regNo === '')
      setDisabled(false)
  }, [error])

  const handleClick = () => {
    setIsVisible(true)
  }

  const handleChange = (id: string, value: string) => {
    if (disabled == undefined) setDisabled(true)
    else {
      const tempForm = { ...form, [id]: value }

      let tempError: IError = {}

      for (const [key, value] of Object.entries(tempForm)) {
        let errorMessage = ''

        switch (key) {
          case 'name':
            if (!validateName(value)) errorMessage = '올바른 이름을 입력하세요'
            break
          case 'phone':
            if (!validatePhoneNumber(value))
              errorMessage = '올바른 전화번호를 입력하세요'
            break
          case 'regNo':
            if (!validateFullRegNo(value))
              errorMessage = '올바른 주민등록번호를 입력하세요'
            break
        }

        tempError = { ...tempError, [key]: errorMessage }
      }

      setError(tempError)
      setForm({ ...form, [id]: value })
    }
  }

  return (
    <Wrapper>
      <$.TitleContainer>
        <div>
          <Label
            label={`${'정확한 환급액 조회를 위해'}\n${'아래 정보가 필요해요!'}`}
            fontWeight="700"
            fontSize="24px"
            lineHeight="150%"
          />
        </div>
      </$.TitleContainer>
      <$.GuideContainer>
        <div>
          <Label label={`${'고객님의 정보는 '}`} color={GRAY_70} />
          <Label label="안전하게 보호" fontWeight="700" color={GRAY_70} />
          <Label
            label={`${'되니'}\n${'안심하고 입력하세요!'}`}
            color={GRAY_70}
          />
        </div>
        <div>
          <img src="/icons/Guide.svg" alt="guide" />
        </div>
      </$.GuideContainer>
      <$.InputWrapper>
        <$.InputContainer>
          <InputWithLabel
            id="name"
            label="이름"
            tipLabel="닉네임이 아닌 실명인지 확인해주세요."
            errorLabel={error.name}
            onChange={handleChange}
          />
        </$.InputContainer>
        <$.InputContainer>
          <InputWithLabel
            id="phone"
            label="휴대폰 번호"
            errorLabel={error.phone}
            onChange={handleChange}
          />
        </$.InputContainer>
        <$.InputContainer>
          <RegNoWithLabel
            id="regNo"
            label="주민등록 번호"
            errorLabel={error.regNo}
            onChange={handleChange}
          />
        </$.InputContainer>
      </$.InputWrapper>
      <$.ButtonContainer>
        <Button
          id="submit"
          label="다음"
          width="100%"
          disabled={disabled}
          onClick={handleClick}
        />
      </$.ButtonContainer>
    </Wrapper>
  )
}

export default Certification
