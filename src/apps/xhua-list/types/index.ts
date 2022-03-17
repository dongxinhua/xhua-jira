import { User } from '../../../common/types/user'

interface Project {
  id: string
  name: string
  personId: string
  organization: string
  pin: string
}

interface IListProps {
  list: Project[]
  users: User[]
}

interface ISearchProps {
  personInfo: {
    name: string
    personId: string
  }
  setPersonInfo: (personInfo: ISearchProps['personInfo']) => void
  users: User[]
}

export type { User, Project, IListProps, ISearchProps }
