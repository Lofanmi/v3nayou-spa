<template>
  <section class="score">
    <div class="selector border-bottom clearfix">
      <!--学年-->
      <div @click="onSelectingXn()" class="text xn-text">{{xntext}}</div>
      <ul class="xn" v-show="selectingXn">
        <li v-for="(value, index) in data.xns" :key="value" @click="onSelectXn(index)">{{xntexts[index]}}</li>
      </ul>
      <!--学期-->
      <template v-if="xntext != '全部'">
      <div @click="onSelectingXq()" class="text xq-text">{{xqtext}}</div>
      </template>
      <ul class="xq" v-show="selectingXq">
        <li v-for="(value, index) in data.xqs" :key="value" @click="onSelectXq(index)">{{xqtexts[index]}}</li>
      </ul>
      <!--加载中动画-->
      <spinner v-if="loading" class="loading" type="fading-circle"></spinner>
      <!--按钮组-->
      <template v-else>
        <mt-button @click="onQuery()" type="primary" size="small" class="query major" >主修</mt-button>
        <mt-button @click="onQuery()" type="primary" size="small" class="query second">辅修</mt-button>
      </template>
    </div>
    <div class="main">
      <div class="gpa">
        <div class="text" @click="onGPADetail()">{{GPA}}</div>
        <div class="btext">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;本学期GPA&nbsp;<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div class="banner">{{GPABanner}}</div>
      </div>
      <div class="detail">
        <table>
          <thead><tr><th>课程名称</th><th></th><th>分数</th></tr></thead>
          <tbody>
            <tr v-for="item in data.list" :key="item.name" @click="onShowDetail(item)">
              <td>{{item.name}}</td>
              <td><span v-if="item.score < 60" class="gui"></span></td>
              <td>{{item.score}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="padding"></div>
    </div>
    <div v-if="detailItem" @click="onCloseDetailWidget()" class="shade">
      <div class="score-widget">
        <div class="row"
          v-for="value in detailItem"
          v-if="maps[$key]"
          :key="value">
          <div class="col-4">{{maps[$key]}}</div>
          <div class="col-4">{{value}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Spinner, Button } from 'mint-ui'
import {calcGPA, GPAtext} from '@/utils'

export default {
  components: {
    Spinner,
    Button
  },
  data () {
    return {
      loading: false,
      maps: {'xn': '学年', 'xq': '学期', 'name': '课程名称', 'cate': '课程性质', 'credit': '学分', 'score': '成绩', 'gpa': '绩点', 'restudy': '补考成绩', 'retake': '重修成绩', 'regular': '平时分数', 'regular_pct': '平时分数百分比', 'midterm': '期中分数', 'midterm_pct': '期中分数百分比', 'final': '期末分数', 'final_pct': '期末分数百分比', 'total': '最终成绩', 'examway': '考核方式', 'property': '课程属性', 'category': '通选课分类'},
      xntexts: ['大一', '大二', '大三', '大四', '大五', '全部'],
      xqtexts: ['上学期', '下学期', '整学年'],
      form: {
        xn: '2015-2016',
        xq: '2'
      },
      data: {
        type: '',
        xn: '2015-2016',
        xq: '2',
        xns: ['2015-2016', '2016-2017', '2017-2018', '2018-2019', '2020-2021', 'all'],
        xqs: ['1', '2', 'all'],
        list: []
      },
      selectingXn: false,
      selectingXq: false,
      detailItem: null,
      xntext: '大一',
      xqtext: '下学期'
    }
  },
  computed: {
    GPA () {
      return calcGPA(this.data.list, this.data.type)
    },
    GPABanner () {
      return GPAtext(this.GPA)
    }
  },
  methods: {
    onSelectingXn: function () {
      this.selectingXn = true
    },
    onSelectingXq: function () {
      this.selectingXq = true
    },
    onSelectXn: function (i) {
      this.selectingXn = false
      this.xntext = this.xntexts[i]
      this.form.xn = this.data.xns[i]
    },
    onSelectXq: function (i) {
      this.selectingXq = false
      this.xqtext = this.xqtexts[i]
      this.form.xq = this.data.xqs[i]
    },
    onShowDetail: function (item) {
      this.detailItem = item
    },
    onCloseDetailWidget: function () {
      this.detailItem = null
    },
    onGPADetail: function () {
      // this.detailGPA = true
    },
    onQuery: function () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';

  .selector {
    background-color: #fff;
    color: $importantTextColor;
    position: relative;
    height: 54px;
    width: 100%;
    .text {
      float: left;
      width: 72px;
      padding-right: 12px;
      font-size: 16px;
      line-height: 54px;
      text-align: center;
      background-image: url(../../assets/images/arrow.png);
      background-repeat: no-repeat;
      background-position: 60px center;
      background-size: auto;
    }
    ul {
      position: absolute;
      background-color: #fff;
      float: left;
      top: 1px;
      z-index: 20;
      list-style: none;
      li {
        border-left: 1px solid $primaryBorderColor;
        border-right: 1px solid $primaryBorderColor;
        border-bottom: 1px solid $primaryBorderColor;
        font-size: 16px;
        height: 52px;
        line-height: 52px;
        text-align: center;
      }
      &.xn {
        text-indent: -10px;
        left: 0;
        width: 70px;
      }
      &.xq {
        text-indent: -7px;
        left: 69px;
        width: 73px;
      }
    }
    .query {
      position: absolute;
      z-index: 1;
      top: 7px;
      height: 36px;
      line-height: 36px;
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
      top: 10px;
    }
  }
  .main {
    background-image: url(../../assets/images/gradebg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 400px;
    width: 100%;
    padding-top: 80px;
    position: relative;
    z-index: 10;
    margin-top: -4px;
    .tips {
      font-size: 14px;
      width: 100%;
      margin-top: 50px;
      text-align: center;
      color: #666;
      padding-bottom: 200px;
    }
    .gpa {
      width: 180px;
      height: 180px;
      border: 1px solid #e5e8e8;
      margin: 0 auto 24px auto;
      border-radius: 180px;
      background-color: #fff;
      box-shadow: 0 0 8px 1px #e5e8e8;
      text-align: center;
      position: relative;
      .text {
        font-size: 60px;
        color: $primaryColor;
        margin-top: 28px;
        font-weight: bold;
        line-height: 68px;
      }
      .btext {
        color: $descTextColor;
        font-size: 14px;
        line-height: 16px;
        span {
          text-decoration: line-through;
        }
      }
      .banner {
        background-image: url(../../assets/images/gradetextbg.png);
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 250px 46px;
        width: 250px;
        height: 40px;
        line-height: 36px;
        color: $importantTextColor;
        font-size: 18px;
        font-weight: bold;
        position: absolute;
        top: 120px;
        left: -35px;
      }
    }
    .detail {
      border: 1px solid #eaecec;
      background-color: #fff;
      text-align: left;
      margin: 0 auto;
      padding: 14px;
      width: 78%;
      table {
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
        width: 100%;
        thead {
          tr {
            th:nth-child(2), th:nth-child(2) {
              width: 40px;
            }
          }
        }
        tr:last-child td {
          border-bottom: 0;
        }
        th {
          border-bottom: 1px solid #bababa;
          line-height: 32px;
          padding: 8px 0;
          font-size: 15px;
          color: $primaryTextColor;
          font-weight: bold;
        }
        td {
          border-bottom: 1px solid #e3e9ea;
          line-height: 32px;
          padding: 8px 8px 8px 0;
          font-size: 14px;
          color: $descTextColor;
          max-height: 49px;
          * {
            vertical-align: middle;
          }
          span.gui {
            background-image: url(../../assets/images/gguile.png);
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 32px 20px;
            display: inline-block;
            height: 20px;
            width: 32px;
          }
          &:first-child {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          &:last-child {
            text-indent: 2px;
          }
        }
      }
    }
    .padding {
      height: 5px;
    }
  }
  .shade {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    font-size: 16px;
    z-index: 200;
    .score-widget {
      display: block;
      width: 400px;
      background-color: #fff;
      border-radius: 4px;
      overflow: auto;
      color: $primaryTextColor;
      padding: 20px;
      max-height: 40%;
      line-height: 40px;
      margin: 60px auto 0;
      .row:last-child {
        border-bottom: 0;
      }
    }
  }
</style>
