interface User {
  name: string
  id: number
  email: string
  title: string
  organization: string
}

interface ISearchProps {
  personInfo: {
    name: string
    personId: string
  }
  setPersonInfo: (personInfo: ISearchProps['personInfo']) => void
  users: User[]
}

const XhuaSearch = ({ personInfo, setPersonInfo, users }: ISearchProps) => {
  return (
    <>
      <form action=''>
        <input
          type='text'
          value={personInfo.name}
          onChange={e => setPersonInfo({ ...personInfo, name: e.target.value })}
        />
        <select
          value={personInfo.personId}
          onChange={e =>
            setPersonInfo({ ...personInfo, personId: e.target.value })
          }
        >
          <option value=''>负责人</option>
          {users.map(user => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </form>
    </>
  )
}

export default XhuaSearch
