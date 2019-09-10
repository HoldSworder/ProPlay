<template>
  <div class="canvas-container"
       v-if="now >= strat && now <= end">
    <div :style="{...elementStyle, ...textStyle}"
         v-html="weatherText"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins, textMixins } from "@/mixins/canvas-element";
import getCity from "@/common/city-code";

@Component({
  mixins: [canvasMixins, textMixins]
})
export default class Home extends Vue {
  data!: any;
  $axios!: any;
  mounted() {
    const cityCode = getCity("武汉");
    this.$axios.get(`http://t.weather.sojson.com/api/weather/city/${cityCode}`).then(res => {
      console.log(res)
    });
  }
}
</script>

<style lang='stylus' scoped></style>