/**
 * 字符串脱敏处理
 * @param handleStr 需要脱敏的字符串
 * @param startIndex 脱敏字符串的第一个字符下标
 * @param handleNumber 需要脱敏的字符数量
 * @param sign 脱敏符号（默认*）
 * @returns
 */
const SensitiveStringHandle = (
  handleStr: string,
  startIndex: number = 0,
  handleNumber: number = 0,
  sign: string = '*'
): string => {
  let _handleStr = handleStr
  if (startIndex > _handleStr.length || startIndex < 0) {
    startIndex = 0
  }
  if (handleNumber === 0) {
    return _handleStr
  }
  // 脱敏符号的字符串
  let signStr = ''
  if (handleNumber > _handleStr.length) {
    handleNumber = _handleStr.length - startIndex
  }
  for (let index = 0; index < handleNumber; index++) {
    signStr = signStr.concat(sign)
  }
  const endIndex = startIndex + handleNumber
  // 需要脱敏的字符串片段
  const sensitiveStr = _handleStr.slice(startIndex, endIndex)

  _handleStr = _handleStr.replace(sensitiveStr, signStr)

  return _handleStr
}

export { SensitiveStringHandle }
