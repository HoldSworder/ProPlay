import data from '@/api/interface/data'

const src: data = {
  programId: 1,
  programCode: '1',
  programName: 'aaa',
  areaId: 1,
  width: 1920,
  height: 1080,
  insertTime: '2019-09-04',
  updateTime: '2019-09-04',
  userName: 'qzr',
  thumbnail: 'xxx',
  note: 'xxx',
  backgroundColor: '#fff',
  scalingRatio: 100,
  duration: '00:00:50',
  params: [
    {
      index: 0,
      trackName: '0',
      elementList: [
        {
          index: 0,
          elementId: 11,
          elementName: '111',
          beginTime: '00:00:00',
          endTime: '00:00:50',
          elementType: 1,
          width: 1920,
          height: 1080,
          location_x: 0,
          location_y: 0,
          fileName: '1.jpg',
          transition: 'slide',
          scalingRatio: 100
        },
        {
          index: 0,
          elementId: 11,
          elementName: '111',
          beginTime: '00:00:00',
          endTime: '00:00:50',
          elementType: 3,
          width: 1920,
          height: 1080,
          location_x: 0,
          location_y: 0,
          fileName: '1.jpg',
          inTime: 'slide',
          outTime: '100',
          volume: 123
        }
      ]
    }
  ]
}

export default src