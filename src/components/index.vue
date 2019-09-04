<template>
  <div id="container">
    <div id="canvas"
         :style="{width: `${data.width}px`, height: `${data.height}px`}">
      <ImgCMM v-for="(item, index) in allParams(1)"
              :key="index"
              :data="item"></ImgCMM>
      
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
import Tool from "@/common/tool";
import dataITF from "@/api/interface/data";
import ImgCMM from "@/components/canvas/canvas-img.vue";
import test from "@/common/test";

@Component({
  components: {
    ImgCMM
  }
})
export default class HelloWorld extends Vue {
  private now: number = 0;
  private data: dataITF = test;

  @Prop() private msg!: string;

  get allParams() {
    const THAT = this
    return function(type:number) {
      let params = [];
      for (const item of THAT.data.params) {
        for (const it of item.elementList) {
          if(it.elementType === type) {
            params.push(it);
          }
        }
      }
      return params;
    }
  }

  start() {
    console.log("asdf");
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
  /* width: 800px;
  height: 450px; */
  transform: scale(0.7, 0.7);
  transform-origin: 0 0;
  position: absolute;
}
.btn-box {
  position: fixed;
  top: 5px;
}
</style>
