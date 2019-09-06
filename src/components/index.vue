<template>
  <div id="container">
    <div id="canvas"
         :style="{width: `${data.width}px`, height: `${data.height}px`}">
      <ImgCMM v-for="(item, index) in allParams(1)"
              :key="index+'img'"
              :data="item"
              :now="now"></ImgCMM>

      <VideoCMM v-for="(item, index) in allParams(2)"
                :key="index+'video'"
                :data="item"
                :now="now"></VideoCMM>

      <AudioCMM v-for="(item, index) in allParams(3)"
                :key="index+'audio'"
                :data="item"
                :now="now"></AudioCMM>

      <TextCMM v-for="(item, index) in allParams(4)"
               :key="index+'text'"
               :data="item"
               :now="now"></TextCMM>

      <ClockCMM v-for="(item, index) in allParams(7)"
                :key="index+'clock'"
                :data="item"
                :now="now"></ClockCMM>

    </div>
    <div class="btn-box">
      <el-button type="primary"
                 round
                 @click='start'>开始</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import dataITF from "@/api/interface/data";
import test from "@/common/test";
import ImgCMM from "@/components/canvas/canvas-img.vue";
import VideoCMM from "@/components/canvas/canvas-video.vue";
import AudioCMM from "@/components/canvas/canvas-audio.vue";
import TextCMM from "@/components/canvas/canvas-text.vue";
import ClockCMM from "@/components/canvas/canvas-clock.vue";

@Component({
  components: {
    ImgCMM,
    VideoCMM,
    AudioCMM,
    TextCMM,
    ClockCMM
  }
})
export default class Index extends Vue {
  private now: number = 0;
  private data: dataITF = test;

  @Prop() private msg!: string;

  get allParams() {
    const THAT = this;
    return function(type: number) {
      let params = [];
      for (const item of THAT.data.params) {
        for (const it of item.elementList) {
          if (it.elementType === type) {
            params.push(it);
          }
        }
      }
      return params;
    };
  }

  start() {
    const THAT = this;
    setInterval(function() {
      THAT.now++;
      console.log(THAT.now);
    }, 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
  background: black;
  transform: scale(0.7, 0.7);
  transform-origin: 0 0;
  position: absolute;
}
.btn-box {
  position: fixed;
  top: 5px;
}
</style>

<style>
.canvas-container {
  position: absolute;
}
</style>