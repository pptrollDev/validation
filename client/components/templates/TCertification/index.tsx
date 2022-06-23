import React, { useState } from 'react'
import Certification from '../../organisms/Certification'
import { IError, IForm } from '../../organisms/Certification/type'
import { ITCertification } from './type'

const TCertification = ({ form, setForm, setIsVisible }: ITCertification) => {
  const [error, setError] = useState<IError>({
    name: undefined,
    phoneNumber: undefined,
    regNumber: undefined,
  })
  const [disabled, setDisabled] = useState<boolean>()

  return (
    <Certification
      form={form}
      setForm={setForm}
      error={error}
      setError={setError}
      disabled={disabled}
      setDisabled={setDisabled}
      setIsVisible={setIsVisible}
    />
  )
}

export default TCertification
