const _random = () => Math.random()

/**
 * 生成一个 [minNumber, maxNumber) 浮点数
 * @param minNumber
 * @param maxNumber
 * @returns
 */
const CreateRandomFloat = (minNumber: number, maxNumber: number) => {
  if (maxNumber < minNumber) {
    throw new Error(
      'the maximum number shall not be less than the minimum number'
    )
  }

  return _random() * (maxNumber - minNumber) + minNumber
}

/**
 * 生成一个 [minNumber, maxNumber] 随机整数
 * @param minNumber
 * @param maxNumber
 * @returns
 */
const CreateRandomInt = (minNumber: number, maxNumber: number) =>
  Math.ceil(CreateRandomFloat(minNumber, maxNumber))

export { CreateRandomFloat, CreateRandomInt }
