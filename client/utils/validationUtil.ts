/**
 * 이름 유효성 검증
 */
export const validateName = (name: string) => {
  const isStep1 = /^[a-zA-Zㄱ-힣-_\s]+$/.test(name)
  let isStep2 = false
  let isStep3 = false
  let isStep4 = false

  if (name.length > 0) isStep4 = true

  if (isStep4 && name.length > 0 && name.length <= 50) isStep3 = true

  if (isStep3 && name[0] !== ' ' && name[name.length - 1] !== ' ')
    isStep2 = true

  return isStep1 && isStep2 && isStep3 && isStep4
}

/**
 * 휴대폰 번호 유효성 검증
 */
export const validatePhoneNumber = (phoneNumber: string) => {
  return /^(01[016789]|02|0[3-9][0-9])[0-9]{3,4}[0-9]{4}$/.test(phoneNumber)
}

/**
 * 전체 주민등록번호 유효성 검증
 */
export const validateFullRegNo = (regNo: string) => {
  if (
    !/^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))[0-9]{7}$/.test(regNo)
  )
    return false

  const magicNum = Number(regNo.substring(regNo.length - 1))
  const regNums = regNo.slice(0, 12).split('')

  let validMultiples = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
  let sumMultiple = 0

  for (let key in regNums) {
    sumMultiple += parseInt(regNums[key]) * validMultiples[key]
  }

  let validFlag = 11
  let foreignerValidFlag = parseInt(regNums[6])

  const isForeigner = [5, 6, 7, 8].includes(foreignerValidFlag)
  if (isForeigner) validFlag = 13

  let validNum = validFlag - (sumMultiple % 11)
  if (validNum >= 10) validNum %= 10

  return validNum === magicNum
}
