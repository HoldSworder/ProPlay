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
// import getCity from "@/common/city-code";

@Component({
  mixins: [canvasMixins, textMixins]
})
export default class Home extends Vue {
  data!: any;
  $axios!: any;
  weatherText!: string;
  mounted() {
    // const cityCode = getCity("武汉");
    this.$axios
      .get(`http://wthrcdn.etouch.cn/weather_mini?city=${"武汉"}`)
      .then((res: any) => {
        const weatherData = res.data;
        const forecast = weatherData.forecast[this.data.data];
        this.weatherText = `
          <p>${weatherData.city}</p>
          <p>${forecast.date}</p>
        `;

        if (this.data.weather) {
          this.weatherText += `<p>${forecast.type}</p>`;
        } else if (this.data.temperature) {
          this.weatherText += `
          <p>${forecast.high}</p>
          <p>${forecast.low}</p>`;
        } else if (this.data.windPower) {
          this.weatherText += `<p>${forecast.fengli.slice(9, -3)}</p>`;
        }
      });
  }
}
</script>

<style lang='stylus' scoped></style>