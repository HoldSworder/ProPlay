import img from '@/api/interface/element/img'
import audio from '@/api/interface/element/audio'
import clock from '@/api/interface/element/clock'
import document from '@/api/interface/element/document'
import html from '@/api/interface/element/html'
import imgbox from '@/api/interface/element/imgbox'
import rtsp from '@/api/interface/element/rtsp'
import table from '@/api/interface/element/table'
import text from '@/api/interface/element/text'
import video from '@/api/interface/element/video'
import weather from '@/api/interface/element/weather'
import element from '@/api/interface/element_common'

interface track {
  close?: boolean
  lock?: boolean
  index: number
  trackName: string
  elementList: any[]
}

export default interface data {
  programId: number
  programCode: string
  programName: string
  areaId: number
  width: number
  height: number
  insertTime: string
  updateTime: string
  userName: string
  thumbnail: string
  note: string
  backgroundColor: string
  scalingRatio: number
  duration: string
  params: track[]
}
