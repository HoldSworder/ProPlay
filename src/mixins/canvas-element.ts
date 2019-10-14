import { Vue, Component, Prop } from 'vue-property-decorator'
import { formatToS } from '@/common/tool'


@Component
export class canvasMixins extends Vue {
  @Prop() data!: any
  @Prop() now!: number
  start: number = formatToS(this.data.beginTime)
  end: number = formatToS(this.data.endTime)
  elementStyle: object = {
    width: `${this.data.width}px`,
    height: `${this.data.height}px`,
    top: `${this.data.location_y}px`,
    left: `${this.data.location_x}px`
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


