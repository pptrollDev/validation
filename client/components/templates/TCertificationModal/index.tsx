import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { useCertificationDispatch } from '../../../context/Certification'
import { useEasySignDispatch } from '../../../context/EasySign'
import CertificationModal from '../../organisms/CertificationModal'
import { IForm } from '../../organisms/CertificationModal/type'
import { ITCertificationModal } from './type'

const TCertificationModal = ({
  form,
  isVisible,
  setIsVisible,
}: ITCertificationModal) => {
  const router = useRouter()
  const certificationDispatch = useCertificationDispatch()
  const easySignDispatch = useEasySignDispatch()
  const [modalForm, setModalForm] = useState<IForm>({
    privacy: false,
    service: false,
    unique: false,
    info: false,
  })

  const postEasysignRequest = () => {
    fetch('http://127.0.0.1:3001/api/v1/easysign/request', { method: 'post' })
      .then((res) => res.json())
      .then((res) => {
        certificationDispatch({
          type: 'createCertification',
          data: form,
        })
        easySignDispatch({ type: 'createEasySign', data: res.data })
        router.push('/waiting')
      })
  }

  return (
    <CertificationModal
      form={modalForm}
      setForm={setModalForm}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      submit={() => {
        postEasysignRequest()
      }}
    />
  )
}

export default TCertificationModal
