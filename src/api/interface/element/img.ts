import element from '@/api/interface/element_common'

export default interface img extends element {
  fileName: string
  transition: string
  scalingRatio: number
}