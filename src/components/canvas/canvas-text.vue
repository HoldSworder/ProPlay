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
import { canvasMixins, textMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins, textMixins]
})
export default class textCanvas extends Vue {
  data!: any;
  start!: number;

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
            if (Math.abs(leftVal) > container.offsetWidth)
              box.style.left = -box.offsetWidth + "px";
            break;
          case 2:
            box.style.left = `${leftVal - THAT.data.playbackspeed}px`;
            if (Math.abs(leftVal) > box.offsetWidth)
              box.style.left = container.offsetWidth + "px";
            break;
          case 3:
            box.style.top = `${topVal + THAT.data.playbackspeed}px`;
            if (Math.abs(topVal) > container.offsetHeight)
              box.style.top = -box.offsetHeight + "px";
            break;
          case 4:
            box.style.top = `${topVal - THAT.data.playbackspeed}px`;
            if (-topVal > box.offsetHeight)
              box.style.top = container.offsetHeight + "px";
            break;
        }

        const maxWidth = container.offsetWidth + box.offsetWidth;
        const maxHeight = container.offsetHeight + box.offsetHeight;
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