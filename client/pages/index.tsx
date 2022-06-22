import { NextPage } from 'next'
import { useState } from 'react'
import TCertification from '../components/templates/TCertification'
import TCertificationModal from '../components/templates/TCertificationModal'

const Index: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {isVisible && (
        <TCertificationModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <TCertification setIsVisible={setIsVisible} />
    </>
  )
}

export default Index
