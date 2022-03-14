import { useState, useEffect } from 'react'
import List from './list'
import SearchPanel from './search-panel'
import { cleanObject, useDebounce } from './util'
import qs from 'qs'

const baseUrl = process.env.REACT_APP_API_URL

const ProjectList = () => {
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const debouncedValue = useDebounce(param, 500)

  useEffect(() => {
    fetch(
      `${baseUrl}/projects?${qs.stringify(cleanObject(debouncedValue))}`
    ).then(async res => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [debouncedValue])

  useEffect(() => {
    fetch(`${baseUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  return (
    <>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </>
  )
}

export default ProjectList
