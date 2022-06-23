export interface IWaiting {
  guides: IGuide[]
  minute: string
  second: string
  time: number
  submit: () => void
}

export interface IGuide {
  description: string
  image: string
  title?: string
}
