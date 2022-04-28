export interface CustomDateArr {
  year?: number
  month?: number
  day?: number
  hours?: number
  minutes?: number
  seconds?: number
}

/**
 * 参考格式：yyyy-MM-dd、yyyy-MM-dd hh:mm:ss、yyyy年MM月dd日、yyyy年MM月dd日 mm分ss秒
 * @param template 时间字符串模板
 * @param customDate 可自定义日期（默认当前本地时间）
 * @returns
 */
const FormatDate = (
  template: string = 'yyyy-MM-dd hh:mm:ss',
  customDate: CustomDateArr = {}
): string => {
  let outputFormatDate: string = template
  let nowDate = new Date()
  if (JSON.stringify(customDate) !== '{}') {
    const {
      year = 1,
      month = 1,
      day = 1,
      hours = 1,
      minutes = 1,
      seconds = 1,
    } = customDate
    nowDate = new Date(year, month - 1, day, hours, minutes, seconds)
  }

  const currentYear = String(nowDate.getFullYear())
  const currentMonth =
    nowDate.getMonth() + 1 < 10
      ? `0${String(nowDate.getMonth() + 1)}`
      : String(nowDate.getMonth() + 1)
  const currentDate =
    nowDate.getDate() < 10
      ? `0${String(nowDate.getDate())}`
      : String(nowDate.getDate())
  const currentHours =
    nowDate.getHours() < 10
      ? `0${String(nowDate.getHours())}`
      : String(nowDate.getHours())
  const currentMinutes =
    nowDate.getUTCMinutes() < 10
      ? `0${String(nowDate.getUTCMinutes())}`
      : String(nowDate.getUTCMinutes())
  const currentSeconds =
    nowDate.getSeconds() < 10
      ? `0${String(nowDate.getSeconds())}`
      : String(nowDate.getSeconds())

  outputFormatDate = outputFormatDate
    .replaceAll(/yyyy|YYYY/g, currentYear)
    .replaceAll(/MM/g, currentMonth)
    .replaceAll(/(dd|DD)/g, currentDate)
    .replaceAll(/(hh|HH)/g, currentHours)
    .replaceAll(/(mm)/g, currentMinutes)
    .replaceAll(/(ss|SS)/g, currentSeconds)

  return outputFormatDate
}

export { FormatDate }
