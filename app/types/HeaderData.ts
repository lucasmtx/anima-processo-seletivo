export interface HeaderData {
  logo: string
  links: {
    id: number
    text: string
    to: string
  }[]
  action: {
    text: string
    to: string
  }
}
