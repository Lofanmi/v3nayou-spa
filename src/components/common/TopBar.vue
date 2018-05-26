<template>
  <mt-header title="">
    <img slot="left" @click="onClick" class="logo" src="@/assets/images/logo.png">
    <div slot="right" class="school">
      <img class="position" src="@/assets/images/icon_position.png">
      <span>{{school}}</span>
    </div>
  </mt-header>
</template>

<script>
import { Header } from 'mint-ui'
import { clickAnalytics } from '@/utils'

export default {
  props: {
    school: String
  },
  components: {
    Header
  },
  methods: {
    onClick () {
      clickAnalytics(this, 'LOGO', '哪有', {name: 'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    .logo {
      height: 24px;
      width: 42px;
      vertical-align: middle;
    }
    .school {
      font-size: 13px;
      line-height: 40px;
      .position {
        width: 16px;
        height: 18px;
        vertical-align: middle;
      }
    }
  }
</style>
