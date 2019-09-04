import element from '@/api/interface/element_common'

export default interface audio extends element {
  fileName: string
  inTime: string
  outTime: string
  volume: number
}