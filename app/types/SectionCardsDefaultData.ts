export interface SectionCardsDefaultData {
  id: string
  title: {
    type: string
    text: string
  }
  cards: {
    id: number
    icon: string
    title: {
      type: string
      text: string
    }
    paragraph: {
      text: string
    }
  }[]
}
