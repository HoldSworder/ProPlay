<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end">
    <Swiper :imgList="data.imageList"
            :time="data.residenceTime"
            :model="data.transition"
            :data="data"
            :style="{...elementStyle, ...{opacity: data.scalingRatio * 0.01}}"></Swiper>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";
import Swiper from "@/components/swiper.vue";

@Component({
  mixins: [canvasMixins],
  components: {
    Swiper
  }
})
export default class documentCanvas extends Vue {}
</script>

<style scoped>
.canvas-container {
  position: relative;
}
</style>