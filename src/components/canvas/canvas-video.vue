<template>
  <transition :name="transitionName">
    <div class="canvas-container"
         v-if="now >= start && now <= end">
      <video :src="require(`@/assets/${data.fileName}`)"
             id="video"
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

@Component({
  mixins: [canvasMixins]
})
export default class videoCanvas extends Vue {
  @Watch("now")
  startPlay(val: number) {
    const THAT = this
    this.$nextTick(function() {
      if (val == THAT.start) {
        let video: any = document.querySelector("#video");
        console.log(video);
        video.currentTime = 20;
      }
    });
  }
}
</script>

<style scoped>
.canvas-container video {
  position: relative;
}
</style>