interface Project {
  id: string
  name: string
  personId: string
  organization: string
  pin: string
}

interface User {
  name: string
  id: string
  email: string
  title: string
  organization: string
}

interface IListProps {
  list: Project[]
  users: User[]
}

const List = ({ list, users }: IListProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {users.find(user => user.id === item.personId)?.name || '未知'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default List
