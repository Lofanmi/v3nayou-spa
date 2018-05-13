<template>
  <section class="teacher">
    <div class="title">一键教学评价 使用须知</div>
    <div class="content">
      <p>1. 你要认真阅读下面的话！！不看没朋友。</p>
      <p>2. 一键评教，就是按一下按钮，就会让每一个老师都会有5星高分好评。不需逐个评价填分数。</p>
      <p>3. 所有老师的评语在感人肺腑的模板库中抽取、分数在96-99之间，随机处理。</p>
      <p>4. 教务系统比较卡，如遇网络错误请屡次点击。大家不要摔手机，主页君坚决不赔。</p>
      <p>5. 老师每天来大学城不易，良心啊。</p>
      <p>6. 这功能是我开发闹着玩的，你有权利不用。当你点击下一步的时候，就当作是你自己的行为噢，对自己负责噢。要讲义气啊，义气啊！</p>
      <p>7. 本系统采用模拟登录机制登入广大教务系统，然后通过一个可爱的小程序达到一键评价老师的目的，有安全疑问的同学可以勾搭主页君。</p>
    </div>
    <div class="btn-group">
      <mt-button type="danger"  size="large" class="item">算了</mt-button>
      <mt-button type="primary" size="large" class="item">好, 没问题!!!</mt-button>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
import { Button } from 'mint-ui'

export default {
  components: {
    Button
  },
  async created () {
    // const r = await axios('/start')
    // const d = r.data.data
    // this.ads = d.ads
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';
  .teacher {
    .title {
      color: $primaryTextColor;
      font-size: 16px;
      border-bottom: 1px solid $primaryBorderColor;
      text-align: center;
      padding: 10px 0;
    }
    .content {
      background-color: #fff;
      color: $importantTextColor;
      padding: 10px;
      line-height: 30px;
      font-size: 14px;
      border-bottom: 1px solid $primaryBorderColor;
      p {
        margin-bottom: 5px;
      }
    }
    .btn-group {
      margin: 20px 10px 0;
      .item {
        margin-bottom: 10px;
      }
    }
  }
</style>
