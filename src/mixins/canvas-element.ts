import { Vue, Component, Prop } from 'vue-property-decorator'
import { formatToS } from '@/common/tool'
import { FontStyle } from '@/common/text-style'

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

@Component
export class textMixins extends Vue {
  data!: any
  fontStyle = new FontStyle(this.data.effectColor)
  textStyle: any = {
    textShadow: this.fontStyle.getStyle(this.data.effectFont),
    opacity: this.data.transparency * 0.01,
    fontFamily: this.data.font,
    fontSize: `${this.data.size}px`,
    color: this.data.color,
    background: this.data.backgroundcolor,
    fontWhite: this.data.bold ? "bold" : "normal",
    fontStyle: this.data.italic ? "italic" : "normal",
    letterSpacing: this.data.wordSpace + "px",
    lineHeight: this.data.rowSpace,
    whiteSpace: this.data.multiline ? "normal" : "nowrap",
    textAlign: ["left", "center", "right"][this.data.alignment]
  }
}
