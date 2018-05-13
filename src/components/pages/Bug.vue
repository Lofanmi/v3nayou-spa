<template>
  <section class="dev">
    <div class="title">🐞 错误反馈</div>
    <div class="content">
      <p><span class="u">常见问题:</span></p>
      <p>1. 晚上12点后, 教务系统维护, 成绩和课表是刷不出来的, 早睡早起, 明天早上再刷哈~</p>
      <p>2. 哪有图书有时候会因为访问不到学校图书馆而查不了图书, 可以等一阵子再搜~</p>
      <p>3. 等我想到了再告诉你~</p><br>
      <p><span class="u">如何反馈:</span></p>
      <p>如果发现哪有不能正常使用, 可以直接截图<span class="u">微博私信</span>我, 也可以在<span class="u">后台留言</span>反馈.</p>
      <p>错误反馈需要包括以下内容:</p>
      <p>1. <span class="u">下方二维码</span></p>
      <p>2. <span class="u">错误文字描述</span>(最好附带错误截图)</p>
      <img class="qrcode" :src="qrcode"><br>
      <p><span class="u">新浪微博:</span></p>
      <img class="qrcode" src="/static/qrcode.jpg"><br>
    </div>
  </section>
</template>

<script>
import { Button } from 'mint-ui'
import Cookies from 'js-cookie'
import qrcode from 'qrcode-js/lib/qrcode'

export default {
  components: {
    Button
  },
  created () {
    const o = Cookies.get('o')

    const typeNumber = 5
    const errorCorrectLevel = 'L'
    const margin = 10

    const qr = qrcode(typeNumber, errorCorrectLevel)
    qr.addData(o)
    qr.make()

    const base64 = qr.createImgBase64(typeNumber, margin)
    const dataURL = 'data:image/gif;base64,' + base64

    this.qrcode = dataURL
  },
  data () {
    return {
      qrcode: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';
  span.u {
    text-decoration: underline;
  }
  .dev {
    .title {
      color: $primaryTextColor;
      font-size: 16px;
      border-bottom: 1px solid $primaryBorderColor;
      padding: 10px;
    }
    .content {
      background-color: #fff;
      color: $importantTextColor;
      padding: 10px;
      line-height: 24px;
      font-size: 14px;
      border-bottom: 1px solid $primaryBorderColor;
      p {
        margin-bottom: 5px;
      }
      .qrcode {
        display: block;
        width: 205px;
        height: 205px;
        margin: 10px auto;
      }
    }
  }
</style>
