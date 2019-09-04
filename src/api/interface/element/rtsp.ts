import element from '@/api/interface/element_common'

export default interface rtsp extends element {
  address: string
  protocol: number
}