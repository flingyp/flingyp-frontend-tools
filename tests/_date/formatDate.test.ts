import { _date } from '../../src/index'

test('date format handle', () => {
  expect(
    _date.FormatDate('yyyy年MM月dd日', {
      year: 2020,
    })
  ).toBe('2020年01月01日')

  expect(
    _date.FormatDate('yyyy年MM月dd日 hh', {
      year: 2020,
      month: 10,
      day: 28,
      hours: 12,
    })
  ).toBe('2020年10月28日 12')
})
