<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end">
    <Swiper :imgList="data.imageList"
            :time="data.residenceTime"
            :model="data.transition"
            :data="data"
            :begin="now > 0"
            :style="{...elementStyle, ...{opacity: data.scalingRatio * 0.01}}"></Swiper>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";
// import Swiper from "@/components/swiper.vue";
import Swiper from "@/components/swiper-vue.vue";

@Component({
  mixins: [canvasMixins],
  components: {
    Swiper
  }
})
export default class imgBoxCanvas extends Vue {}
</script>

<style scoped>
.canvas-container {
  position: relative;
}
</style>