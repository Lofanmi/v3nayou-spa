<template>
  <section class="dev">
    <div class="title">🙌 参与开发</div>
    <div class="content">
      <p>🎉哇~ 终于等到你~ 😊很开心你点进来看! 🤞<span class="u">笔芯!</span></p><br>
      <p>🤩最最最开始, 我先跟你说一句: <span class="u">哪有教务的代码已经开源! 开源! 开源!</span> 🙌<span class="u">赶紧参与, 积累项目经验!</span></p><br>
      <p>😍是不是很兴奋? <span class="u">我是哪有的程序猴</span>🐵哈哈, 开发维护修bug都是我, Lofanmi (可以叫我L~). 学校广大.</p><br>
      <p>🎈哪有教务, 我最开始做的是课表, 之后做了成绩查询, 再后来我们开发了实时公交和四六级, 后续还改版了, 也加了很多功能......🎈代码不断增加, bug也越来越多......<span class="u">不好意思我又写bug了哈哈</span>😝</p><br>
      <p>😑一晃四年过去, 当时毕业前夕, 真的希望时间能够停止~ 🚀不想离开学校, <span class="u">对广大这片土地, 无比留恋.</span></p><br>
      <p>😑毕业后忙于工作, 很多反馈木有来得及处理, 实在抱歉哈. 🤣<span class="u">你们也真是热情, 经常把服务器挤爆哈哈......</span></p><br>
      <p>😎于是我做了一个决定: <span class="u">重新梳理哪有, 重写, 开源. 每个人都可以阅读, 修改, 添加功能等.</span> 🔨大家可以<span class="u">共同维护, 共同进步.</span></p><br>
      <p>🚎下班回家, 要么在纸上构思, 要么敲敲代码, 把自己的想法罗列出来, 实现出来.</p><br>
      <p>🥇我重新调整教务, 校园百科, 实时公交, 四六级, 图书的界面, 逻辑, 保证程序稳定性. 👓譬如首页顶部的绿底Header, 左侧是Logo, 右边是文字说明, 它们离屏幕左右边框间距, 固定为10像素. 往下的文章列表, 也是10像素严格对齐的! 🎨百科公交四六级我就不列举啦~</p><br>
      <p>📌哪有的页面好多, 有些我都不认识它们了. ⏰深夜一个人, 开着台灯, 💡对着电脑手机, 几百几千几万行代码, 看加改删. 📐1个像素1个像素慢慢调, 直到满意为止.</p><br>
      <p>🔍首页的图标, 我凭感觉用Photoshop调色, 觉得搭起来好看, 就定下来了. 🎨至于边框, 之前是2像素, 我调成1像素, 弱化了颜色, 我感觉也舒服了些......</p><br>
      <p>🤗总之, 每改完一个页面, 内心真的无比喜悦! 🎼毕竟, 强迫症者, 无药可医也. <span class="u">我也不知道哪里来的动力, 或许就是因为喜欢吧!</span></p><br>
      <p>😝至于实时公交, 四六级, 我做了几个改进, 希望这些工具能更稳定, 更便捷好用. 📋我也不展开了, 因为我真的很啰嗦哈哈!</p><br>
      <p>🎈最后, <span class="u">我希望大家踊跃参与.</span> 🙌代码前后端分离(Go+Vue.js), <span class="u">再也不用担心找实习没有项目经验了!!!😂</span></p><br>
      <p>🚄GitHub地址在这里, 你的star是对我的支持, 也在给予我动力! <span class="u">如果对你有帮助, 麻烦给我点个star呗~</span></p><br>
      <p>前端SPA: <span class="u">https://github.com/Lofanmi/v3nayou-spa</span></p><br>
      <p>Go后端接口: <span class="u">https://github.com/Lofanmi/v3nayou</span></p><br>
      <p>🌏如何参与请看项目README.md, 如有问题, 可以在项目<span class="u">提issue</span>, 也可以<span class="u">新浪微博私信我~</span></p><br>
      <img class="qrcode" src="/static/qrcode.jpg"><br>
    </div>
    <div class="btn-group">
      <mt-button type="primary" size="large" class="item" @click="frontend()">前端 GitHub 仓库</mt-button>
      <mt-button type="primary" size="large" class="item" @click="backend()" >后端 GitHub 仓库</mt-button>
    </div>
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
    backend () {
      clickAnalytics(this, '参与开发', '后端 GitHub 仓库', 'https://github.com/Lofanmi/v3nayou')
    },
    frontend () {
      clickAnalytics(this, '参与开发', '前端 GitHub 仓库', 'https://github.com/Lofanmi/v3nayou-spa')
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
    .btn-group {
      margin: 20px 10px 0;
      .item {
        margin-bottom: 10px;
      }
    }
  }
</style>
