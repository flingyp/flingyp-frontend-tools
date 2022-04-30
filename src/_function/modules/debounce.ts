/**
 * 防抖函数：回调函数延迟 delay 毫秒执行，如果在指定时间又有回调函数进来 则继续往后延迟执行
 */
export default (callback: Function, delay: number = 1000) => {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback()
    }, delay)
  }
}
