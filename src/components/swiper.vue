<template>
  <div></div>
</template>

<script lang='ts'>
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component
export default class Swiper extends Vue {
  @Prop() data!: string[]
  @Prop() time!: number
  index: number = 0
  
  mounted() {
    console.log('start Swiper')
  }
} 
</script>

<style scoped>
</style>