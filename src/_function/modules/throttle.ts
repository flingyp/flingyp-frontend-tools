/**
 * 节流函数：在规定的单位时间内，回调函数只能执行一次
 * 就好比水库里的阀门，只在指定时间内打开
 */
export default (callback: Function, delay: number = 1000): Function => {
  // 记录第一次执行回调函数的时间
  let lastDoMillSeconds = 0
  return () => {
    const currentMilliSeconds = new Date().getTime()
    // 现在的时间 > 上一次执行回调函数的时间 + delay 毫秒数： 就可以执行下一次回调函数
    if (currentMilliSeconds > lastDoMillSeconds + delay) {
      callback()
      lastDoMillSeconds = currentMilliSeconds
    }
  }
}
