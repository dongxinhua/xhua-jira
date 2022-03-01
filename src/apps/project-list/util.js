const isFalsy = val => (val === 0 ? false : !val)

export const cleanObject = obj => {
  const result = { ...obj }
  Object.keys(result).forEach(key => {
    const val = result[key]
    if (isFalsy(val)) {
      delete result[key]
    }
  })
  return result
}
