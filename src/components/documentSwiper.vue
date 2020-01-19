<template>
  <div id="swiperBox">
    <div id="imgBox"
         ref="imgBox">
      <!-- 下游无限循环 -->
      <!-- <img :src="require(`@/assets/${imgList[0]}`)" v-if=""> -->
      <img :src="getUrl(item)"
           :data-src="index"
           class="imgs"
           v-for="(item, index) in imgList"
           :key="index"
           :style="{width: data.width + 'px',
                  height: data.height + 'px'}">
      <!-- 上游无限循环 -->
      <img :src="require(`@/assets/${imgList[0]}`)"
           :style="{width: data.width + 'px',
                  height: data.height + 'px'}">
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class Swiper extends Vue {
  @Prop() data!: any;
  @Prop() imgList!: string[];
  @Prop() time!: number;
  @Prop() model!: string;
  @Prop() begin!: boolean;
  interval:any

  scroll() {
    const THAT = this
    const imgBox: any = this.$refs.imgBox;
    imgBox.style.top = 0;
    this.interval = setInterval(() => {
      let newTop = parseInt(imgBox.style.top) - 1;
      imgBox.style.top = newTop + "px";
      THAT.infiniteScroll(newTop)
    }, 10);
  }

  observer() {
    const THAT = this;
    const io = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((item: any) => {
          const target = item.target;
          const index = target.getAttribute("data-src");
          if (item.isIntersecting) {
            target.src = require(`@/assets/${THAT.imgList[index]}`);
            io.unobserve(target);
          }
        });
      },
      {
        root: document.querySelector("#swiperBox"),
        rootMargin: "50px 0px 50px 0px"
      }
    );

    const imgs = document.querySelectorAll(".imgs");
    imgs.forEach(item => {
      io.observe(item);
    });
  }

  infiniteScroll(val: any) {
    const imgBox: any = this.$refs.imgBox;
    const allHeight = this.data.height * this.imgList.length;
    if (allHeight == Math.abs(parseInt(val))) {
      imgBox.style.top = 0;
    }
  }

  @Watch("begin")
  onChanged(val: any, oldVal: any) {
    if (val) {
      this.scroll();
    }
  }

  mounted() {
    this.observer();
  }

  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
#swiperBox {
  overflow: hidden;
  position: absolute;
}
#imgBox {
  position: relative;
}
#imgBox img {
  display: block;
}
</style>