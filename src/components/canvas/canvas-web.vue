<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end">
    <iframe :src="data.url"
            :width="data.width"
            :height="data.height"
            :style="{...elementStyle, ...{opacity: data.transparency}}"
            :scrolling="data.overflow == 0 ? 'yes' : 'no'"
            frameborder="0"></iframe>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class webCanvas extends Vue {}
</script>

<style scoped>
.canvas-container iframe {
  position: relative;
}
</style>