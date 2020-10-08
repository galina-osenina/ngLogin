export interface CompanyModel {
  id: number,
  title: string,
  departments: Array<{
    id: number,
    name: string
  }>
  employees: number[]
}
