<template>
  <transition :name="transitionName">
    <!-- 视频加载延迟两秒 -->
    <div class="canvas-container"
         v-if="now >= (start - 2) && now <= end">
      <video :src="require(`@/assets/${data.fileName}`)"
             id="video"
             loop
             autoplay
             :muted="!data.audio"
             :width="data.width"
             :height="data.height"
             :style="elementStyle"></video>
    </div>
  </transition>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";
import { formatToS } from "@/common/tool";

@Component({
  mixins: [canvasMixins]
})
export default class videoCanvas extends Vue {
  data!: any;
  start!: number;
  playType:boolean = false;
  @Watch("now")
  startPlay(val: number) {
    this.$nextTick(function() {
      if(this.playType) return
      if (val == this.start - 2) {
        this.playType = true
        this.setLoop();
      }
    });
  }

  //设置进出时间
  setLoop() {
    const THAT = this,
      video: any = document.querySelector("#video"),
      inTime = formatToS(this.data.inTime),
      outTime = formatToS(this.data.outTime);
    video.currentTime = inTime;
    setTimeout(() => {
      THAT.setLoop();
    }, (outTime - inTime + 2) * 1000);
  }
}
</script>

<style scoped>
.canvas-container video {
  position: relative;
}
</style>