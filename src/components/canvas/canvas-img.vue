<template>
  <transition :name="transitionName">
    <div v-if="now >= start && now <= end"
         class="canvas-container">
      <img :src="require(`@/assets/${data.fileName}`)"
           :style="{...elementStyle, ...{opacity: data.scalingRatio * 0.01}}">
    </div>
  </transition>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class imgCanvas extends Vue {}
</script>

<style scoped>
.canvas-container img {
  position: relative;
}
</style>