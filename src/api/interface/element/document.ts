import element from '@/api/interface/element_common'

export default interface document extends element {
  fileName: string
  transition: string
  scalingRatio: number
  residenceTime: number
  imageList: string[]
}