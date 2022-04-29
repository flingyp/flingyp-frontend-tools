/**
 * 检测手机号码的是否有效
 * @param phoneNumber
 * @returns
 */
const CheckPhoneNumber = (phoneNumber: string): boolean => {
  if (phoneNumber === '') {
    throw new Error('please enter mobile phone number')
  }
  // 前三位数匹配规则 13\d、14[5-9]、15[0-3|5-9]、16[2567]、17[0-8]、18\d、19[0-35-9]
  // 后八位任意数字
  const checkPhoneRegExp =
    /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g
  return checkPhoneRegExp.test(phoneNumber)
}

/**
 * 检测身份证号码是否有效
 * @param idNumber
 * @returns
 */
const CheckIdCard = (idNumber: string): boolean => {
  if (idNumber === '') {
    throw new Error('please enter IdCard number')
  }
  const checkIdCardRegExp =
    /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|10|11|12)(0[1-9]|[1-2]\d|30|31)\d{3}[\dX]$/g
  return checkIdCardRegExp.test(idNumber)
}

/**
 * 校测邮箱地址是否有效
 * @param url
 * @returns
 */
const CheckEmailUrl = (url: string): boolean => {
  if (url === '') {
    throw new Error('please enter email url')
  }
  const checkEmailRegExp =
    /^[A-Za-z0-9-_\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g
  return checkEmailRegExp.test(url)
}

/**
 * 检测QQ号码（5-11位）
 * @param number
 * @returns
 */
const CheckQQNumber = (number: string): boolean => {
  if (number === '') {
    throw new Error('please enter QQ number')
  }
  // 5 - 11位的QQ号
  const checkQQRegExp = /^[1-9][0-9]{4,10}$/g
  return checkQQRegExp.test(number)
}

/**
 * 检测字符串中是否包含中文
 * @param checkString
 * @returns
 */
const CheckIncludeChinese = (checkString: string): boolean => {
  if (checkString === '') {
    throw new Error('please enter a string')
  }
  const checkStrIncludeChineseRegExp = /^.{0,}[\u4e00-\u9fa5]{1,}.{0,}$/g
  return checkStrIncludeChineseRegExp.test(checkString)
}

/**
 * 检测字符串中是否包含数字
 * @param checkString
 * @returns
 */
const CheckIncludeNumber = (checkString: string): boolean => {
  if (checkString === '') {
    throw new Error('please enter a string')
  }
  const checkStrIncludeNumberRegExp = /^.{0,}[0-9]{1,}.{0,}$/g
  return checkStrIncludeNumberRegExp.test(checkString)
}

export {
  CheckPhoneNumber,
  CheckIdCard,
  CheckEmailUrl,
  CheckQQNumber,
  CheckIncludeChinese,
  CheckIncludeNumber,
}
