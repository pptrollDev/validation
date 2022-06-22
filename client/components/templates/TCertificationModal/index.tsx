import React, { useState } from 'react'
import CertificationModal from '../../organisms/CertificationModal'
import { IForm } from '../../organisms/CertificationModal/type'
import { ITCertificationModal } from './type'

const TCertificationModal = ({
  isVisible,
  setIsVisible,
}: ITCertificationModal) => {
  const [form, setForm] = useState<IForm>({
    privacy: false,
    service: false,
    unique: false,
    info: false,
  })

  return (
    <CertificationModal
      form={form}
      setForm={setForm}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    />
  )
}

export default TCertificationModal
