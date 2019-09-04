import element from '@/api/interface/element_common'

export default interface video extends element {
  fileName: string
  inTime: string
  outTime: string
  video: boolean
  audio: boolean
  volume: number
  transition: string
  scalingRatio: number
}