import element from '@/api/interface/element_common'

export default interface weather extends element {
  styleId: number
  city: string
  data: number
  weather: boolean
  temperature: boolean
  windPower: boolean
  font: string
  size: number
  color: string
  bold: boolean
  italic: boolean
  alignment: number
}