import { _number } from '../../src/index'

test('random float number', () => {
  expect(_number.CreateRandomFloat(10, 20)).toBeGreaterThanOrEqual(10)
  expect(_number.CreateRandomFloat(10, 20)).toBeLessThan(20)
  expect(() => _number.CreateRandomFloat(30, 20)).toThrow(
    'the maximum number shall not be less than the minimum number'
  )
})

test('random int number', () => {
  expect(_number.CreateRandomInt(10, 20)).toBeGreaterThanOrEqual(10)
  expect(_number.CreateRandomInt(10, 20)).toBeLessThanOrEqual(20)
  expect(() => _number.CreateRandomInt(30, 20)).toThrow(
    'the maximum number shall not be less than the minimum number'
  )
})
