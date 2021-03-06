import data from '@/api/interface/data'
import test1 from './test1'

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
          beginTime: '00:00:00',
          endTime: '00:00:05',
          elementType: 1,
          elementData: {
            index: 0,
            elementId: 1,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 100,
            location_y: 100,
            fileName: '1.jpg',
            transition: 'fade',
            scalingRatio: 80
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:10',
          elementType: 1,
          elementData: {
            index: 0,
            elementId: 2,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 800,
            location_y: 500,
            fileName: '2.jpg',
            transition: 'fold',
            scalingRatio: 100
          }
        },
        {
          beginTime: '00:00:20',
          endTime: '00:01:40',
          elementType: 2,
          elementData: {
            index: 0,
            elementId: 3,
            elementName: '111',
            width: 1280,
            height: 720,
            location_x: 100,
            location_y: 200,
            fileName: '1.mp4',
            inTime: '00:00:05',
            outTime: '00:00:15',
            scalingRatio: 100,
            video: true,
            audio: true,
            volume: 123
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:30',
          elementType: 3,
          elementData: {
            index: 0,
            elementId: 4,
            elementName: '111',
            fileName: '1.flac',
            inTime: '00:00:50',
            outTime: '00:01:00',
            volume: 123
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:25',
          elementType: 4,
          elementData: {
            index: 0,
            elementId: 5,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 500,
            location_y: 200,
            fileName: '1.flac',
            text:
              '&nbsp;&nbsp;&nbsp;111测试测试测试测试测试测试测试测试测试测试测试测试测试<br/>测试测试测试测试测试测试测试测试<br/>测试测试测试测试测试测试测试测试333',
            alignment: 1,
            multiline: false,
            rolling: 2,
            font: 'Serif',
            size: 20,
            color: 'red',
            backgroundcolor: 'white',
            transparency: 80,
            bold: true,
            italic: true,
            playbackspeed: 1,
            residencetime: 1,
            wordSpace: 3,
            rowSpace: 3,
            effectColor: 'yellow',
            effectFont: 2
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:20',
          elementType: 7,
          elementData: {
            index: 0,
            elementId: 6,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 500,
            location_y: 200,
            fileName: '1.flac',
            alignment: 1,
            font: 'Serif',
            size: 20,
            color: 'red',
            backgroundcolor: 'white',
            transparency: 80,
            bold: true,
            italic: true,
            timeDiff: 1,
            timeStyle: 1,
            Format: 'hh:mm:ss pm'
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:20',
          elementType: 8,
          elementData: {
            index: 0,
            elementId: 7,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 500,
            location_y: 200,
            alignment: 1,
            backgroundcolor: 'white',
            font: 'Serif',
            size: 20,
            color: 'red',
            bold: true,
            italic: true,
            city: '武汉',
            data: 0,
            weather: true,
            temperature: true,
            windPower: true,
            styleId: 1
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:20',
          elementType: 9,
          elementData: {
            index: 0,
            elementId: 8,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 1200,
            location_y: 200,
            url: 'http://www.tencent.com',
            transparency: 0.5,
            overflow: 1
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:20',
          elementType: 10,
          elementData: {
            index: 0,
            elementId: 9,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 1200,
            location_y: 600,
            imageList: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
            transition: 'slide',
            residenceTime: 5
          }
        },
        {
          beginTime: '00:00:00',
          endTime: '00:00:20',
          elementType: 12,
          elementData: {
            index: 0,
            elementId: 10,
            elementName: '111',
            width: 520,
            height: 345,
            location_x: 400,
            location_y: 600,
            imageList: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
            transition: 'fold',
            residenceTime: 5
          }
        }
      ]
    }
  ]
}

// export default test1
export default src
