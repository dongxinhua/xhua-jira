import { useEffect, useState } from 'react'
import qs from 'qs'

import XhuaSearch from './xhua-search'
import List from './list'
import { cleanObject, useDebounce } from 'apps/xhua-list/util'

const baseUrl = process.env.REACT_APP_API_URL

const XhuaList = () => {
  const [personInfo, setPersonInfo] = useState({
    name: '',
    personId: '',
  })
  const debouncedPersonInfo = useDebounce(personInfo, 500)

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(
      `${baseUrl}/projects?${qs.stringify(cleanObject(debouncedPersonInfo))}`
    ).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debouncedPersonInfo])

  useEffect(() => {
    fetch(`${baseUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  return (
    <>
      <XhuaSearch
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        users={users}
      />
      <List list={list} users={users} />
    </>
  )
}

export default XhuaList
