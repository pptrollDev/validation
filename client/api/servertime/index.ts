import { axiosApi } from '../../utils/axios'

export const getServerTime = async () => {
  try {
    const responase = await axiosApi.get('serverTime')

    return { data: responase.data.data }
  } catch (error) {
    return { error: error }
  }
}
