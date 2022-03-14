import { useEffect, useState } from 'react'

const isFalsy = (val: any) => (val === 0 ? false : !val)

export const cleanObject = (obj: object) => {
  const result = { ...obj }
  Object.keys(result).forEach(key => {
    //@ts-ignore
    const val = result[key]
    if (isFalsy(val)) {
      //@ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
