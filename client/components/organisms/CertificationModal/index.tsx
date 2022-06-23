import React from 'react'
import * as $ from './styles'
import Modal from '../../molecules/Modal'
import Label from '../../atoms/Label'
import { GRAY_60 } from '../../../styles/colors'
import { ICertificationModal } from './type'
import Button from '../../atoms/Button'

const CertificationModal = ({
  form,
  setForm,
  isVisible,
  setIsVisible,
  submit,
}: ICertificationModal) => {
  const handleClick = (id: string, value?: boolean) => {
    switch (id) {
      case 'checkAll':
        if (form.privacy && form.service && form.unique && form.info)
          setForm({
            privacy: false,
            service: false,
            unique: false,
            info: false,
          })
        else setForm({ privacy: true, service: true, unique: true, info: true })
        break
      case 'close':
        setIsVisible(false)
        break
      case 'submit':
        submit()
        break
      default:
        setForm({ ...form, [id]: value })
        break
    }
  }

  return (
    <Modal isVisible={isVisible} onClick={() => handleClick('close')}>
      <$.CheckAllContainer onClick={() => handleClick('checkAll')}>
        {form.privacy && form.service && form.unique && form.info ? (
          <img src="/icons/CheckAllFocus.svg" alt="checkAll" />
        ) : (
          <img src="/icons/CheckAll.svg" alt="checkAll" />
        )}
        <Label label="약관에 모두 동의" fontSize="16px" />
      </$.CheckAllContainer>
      <$.CheckWrapper>
        <$.CheckContainer onClick={() => handleClick('privacy', !form.privacy)}>
          {form.privacy ? (
            <img src="/icons/CheckFocus.svg" alt="check" />
          ) : (
            <img src="/icons/Check.svg" alt="check" />
          )}
          <Label label="[필수] 개인정보 이용 동의" color={GRAY_60} />
        </$.CheckContainer>
        <$.CheckContainer onClick={() => handleClick('service', !form.service)}>
          {form.service ? (
            <img src="/icons/CheckFocus.svg" alt="check" />
          ) : (
            <img src="/icons/Check.svg" alt="check" />
          )}
          <Label label="[필수] 서비스 이용 약관 동의" color={GRAY_60} />
        </$.CheckContainer>
        <$.CheckContainer onClick={() => handleClick('unique', !form.unique)}>
          {form.unique ? (
            <img src="/icons/CheckFocus.svg" alt="check" />
          ) : (
            <img src="/icons/Check.svg" alt="check" />
          )}
          <Label label="[필수] 고유식별정보 처리 동의" color={GRAY_60} />
        </$.CheckContainer>
        <$.CheckContainer onClick={() => handleClick('info', !form.info)}>
          {form.info ? (
            <img src="/icons/CheckFocus.svg" alt="check" />
          ) : (
            <img src="/icons/Check.svg" alt="check" />
          )}
          <Label label="[필수] 제3자 정보제공 동의" color={GRAY_60} />
        </$.CheckContainer>
      </$.CheckWrapper>
      <div>
        <Button
          id="submit"
          label="동의하고 간편인증 하기"
          width="100%"
          disabled={!(form.privacy && form.service && form.unique && form.info)}
          onClick={handleClick}
        />
      </div>
    </Modal>
  )
}

export default CertificationModal
