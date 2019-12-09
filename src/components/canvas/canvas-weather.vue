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
      .get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.data.city}`, {
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
    if (this.data.weather) {
      this.weatherText += `<span>${forecast.type}</span>`;
    }  

    if (this.data.temperature) {
      this.weatherText += `
      <span>${forecast.high}</span>
      <span>${forecast.low}</span>`;
    } 

    if (this.data.windPower) {
      this.weatherText += `<span>${forecast.fengxiang}${forecast.fengli.slice(9, -3)}</span>`;
    }

    if(type != 0) {
      this.weatherText = `
        <span class="svg-box">
          <svg class="icon" aria-hidden="true" style="width:100%; height:100%">
            <use xlink:href="#icon-${this.getPinyin(forecast.type)}${type}"></use>
          </svg>
        </span>
        ${this.weatherText}
      `
    }
  }

  checkIcon(weather: string) {
    if(weather.includes('雨夹雪')) {
      return 'xiaoyu'
    }else if(weather.includes('暴雨')) {
      return 'dayu'
    }else if(weather.includes('雷阵雨')) {
      return 'lei'
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
.canvas-container >>> .svg-box svg {
  width: 1em !important;
  height: 1em !important;
}
</style>