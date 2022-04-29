import { _string } from '../../src/index'

test('sensitive string handle', () => {
  expect(_string.SensitiveStringHandle('13698081137')).toBe('136*****137')

  expect(_string.SensitiveStringHandle('45062519290608115x')).toBe(
    '45062*********115x'
  )

  expect(_string.SensitiveStringHandle('13698081137', 4, 20)).toBe(
    '1369*******'
  )

  expect(_string.SensitiveStringHandle('13698081137', 3, 6, '*')).toBe(
    '136******37'
  )

  expect(_string.SensitiveStringHandle('13698081137', -1, 6, '*')).toBe(
    '******81137'
  )

  expect(_string.SensitiveStringHandle('13698081137', 100, 6, '*')).toBe(
    '******81137'
  )

  expect(_string.SensitiveStringHandle('13698081137', 100, 200, '*')).toBe(
    '***********'
  )

  expect(_string.SensitiveStringHandle('13698081137', 100, 200, '-')).toBe(
    '-----------'
  )
})
