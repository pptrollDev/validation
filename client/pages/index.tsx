import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { IForm } from '../components/organisms/Certification/type'
import TCertification from '../components/templates/TCertification'
import TCertificationModal from '../components/templates/TCertificationModal'
import { useCertificationState } from '../context/Certification'

const Index: NextPage = () => {
  const certificationState = useCertificationState()
  const [isVisible, setIsVisible] = useState(false)
  const [form, setForm] = useState<IForm>()

  useEffect(() => {
    if (certificationState)
      setForm({
        ...certificationState,
        regNumber: certificationState.regNumber.slice(0, 6),
      })
    else setForm({ name: '', phoneNumber: '', regNumber: '' })
  }, [])

  useEffect(() => {
    console.log(certificationState)
  }, [certificationState])

  return form !== undefined ? (
    <>
      {isVisible && (
        <TCertificationModal
          form={form}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <TCertification
        form={form}
        setForm={setForm}
        setIsVisible={setIsVisible}
      />
    </>
  ) : null
}

export default Index
