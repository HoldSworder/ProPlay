import { Vue, Component, Prop } from 'vue-property-decorator'
import { formatToS } from '@/common/tool'

@Component
export class canvasMixins extends Vue {
  @Prop() data!: any
  @Prop() now!: number
  start: number = formatToS(this.data.beginTime)
  end: number = formatToS(this.data.endTime)
  // urlAddress: string = 'http://127.0.0.1:8080/images/thumbnail/material/'
  urlAddress: string = '/images/thumbnail/material/'
  imgAddress: string = '/files/idm/'

  elementStyle: object = {
    width: `${this.data.width}px`,
    height: `${this.data.height}px`,
    top: `${this.data.location_y}px`,
    left: `${this.data.location_x}px`
  }

  getUrl(url: string, areaId = 'none') {
    if(areaId !== 'none') {
      return `${this.imgAddress}${areaId}/${url}`
    }else {
      return `${this.urlAddress}${url}`
    }
  }

  get transitionName() {
    let name!: string
    switch (this.data.transition) {
      case 'slide':
        name = 'el-fade-in-linear'
        break

      case 'fold':
        name = 'el-collapse-transition'
        break

      case 'fade':
        name = 'el-zoom-in-center'
        break
    }
    return name
  }
}


