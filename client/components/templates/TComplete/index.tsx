import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { getTaxIncomes, getTaxOffice } from '../../../api/tax'
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
      getIncomes()
      getOffice()
    } else router.push('/')
  }, [])

  const getIncomes = async () => {
    const { data, error } = await getTaxIncomes()

    if (error) return

    setIncomes(data.tax.incomes)
  }

  const getOffice = async () => {
    const { data, error } = await getTaxOffice()

    if (error) return

    setOffice(data.tax.office)
  }

  return certification !== undefined &&
    incomes !== undefined &&
    office !== undefined ? (
    <Complete certification={certification} incomes={incomes} office={office} />
  ) : null
}

export default TComplete
