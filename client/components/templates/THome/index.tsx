import React, { useState } from 'react'
import Home from '../../organisms/Home'
import { IError } from '../../organisms/Home/type'
import { ITHome } from './type'

const THome = ({ form, setForm, setIsVisible }: ITHome) => {
  const [error, setError] = useState<IError>({
    name: undefined,
    phoneNumber: undefined,
    regNumber: undefined,
  })
  const [disabled, setDisabled] = useState<boolean>()

  return (
    <Home
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

export default THome
