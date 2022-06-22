import React, { useState } from 'react'
import Certification from '../../organisms/Certification'
import { IError, IForm } from '../../organisms/Certification/type'
import { ITCertification } from './type'

const TCertification = ({ setIsVisible }: ITCertification) => {
  const [form, setForm] = useState<IForm>({ name: '', phone: '', regNo: '' })
  const [error, setError] = useState<IError>({
    name: undefined,
    phone: undefined,
    regNo: undefined,
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
