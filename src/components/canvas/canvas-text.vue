<template>
  <transition>
    <div v-if="now >= start && now <= end"
         class="canvas-container">
      <div ref="textContainer"
           class="text-container"
           :class="{isHor: isHor}"
           :style="{...elementStyle, ...textStyle}">
        <span class="text-box"
              ref="textBox"
              :style="{transition: trans}"
              v-html="transText"></span>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import { canvasMixins } from "@/mixins/canvas-element";
import { textMixins } from "@/mixins/text-element";

@Component({
  mixins: [canvasMixins, textMixins]
})
export default class textCanvas extends Vue {
  data!: any;
  start!: number;
  isHor: boolean = true; //是否水平移动
  trans:string = ''

  get transText() {
    let text = this.data.text;
    // return JSON.parse(
    //   JSON.stringify(text)
    //     .replace(/\\n/g, "<br/>")
    //     .replace(/ /g, "&nbsp;")
    // );
    if(this.data.rolling == 2) text = Array.from(this.data.text).reverse().join('')
    
    let pText = text.replace(/<br\/>/g, "</p><p>");
    return `<p>${pText}</p>`;
  }

  @Watch("now")
  startPlay(val: number, old: number) {
    const THAT = this;
    if (val == this.start || (this.start == 0 && val == 1)) {
      console.log("ok");
      const type = this.data.rolling;
      let residencetime = this.data.residencetime;

      if (type == 3 || type == 4) residencetime *= 1000;
      else residencetime *= 10;

      const interval = setInterval(
        () => THAT.playText(interval),
        residencetime
      );
    }
  }

  playText(interval: any) {
    const box = this.$refs.textBox as HTMLElement,
      container = this.$refs.textContainer as HTMLElement,
      leftVal: number = parseFloat(box.style.left as string) || 0,
      topVal: number = parseFloat(box.style.top as string) || 0,
      pHeight = window.getComputedStyle(box.children[0]).height,
      containerH = container.offsetHeight;

      

    if (!box) {
      clearInterval(interval);
      return;
    }

    switch (this.data.rolling) {
      case 0:
        return;
      case 1:
        box.style.left = `${leftVal + this.data.playbackspeed}px`;
        if (Math.abs(leftVal) > container.offsetWidth) {
          box.style.left = -box.offsetWidth + "px";
        }
        break;
      case 2:
        box.style.left = `${leftVal - this.data.playbackspeed}px`;
        if (Math.abs(leftVal) > box.offsetWidth) {
          box.style.left = container.offsetWidth + "px";
        }
        break;
      case 3:
        this.isHor = false;
        box.style.top = `${topVal - containerH}px`;
        if (Math.abs(topVal) > containerH) box.style.top = 0 + "px";
        // box.style.top = -box.offsetHeight + "px";
        break;
      case 4:
        this.isHor = false;
        box.style.top = `${topVal + containerH}px`;
        if (topVal >= 0)
          box.style.top = -box.offsetHeight + containerH + "px";
        // if (-topVal > box.offsetHeight)
        //   box.style.top = containerH + "px";
        break;
      case 5:
        console.log(topVal)
        box.style.top = `${topVal - this.data.playbackspeed}px`;
        if (-topVal > box.offsetHeight) {
          box.style.top = containerH + "px";
        }
        break;
    }

    const maxWidth = container.offsetWidth + box.offsetWidth;
    const maxHeight = container.offsetHeight + box.offsetHeight;
  }

  checkHor() {
    //判断是否为水平移动
    const box = this.$refs.textBox as HTMLElement,
      container = this.$refs.textContainer as HTMLElement,
      containerH = container.offsetHeight;

    this.isHor = false;

    if (this.data.rolling == 3 || this.data.rolling == 4) {
      for (let i = 0; i < box.children.length; i++) {
        const item = box.children[i] as HTMLElement;
        item.style.lineHeight = containerH + "px";
      }
      this.trans = `top ${this.data.playbackspeed}s`
    }
    if (this.data.rolling == 4) {
      box.style.top = -box.offsetHeight + containerH + "px";
    }

  }


  mounted() {
    this.data.playbackspeed = 0.1 * this.data.playbackspeed
    this.checkHor();
  }
}
</script>

<style scoped>
.text-container {
  position: relative;
  overflow: hidden;
}
.isHor {
  display: flex;
  align-items: center;
}
.trans {
  transition: top 1s;
}
.text-box {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
}
.text-box >>> p {
  margin: 0;
}
</style>