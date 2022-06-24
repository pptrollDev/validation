import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { IForm } from '../components/organisms/Home/type'
import { useCertificationState } from '../context/Certification'
import THome from '../components/templates/THome'
import THomeModal from '../components/templates/THomeModal'

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

  return form !== undefined ? (
    <>
      {isVisible && (
        <THomeModal
          form={form}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <THome form={form} setForm={setForm} setIsVisible={setIsVisible} />
    </>
  ) : null
}

export default Index
