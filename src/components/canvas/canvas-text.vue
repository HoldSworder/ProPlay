<template>
  <transition>
    <div v-if="now >= start && now <= end"
         class="canvas-container">
      <div ref="textContainer"
           :style="{...elementStyle, ...textStyle}">
        <span class="text-box"
              ref="textBox">{{data.text}}</span>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class textCanvas extends Vue {
  data!: any;
  start!: number;
  end!: number;
  textStyle: object = {
    opacity: this.data.transparency * 0.01,
    fontFamily: this.data.font,
    fontSize: this.data.size,
    color: this.data.color,
    background: this.data.backgroundcolor,
    fontWhite: this.data.bold ? "bold" : "normal",
    fontStyle: this.data.italic ? "italic" : "normal",
    letterSpacing: this.data.wordSpace + "px",
    lineHeight: this.data.rowSpace,
    whiteSpace: this.data.multiline ? "normal" : "nowrap",
    textAlign: ["left", "center", "right"][this.data.alignment]
  };

  @Watch("now")
  startPlay(val: number, old: number) {
    const THAT = this;
    if (val == this.start || (this.start == 0 && val == 1)) {
      console.log("ok");
      let interval = setInterval(() => {
        const box = THAT.$refs.textBox as HTMLElement;
        const container = THAT.$refs.textContainer as HTMLElement;
        if (!box) {
          clearInterval(interval);
          return;
        }
        let leftVal: number = parseInt(box.style.left as string) || 0;
        let topVal: number = parseInt(box.style.top as string) || 0;
        switch (THAT.data.rolling) {
          case 0:
            return;
          case 1:
            box.style.left = `${leftVal + THAT.data.playbackspeed}px`;
            break;
          case 2:
            box.style.left = `${leftVal - THAT.data.playbackspeed}px`;
            break;
          case 3:
            box.style.top = `${topVal + THAT.data.playbackspeed}px`;
            break;
          case 4:
            box.style.top = `${topVal - THAT.data.playbackspeed}px`;
            break;
        }

        const maxWidth = container.offsetWidth;
        const maxHeight = container.offsetHeight;

        //TODO: 添加无缝滚动效果
        if (Math.abs(leftVal) > maxWidth) {
          box.style.left = 0 + "px";
          leftVal = 0;
        } else if (Math.abs(topVal) > maxHeight) {
          box.style.top = 0 + "px";
          topVal = 0;
        }
      }, THAT.data.residencetime);
    }
  }
}
</script>

<style scoped>
.canvas-container div {
  position: relative;
  overflow: hidden;
}
.text-box {
  position: relative;
  left: 0;
}
</style>