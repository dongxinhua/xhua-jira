import { useState } from 'react'

export const useArray = <T>(persons: T[]) => {
  const [value, setValue] = useState(persons)

  const clear = () => {
    setValue([])
  }

  const removeIndex = (index: number) => {
    const newValue = [...value]
    const res = newValue.filter((item, indey) => {
      return index !== indey
    })
    setValue(res)
  }

  const add = (person: T) => {
    const newValue = [...value, person]
    setValue(newValue)
  }

  return {
    value,
    clear,
    removeIndex,
    add,
  }
}

export const useMount = (func: () => void) => {
  func()
}
