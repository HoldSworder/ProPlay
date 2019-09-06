<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end && now >= 1">
    <div :style="{...elementStyle, ...textStyle}">
      {{clockText}}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { canvasMixins, textMixins } from "@/mixins/canvas-element";
import setClock from "@/common/clock-text";

@Component({
  mixins: [canvasMixins, textMixins]
})
export default class Home extends Vue {
  data!: any;
  clockText!: any;
  @Watch("now")
  showText() {
    let text: any = setClock(
      this.data.timeDiff,
      this.data.timeStyle,
      this.data.Format
    );
    this.clockText = text;
  }
}
</script>

<style scoped>
</style>