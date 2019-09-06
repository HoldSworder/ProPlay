import element from '@/api/interface/element_common'

export default interface text extends element {
  text: string
  alignment: number
  multiline: boolean
  rolling: number
  font: string
  size: number
  color: string
  backgroundcolor: string
  transparency: number
  bold: boolean
  italic: boolean
  playbackspeed: number
  residencetime: number
  fileName: string
  wordSpace: number
  rowSpace: number
  effectColor: string
  effectFont: number
}