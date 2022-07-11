import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { postEasysignRequest } from '../../../api/easysign'
import { useCertificationDispatch } from '../../../context/Certification'
import { useEasySignDispatch } from '../../../context/EasySign'
import CertificationModal from '../../organisms/HomeModal'
import { IForm } from '../../organisms/HomeModal/type'
import { ITHomeModal } from './type'

const THomeModal = ({ form, isVisible, setIsVisible }: ITHomeModal) => {
  const router = useRouter()
  const certificationDispatch = useCertificationDispatch()
  const easySignDispatch = useEasySignDispatch()
  const [modalForm, setModalForm] = useState<IForm>({
    privacy: false,
    service: false,
    unique: false,
    info: false,
  })

  const postRequest = async () => {
    const { data, error } = await postEasysignRequest()

    if (error) return

    certificationDispatch({
      type: 'createCertification',
      data: form,
    })
    easySignDispatch({ type: 'createEasySign', data: data })
    router.push('/waiting')
  }

  return (
    <CertificationModal
      form={modalForm}
      setForm={setModalForm}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      submit={() => {
        postRequest()
      }}
    />
  )
}

export default THomeModal
