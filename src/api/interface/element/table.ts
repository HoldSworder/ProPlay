import element from '@/api/interface/element_common'

interface cell {
  index: number
  width: number
  text: string
}

interface row {
  index: number
  height: number
  cellList: cell[]
}

export default interface table extends element {
  rowList: row[]
  mqAddress: string
  queueName: string
  dataColumnList: string[]
  styleId: number
}