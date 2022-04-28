/**
 * 生成随机数字字符串（默认长度为16）
 * @param length
 * @returns
 */
const RandomNumberStr = (length: number = 16) => {
  let _randomNumberStr = ''
  for (let index = 0; index < length; index++) {
    _randomNumberStr += Math.floor(Math.random() * 10)
  }
  return _randomNumberStr
}

/**
 * 生成随机字符串（包括数字和字母，默认长度为25）
 * @param length
 * @returns
 */
const RandomStr = (length: number = 25) => {
  const chars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  let _randomStr = ''
  for (let i = 0; i < length; i++) {
    _randomStr += chars[Math.floor(Math.random() * 36)]
  }
  return _randomStr
}

export { RandomNumberStr, RandomStr }
