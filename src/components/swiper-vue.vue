<template>
  <div id="swiperBox">
    <!-- <swiper :options="swiperOption"
            ref="mySwiper">
      <swiper-slide v-for="(item, index) in imgList"
                    :key="index">
        <img :src="require(`@/assets/${item}`)"
             class="animated ani"
             swiper-animate-effect="fadeInUp"
             swiper-animate-duration="0.5s"
             swiper-animate-delay="0.3s"
             :style="{width: data.width + 'px',
                  height: data.height + 'px'}">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
      <div class="swiper-button-prev"
           slot="button-prev"></div>
      <div class="swiper-button-next"
           slot="button-next"></div>
      <div class="swiper-scrollbar"
           slot="scrollbar"></div>
    </swiper> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item, index) in imgList"
             :key="index">
          <img :src="getUrl(item)"
               swiper-animate-effect="fadeInUp"
               swiper-animate-duration="0.5s"
               swiper-animate-delay="0.3s"
               class="ani"
               :style="{width: data.width + 'px',
                  height: data.height + 'px'}">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import  {swiperAnimateCache, swiperAnimate} from "@/config/swiper-animate.js";
// import "animate.css";
import 'swiper/css/swiper.css'
import Swiper from "swiper";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class Home extends Vue {
  @Prop() data!: any;
  @Prop() imgList!: string[];
  @Prop() time!: number;
  @Prop() model!: string;
  @Prop() begin!: boolean;
  now: number = 0;
  swiperOption: any = {
    effect: this.checkTrans(this.data.transition),  //'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
    autoplay: {
      delay: (this.data.residenceTime + 2) * 1000
    },
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    //分页器
    pagination: {
      el: ".swiper-pagination"
    },
    // 滚动条
    scrollbar: {
      el: ".swiper-scrollbar"
    },
    // 上一张，下一张
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // 其他参数…………
    // on:{
    //   init: function(){
    //     swiperAnimateCache(this); //隐藏动画元素 
    //     swiperAnimate(this); //初始化完成开始动画
    //   }, 
    //   slideChangeTransitionEnd: function(){ 
    //     swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
    //     //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    //   } 
    // }
  };

  initSwiper() {
    const swiper = new Swiper(".swiper-container", this.swiperOption);
  }

  checkTrans(trans: string) {
    if(trans == 'fold') return "flip"
    else return trans
  }

  mounted() {
    this.initSwiper()
  }
}
</script>

<style scoped>
#swiperBox {
  overflow: hidden;
  position: absolute;
}
</style>