<template>
  <div id="swiperBox">
    <!-- <div id="imgBox" :style="{width: data.width * imgList.length + 'px', height: data.height + 'px'}"> -->
    <!-- <img :src="require(`@/assets/${nowImg}`)"
         class="animated bounceOutDown"
         :style="{width: data.width + 'px', height: data.height + 'px'}"> -->
    <img :src="require(`@/assets/${item}`)"
         v-for="(item, index) in imgList"
         v-show="now == index"
         class="animated"
         :class="{bounceOutDown: now === index}"
         :key="index"
         :style="{width: data.width + 'px', height: data.height + 'px'}">
    <!-- </div> -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import "animate.css";

@Component
export default class Swiper extends Vue {
  @Prop() data!: any;
  @Prop() imgList!: string[];
  @Prop() time!: number;
  @Prop() model!: string;
  now: number = 0;

  // get nowImg() {
  //   return this.imgList[this.now]
  // }

  mounted() {
    console.log("start Swiper");
    const THAT = this;
    setInterval(() => {
      THAT.now++
      console.log(THAT.now)
    }, 2000)
  }
}
</script>

<style scoped>
/* #swiperBox {
  overflow: hidden;
  position: relative;
}
#imgBox {
  position: relative
} */
</style>