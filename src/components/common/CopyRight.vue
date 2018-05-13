<template>
  <section class="copyright">
    <div class="links">
      <template v-for="(item, index) in links">
        <div :key="item.name" @click="onClick(item)" class="link">{{ item.name }}</div><template v-if="index !== links.length-1">⋅</template>
      </template>
    </div>
    <span>© 「哪有」校园服务平台 CTSTUDIO ALL RIGHTS RESERVED.</span>
    <div class="blank"></div>
  </section>
</template>

<script>
import { clickAnalytics } from '@/utils'

export default {
  props: {
    links: Array
  },
  methods: {
    onClick (item) {
      clickAnalytics(this, '友情链接', item.name, item.link)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';
  .copyright {
    color: $unnecessaryTextColor;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    .links {
      padding: 20px 10px 0;
      .link {
        color: $unnecessaryTextColor;
        padding: 2px 5px;
        display: inline-block;
        text-decoration: underline;
      }
    }
    span {
      display: block;
      padding: 10px 10px 20px;
      font-size: 10px;
    }
  }
  .blank {
    height: 55px;
  }
</style>
