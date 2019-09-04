import element from '@/api/interface/element_common'

export default interface imgbox extends element {
  fileNameList: string[]
  transition: string
  scalingRatio: number
  residenceTime: number
}