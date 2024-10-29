export interface SectionImageAndTextDefaultData {
  id: string
  image: {
    src: string
    alt: string
  }
  title: {
    type: string
    text: string
    spans: {
      id: number
      class: string
      text: string
    }[]
  }
  subtitle: {
    type: string
    text: string
  }
  paragraph: {
    text: string
  }
}
