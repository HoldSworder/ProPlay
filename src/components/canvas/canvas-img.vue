<template>
  <transition :name="transitionName">
    <div v-if="now >= start && now <= end"
         class="canvas-container">
      <img :src="getUrl(data.fileName, data.areaId)"
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
export default class imgCanvas extends Vue {
  mounted() {
    // console.log(this.data)
  }
}
</script>

<style scoped>
.canvas-container img {
  position: relative;
}
</style>