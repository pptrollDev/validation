import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { useCertificationState } from '../../../context/Certification'
import Complete from '../../organisms/Complete'
import { IIncome, IOffice } from '../../organisms/Complete/type'

const TComplete = () => {
  const router = useRouter()
  const certification = useCertificationState()
  const [incomes, setIncomes] = useState<IIncome[]>()
  const [office, setOffice] = useState<IOffice>()

  useEffect(() => {
    if (certification) {
      getTaxIncomes()
      getTaxOffice()
    } else router.push('/')
  }, [])

  const getTaxIncomes = () => {
    fetch('http://127.0.0.1:3001/api/v1/tax/incomes')
      .then((res) => res.json())
      .then((res) => {
        setIncomes(res.data.tax.incomes)
      })
  }

  const getTaxOffice = () => {
    fetch('http://127.0.0.1:3001/api/v1/tax/office')
      .then((res) => res.json())
      .then((res) => {
        setOffice(res.data.tax.office)
      })
  }

  return certification !== undefined &&
    incomes !== undefined &&
    office !== undefined ? (
    <Complete certification={certification} incomes={incomes} office={office} />
  ) : null
}

export default TComplete
