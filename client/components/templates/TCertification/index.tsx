import React, { useState } from 'react'
import Certification from '../../organisms/certification'
import { IError, IForm } from '../../organisms/certification/type'

const TCertification = () => {
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
    />
  )
}

export default TCertification
