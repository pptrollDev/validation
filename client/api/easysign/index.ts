import { axiosApi } from '../../utils/axios'
import { IComplete } from './type'

export const getEasysignGuides = async () => {
  try {
    const responase = await axiosApi.get('easysign/guides')

    return { data: responase.data.data }
  } catch (error) {
    return { error: error }
  }
}

export const postEasysignRequest = async () => {
  try {
    const responase = await axiosApi.post('easysign/request')

    return { data: responase.data.data }
  } catch (error) {
    return { error: error }
  }
}

export const postEasysignComplete = async (data?: IComplete) => {
  try {
    const responase = await axiosApi.post('easysign/complete', data)

    return { data: responase.data.data }
  } catch (error) {
    return { error: error }
  }
}
