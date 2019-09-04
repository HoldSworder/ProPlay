<template>
  <div>
    <img :src="data.fileName"
         :style="{width: data.width, height: data.height, top: data.location_y, left: data.location_x, height: data.height, width: data.width}">
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import imgIFS from "@/api/interface/element/img";

@Component
export default class Home extends Vue {
  @Prop() data!: imgIFS;
}
</script>

<style scoped>
</style>