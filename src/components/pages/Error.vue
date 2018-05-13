<template>
  <section class="error">
    <div class="message">{{$route.params.message}}</div>
    <mt-button
      type="primary"
      size="large"
      @click="home()"
    >返回首页</mt-button>
  </section>
</template>

<script>
import { Button } from 'mint-ui'
import { clickAnalytics } from '@/utils'

export default {
  components: {
    Button
  },
  methods: {
    home () {
      clickAnalytics(this, '错误页面', '返回首页', {
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';
  .error {
    padding: 0 15px;
    text-align: center;
    .message {
      color: $importantTextColor;
      padding: 100px 0;
    }
  }
</style>
