<template>
  <section v-if="list.length>0" class="hot-articles border-bottom">
    <div class="icon-bar border-bottom">
      <img src="../../assets/images/icon_hot.png">热门文章
    </div>
    <div class="items">
      <div
        v-for="item in list"
        :key="item.id"
        @click="onClick(item)"
        class="hot-article border-bottom"
        >
        <img :src="item.cover" :alt="item.title">
        <div class="detail">
          <div class="title dotdotdot">{{item.title}}</div>
          <div class="abstract dotdotdot">{{item.abstract}}</div>
          <div class="date">{{item.date}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { clickAnalytics } from '@/utils'

export default {
  props: {
    articles: Array
  },
  computed: {
    list () {
      return this.articles.map(o => ({
        id: o.id,
        title: o.title,
        abstract: o.abstract,
        cover: `http://m.nayou.finded.net${o.cover}`,
        link: o.url,
        date: o.date
      }))
    }
  },
  methods: {
    onClick (item) {
      clickAnalytics(this, '文章', item.title, item.link)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';
  .hot-articles {
    background-color: #fff;
    .icon-bar {
      color: $descTextColor;
      font-size: 12px;
      line-height: 38px;
      img {
        display: inline-block;
        vertical-align: middle;
        line-height: 38px;
        margin-left: 10px;
        margin-right: 5px;
        width: 18px;
      }
    }
  }
  .hot-article {
    display: -moz-box;
    display: -webkit-box;
    display: box;
    padding: 10px;
    img {
      -moz-box-flex: 1;
      -webkit-box-flex: 1;
      width: 80px;
      height: 64px;
      vertical-align: middle;
    }
    .detail {
      -moz-box-flex: 2;
      -webkit-box-flex: 2;
      padding-left: 10px;
      width: 0;
      .title {
        color: $importantTextColor;
        font-weight: 400;
        line-height: 20px;
        font-size: 14px;
        margin-top: -4px;
      }
      .abstract, .date {
        color: $descTextColor;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
</style>
