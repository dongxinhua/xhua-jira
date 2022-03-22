import { useEffect, useState } from 'react'

import XhuaSearch from './xhua-search'
import List from './list'
import { cleanObject, useDebounce } from 'apps/xhua-list/util'
import { useRequest } from 'common/utils/request'

const XhuaList = () => {
  const [personInfo, setPersonInfo] = useState({
    name: '',
    personId: '',
  })
  const debouncedPersonInfo = useDebounce(personInfo, 500)

  const clinet = useRequest()

  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    clinet('projects', {
      data: cleanObject(debouncedPersonInfo),
    }).then(setList)
  }, [debouncedPersonInfo, clinet])

  useEffect(() => {
    clinet('users').then(setUsers)
  }, [clinet])

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
