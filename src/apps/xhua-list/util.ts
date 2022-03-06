import { useEffect, useState } from 'react'

const isFalsy = (val: unknown) => (val === 0 ? false : !val)

export const cleanObject = (obj: object) => {
  const res = { ...obj }
  Object.keys(res).forEach(key => {
    //@ts-ignore
    if (isFalsy(res[key])) {
      //@ts-ignore
      delete res[key]
    }
  })
  console.log(res)
  return res
}

// 防抖
// const debounce = (func, delay) => {
//   let timeout = null

//   return (...params) => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }

//     timeout = setTimeout(() => {
//       func(...params)
//     }, delay)
//   }
// }

// const log = debounce(() => console.log(123), 1000)

// log()
// log()
// log()

// debounce hook
export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}