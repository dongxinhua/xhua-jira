interface User {
  name: string
  id: number
  email: string
  title: string
  organization: string
}

interface ISearchProps {
  param: {
    name: string
    personId: string
  }
  setParam: (param: ISearchProps['param']) => void
  users: User[]
}

const SearchPanel = ({ param, setParam, users }: ISearchProps) => {
  return (
    <>
      <form action=''>
        <input
          type='text'
          value={param.name}
          onChange={e => setParam({ ...param, name: e.target.value })}
        />
        <select
          value={param.personId}
          onChange={e => setParam({ ...param, personId: e.target.value })}
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

export default SearchPanel
