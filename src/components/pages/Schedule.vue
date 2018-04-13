<template>
  <section class="schedule">
    <nav class="border-bottom text-center">
      <div class="clazz">{{clazz}}</div>
      <div class="weekno">第{{weekno}}周</div>
      <spinner v-if="loading" class="loading" type="fading-circle"></spinner>
      <template v-else>
        <!-- <mt-button @click="onRefresh" type="primary" size="small" class="refresh major" >专业</mt-button> -->
        <!-- <mt-button @click="onRefresh" type="primary" size="small" class="refresh person">个人</mt-button> -->
        <mt-button @click="onRefresh" type="primary" size="small" class="refresh">刷新</mt-button>
      </template>
    </nav>
    <section class="content" v-html="html"></section>
    <section class="tips text-center">* 课表查不到的, 多刷几次试试~</section>
  </section>
</template>

<script>
import { Spinner, Button } from 'mint-ui'

export default {
  components: {
    Button,
    Spinner
  },
  data () {
    return {
      loading: false,
      clazz: '环设132',
      weekno: 5,
      html: `
<table class="schedule-table"><tr><td colspan="2" rowspan="1">时间</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td></tr><tr><td colspan="2">早晨</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="4">上午</td><td>第1节</td><td rowspan="2">土木工程材料<br>1-12(1,2)<br>何娟<br>理科南105#<br></td><td rowspan="2">工程地质学<br>3-7(1,2)<br>郑先昌<br>理科南315#<br></td><td rowspan="2">工程地质学<br>3-7(1,2)<br>郑先昌<br>理科南103#<br></td><td rowspan="2">结构力学1<br>1-14(1,2)<br>李锦林<br>理科北508#<br></td><td rowspan="2">大学英语拓展（占时用）<br>1-10,12-16(1,2)<br>徐歆玉<br>文新201#<br><font color='red'>(调0391)</font><br></td><tr><td>第2节</td></tr><tr><td>第3节</td><td rowspan="2">水力学<br>1-10(3,4)<br>蔡长青<br>理科南105#<br></td><td rowspan="2">结构力学1<br>1-14(3,4)<br>李锦林<br>理科北508#<br></td><td>&nbsp;</td><td>&nbsp;</td><td rowspan="2">结构力学1<br>1-8(3,4)<br>李锦林<br>理科北503#<br></td></tr><tr><td>第4节</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="4">下午</td><td>第5节</td><td>&nbsp;</td><td rowspan="2">形势与政策<br>7(5,6)<br>王雄<br>文新411#<br></td><td rowspan="2">水力学<br>7-8(5,6)<br>伍小军<br>工程南318工<br><br><br>工程地质学<br>6(5,6)<br>郑先昌<br>工程北407固<br></td><td rowspan="2">房屋建筑学<br>1-11(5,6)<br>裴刚<br>理科南412#<br></td><td>&nbsp;</td></tr><tr><td>第6节</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>第7节</td><td>&nbsp;</td><td>&nbsp;</td><td rowspan="2">工程地质学<br>6(7,8)<br>郑先昌<br>工程北407固<br></td><td rowspan="1">大学英语拓展（占时用）<br>13(7,8)<br>徐歆玉<br>文新223#<br><br><br>房屋建筑学<br>1-10(7)<br>裴刚<br>理科南412#<br></td><td>&nbsp;</td></tr><tr><td>第8节</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td rowspan="3">晚上</td><td>第9节</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>第10节</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>第11节</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>
`
    }
  },
  methods: {
    onRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000000000)
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
    height: 40px;
    line-height: 40px;
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
      top: 6px;
      padding: 0 8px;
      height: 28px;
      line-height: 28px;
      right: 10px;
      // &.major {
      //   right: 55px;
      //   border-top-right-radius: 0;
      //   border-bottom-right-radius: 0;
      // }
      // &.person {
      //   right: 10px;
      //   border-top-left-radius: 0;
      //   border-bottom-left-radius: 0;
      // }
    }
    .loading {
      position: absolute;
      z-index: 1;
      right: 10px;
      top: 6px;
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
