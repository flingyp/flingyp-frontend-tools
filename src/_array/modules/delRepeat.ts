const DelRepeatArray = <T>(array: Array<T | any>): Array<T | any> => {
  const setArray = new Set(array)
  return Array.from(setArray)
}

export { DelRepeatArray }
