export interface IContact {
  id: number
  name: string
  description: string
  role?: string
  image?: string
}

export interface ISortParams {
  sort: 'asc' | 'dsc' | 'def'
  roles: string[]
  search: ''
}
