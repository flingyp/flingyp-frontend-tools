import { _regexp } from '../../src/index'

test('check whether the phone number is valid', () => {
  // 所有测试用例的手机号码 均是通过网站上在线生成工具随机生成
  expect(_regexp.CheckPhoneNumber('13148367212')).toBe(true)
  expect(_regexp.CheckPhoneNumber('17524622494')).toBe(true)
  expect(_regexp.CheckPhoneNumber('18419496793')).toBe(true)
  expect(_regexp.CheckPhoneNumber('18869205671')).toBe(true)
  expect(_regexp.CheckPhoneNumber('15900192124')).toBe(true)
  expect(_regexp.CheckPhoneNumber('15549064841')).toBe(true)

  expect(_regexp.CheckPhoneNumber('14349064841')).toBe(false)
  expect(_regexp.CheckPhoneNumber('15449064841')).toBe(false)
  expect(_regexp.CheckPhoneNumber('16849064841')).toBe(false)
  expect(_regexp.CheckPhoneNumber('17949064841')).toBe(false)
  expect(_regexp.CheckPhoneNumber('19449064841')).toBe(false)
})

test('check whether the IdCard number is valid', () => {
  // 所有测试用例的身份证号码 均是通过网站上在线生成工具随机生成
  expect(_regexp.CheckIdCard('110101199006075838')).toBe(true)
  expect(_regexp.CheckIdCard('110101199003075744')).toBe(true)
  expect(_regexp.CheckIdCard('36010219900307877X')).toBe(true)
  expect(_regexp.CheckIdCard('310101200003073004')).toBe(true)
  expect(_regexp.CheckIdCard('361102200003079349')).toBe(true)
  expect(_regexp.CheckIdCard('510104199003071472')).toBe(true)
  expect(_regexp.CheckIdCard('620102199003076831')).toBe(true)
  expect(_regexp.CheckIdCard('500101200003073821')).toBe(true)
})

test('check whether the email is valid', () => {
  // 所有测试用例的邮箱地址 均是通过网站上在线生成工具随机生成
  expect(_regexp.CheckEmailUrl('tools@qq.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('tools@163.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('tools@gmail.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('tools@foxmail.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('tools@outlook.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('tools@126.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('tools@domain.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('flingyp@live.com')).toBe(true)
  expect(_regexp.CheckEmailUrl('flingyp@uutool.cn')).toBe(true)
})

test('check whether the email is valid', () => {
  // 所有测试用例的QQ账号 均是虚构出来的
  expect(_regexp.CheckQQNumber('1915801633')).toBe(true)
  expect(_regexp.CheckQQNumber('1215801633')).toBe(true)

  expect(_regexp.CheckQQNumber('121580163387')).toBe(false)
})

test('check whether string is including chinese', () => {
  expect(_regexp.CheckIncludeChinese('好好好')).toBe(true)
  expect(_regexp.CheckIncludeChinese('Hello好World')).toBe(true)
  expect(_regexp.CheckIncludeChinese('YTo噢噢ols')).toBe(true)

  expect(_regexp.CheckIncludeChinese('@flingyp/tools')).toBe(false)
})

test('check whether string is including number', () => {
  expect(_regexp.CheckIncludeNumber('好123好4235好')).toBe(true)
  expect(_regexp.CheckIncludeNumber('HelloWorld')).toBe(false)
  expect(_regexp.CheckIncludeNumber('YT2o噢噢o4ls')).toBe(true)

  expect(_regexp.CheckIncludeNumber('@flingyp/tools')).toBe(false)
})
