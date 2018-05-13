<template>
  <section class="schedule">
    <nav class="text-center">
      <div class="clazz">{{clazz}}</div>
      <!-- <div class="weekno">第{{weekno}}周</div> -->
      <spinner v-if="loading" class="loading" type="fading-circle"></spinner>
      <template v-else>
        <mt-button @click="onRefresh('major')"  type="primary" size="small" class="refresh major" >主修</mt-button>
        <mt-button @click="onRefresh('second')" type="primary" size="small" class="refresh second">辅修</mt-button>
      </template>
    </nav>
    <section class="content" v-html="html"></section>
    <section class="tips text-center">* 课表查不到的, 多刷几次试试~</section>
  </section>
</template>

<script>
import axios from 'axios'
import { Spinner, Button, Toast } from 'mint-ui'
import { getLocalObject, setLocalObject } from '@/utils'

export default {
  components: {
    Button,
    Spinner
  },
  data () {
    return {
      loading: false,
      clazz: '(班级)',
      // weekno: 5,
      html: ''
    }
  },
  async created () {
    const data = await this.getFromLocalStorage()
    if (!data) {
      await this.onRefresh('major')
      return
    }
    this.clazz = data.clazz
    this.html = data.data
  },
  methods: {
    async getFromLocalStorage () {
      return getLocalObject('schedule')
    },
    async onRefresh (type) {
      this.loading = true
      try {
        const r = await axios(`/schedule/${type}`)
        if (r.data.code !== 200) {
          return Toast(r.data.message)
        }
        const data = r.data.data
        setLocalObject('schedule', data)
        this.clazz = data.clazz
        this.html = data.data
        Toast(r.data.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';

  nav {
    background-color: #fff;
    color: $primaryTextColor;
    font-size: 15px;
    height: 54px;
    line-height: 54px;
    position: relative;
    .clazz {
      position: absolute;
      z-index: 1;
      left: 10px;
      top: 0;
    }
    .refresh {
      position: absolute;
      z-index: 1;
      top: 10px;
      height: 32px;
      line-height: 32px;
      &.major {
        right: 62px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &.second {
        right: 8px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    .loading {
      position: absolute;
      z-index: 1;
      right: 10px;
      top: 12px;
    }
  }
  .content {
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    &::-webkit-scrollbar-track-piece {
      background-color: rgba(0, 0, 0, 0);
      border-left: 1px solid rgba(0, 0, 0, 0);
    }
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      background-clip: padding-box;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      min-height: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.2);
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
  }
  .tips {
    background-color: rgba(255, 255, 255, 0.6);
    color: $descTextColor;
    font-size: 12px;
    height: 40px;
    line-height: 40px;
  }
</style>

<style lang="scss">
  @import '../../assets/scss/color.scss';

  .schedule-table {
    border-collapse: collapse;
    background-color: #ebf3f0;
    border: 1px solid $primaryBorderColor;
    color: $importantTextColor;
    text-align: center;
    width: 100%;
    tr {
      th, td {
        border-left: 1px solid $primaryBorderColor;
        border-bottom: 1px solid $primaryBorderColor;
        font-size: 12px;
        background-color: transparent;
      }
      th:first {
        border-left: 0;
      }
      td:nth-child(odd) {
        background-color: #d8efe0;
      }
    }
  }
</style>
