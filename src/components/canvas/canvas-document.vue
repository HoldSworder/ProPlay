<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end">
    <img :src="require(`@/assets/${data.fileName}`)"
         :style="{...elementStyle, ...{opacity: data.scalingRatio * 0.01}}">
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class documentCanvas extends Vue {}
</script>

<style scoped>
.canvas-container img {
  position: relative;
}
</style>