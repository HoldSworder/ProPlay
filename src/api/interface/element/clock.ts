import element from '@/api/interface/element_common'

export default interface clock extends element {
  styleId: number
  font: string
  size: number
  color: string
  bold: boolean
  italic: boolean
  backgroundcolor: string
  transparency: number
  alignment: number
  format: string
  timeDiff: number
  timeStyle: number
  Format: string
}