<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end">
    <audio :src="getUrl(data.fileName)"
           id="audio"
           loop
           autoplay></audio>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";
import { formatToS } from "@/common/tool";

@Component({
  mixins: [canvasMixins]
})
export default class audioCanvas extends Vue {
  data!: any;
  start!: number;
  playType:boolean = false;
  @Watch("now")
  startPlay(val: number) {
    this.$nextTick(function() {
      if(this.playType) return
      if (val > this.start) {
        this.playType = true
        this.setLoop();
      }
    });
  }

  //设置进出时间
  setLoop() {
    const THAT = this,
      audio: any = document.querySelector("#audio"),
      inTime: number = formatToS(this.data.inTime),
      outTime: number = formatToS(this.data.outTime);
    audio.currentTime = inTime;
    console.log(audio.currentTime)
    setTimeout(() => {
      THAT.setLoop();
    }, (outTime - inTime) * 1000);
  }
}
</script>

<style scoped>
</style>