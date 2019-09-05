<template>
  <transition :name="transitionName">
    <div class="canvas-container"
         v-if="now >= start && now <= end">
      <video :src="require(`@/assets/${data.fileName}`)"
             autoplay
             :muted="!data.audio"
             :width="data.width"
             :height="data.height"
             :style="elementStyle"></video>
    </div>
  </transition>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class videoCanvas extends Vue {}
</script>

<style scoped>
.canvas-container video {
  position: relative;
}
</style>