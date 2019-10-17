<template>
  <div id="swiperBox">
    <img :src="require(`@/assets/${item}`)"
         v-for="(item, index) in imgList"
         v-show="now == index"
         class="animated"
         :class="classN"
         :key="index"
         :style="{width: data.width + 'px',
                  height: data.height + 'px'}">
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import "animate.css";

@Component
export default class Swiper extends Vue {
  @Prop() data!: any;
  @Prop() imgList!: string[];
  @Prop() time!: number;
  @Prop() model!: string;
  @Prop() begin!: boolean;
  now: number = 0;
  classN: object = {};

  classObj() {
    const THAT = this;
    let classArr = {
      slide: ["bounceInLeft", "bounceOutRight"],
      fold: ["flipInY", "flipOutY"],
      fade: ["fadeIn", "fadeOut"]
    };
    let res = [
      { [classArr[THAT.data.transition][0]]: true },
      { [classArr[THAT.data.transition][1]]: true }
    ];
    setTimeout(() => {
      THAT.classN = res[1];
    }, (this.data.residenceTime + 1) * 1000);
    THAT.classN = res[0];
  }

  @Watch("begin")
  onChanged(val: any, oldVal: any) {
    if (val) {
      this.startPlay();
    }
  }

  startPlay() {
    const THAT = this;
    this.classObj();
    setInterval(() => {
      THAT.now++;
      THAT.classObj();
    }, (THAT.data.residenceTime + 2) * 1000);
  }

  mounted() {
    if(this.begin) {
      this.startPlay()
    } 
  }
}
</script>

<style scoped>
#swiperBox {
  overflow: hidden;
  position: absolute;
}
/* #imgBox {
  position: relative
} */
</style>