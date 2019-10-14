<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end">
    <div :style="{...elementStyle, ...textStyle}"
         v-html="clockText">

    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";
import { textMixins } from "@/mixins/text-element";
import setClock from "@/common/clock-text";

@Component({
  mixins: [canvasMixins, textMixins]
})
export default class Home extends Vue {
  data!: any;
  clockText: any = "";
  @Watch("now")
  showText() {
    let text: any = setClock(
      this.data.timeDiff,
      this.data.timeStyle,
      this.data.Format
    );
    this.clockText = text;
  }

  mounted() {
    const THAT = this;
    this.$nextTick(() => {
      THAT.showText();
    });
  }
}
</script>

<style scoped>
</style>