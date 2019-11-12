<template>
  <div class="canvas-container"
       v-if="now >= start && now <= end">
    <div :style="{...elementStyle, ...textStyle}"
         v-html="weatherText"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";
import { textMixins } from "@/mixins/text-element";
import "@/assets/icon/iconfont"
import 'pinyin4js'

@Component({
  mixins: [canvasMixins, textMixins]
})
export default class wetherCanvas extends Vue {
  data!: any;
  $axios!: any;
  weatherText: string = "";
  mounted() {
    this.$axios
      .get(`http://wthrcdn.etouch.cn/weather_mini?city=${"武汉"}`, {
        headers: {
          "Content-Type": "application/json; application/octet-stream"
        },
      })
      .then((res: any) => {
        const weatherData = res.data;
        console.log(weatherData)
        this.setHtml(weatherData, this.data.styleId)
      });
  }
  setHtml(weatherData:any, type:number) {
    const forecast = weatherData.data.forecast[this.data.data];
    if(type == 0) {
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
    }else {
      let html = `
        <svg class="icon" aria-hidden="true" style="width:100%; height:100%">
          <use xlink:href="#icon-${this.getPinyin(forecast.type)}${type}"></use>
        </svg>
      `
      this.weatherText = html
    }
  }

  getPinyin(string: string) {
    return PinyinHelper.convertToPinyinString(string, '', PinyinFormat.WITHOUT_TONE)
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>