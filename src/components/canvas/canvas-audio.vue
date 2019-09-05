<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end && now >= 1">
    <audio :src="require(`@/assets/${data.fileName}`)"
           autoplay></audio>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";

@Component({
  mixins: [canvasMixins]
})
export default class audioCanvas extends Vue {}
</script>

<style scoped>
</style>