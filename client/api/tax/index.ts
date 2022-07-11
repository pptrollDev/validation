import { axiosApi } from '../../utils/axios'

export const getTaxIncomes = async () => {
  try {
    const responase = await axiosApi.get('tax/incomes')

    return { data: responase.data.data }
  } catch (error) {
    return { error: error }
  }
}

export const getTaxOffice = async () => {
  try {
    const responase = await axiosApi.get('tax/office')

    return { data: responase.data.data }
  } catch (error) {
    return { error: error }
  }
}
