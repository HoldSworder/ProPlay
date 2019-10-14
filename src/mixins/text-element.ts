import { Vue, Component, Prop } from 'vue-property-decorator'
import { FontStyle } from '@/common/text-style'

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