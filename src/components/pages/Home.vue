<template>
  <section>
    <icon-widget :mainly-icons="mainlyIcons" :others-icons="othersIcons"></icon-widget>
    <mt-swipe :auto="3000" :show-indicators="false" class="border-top border-bottom">
      <mt-swipe-item v-for="item in ads"
        :key="item.id"
        class="swipe-ad"
        >
        <img :src="item.img" @click="onClick(item)"/>
      </mt-swipe-item>
    </mt-swipe>
    <hot-article :articles="articles"></hot-article>
  </section>
</template>

<script>
import axios from 'axios'
import { clickAnalytics } from '@/utils'
import { Swipe, SwipeItem } from 'mint-ui'
import IconWidget from '@/components/common/IconWidget'
import HotArticle from '@/components/common/HotArticle'

export default {
  components: {
    IconWidget,
    Swipe,
    SwipeItem,
    HotArticle
  },
  async created () {
    const r = await axios('/start')
    const d = r.data.data
    if (d.school === '[empty]') {
      this.$router.push({name: 'empty'})
    }
    this.$emit('data', {
      school: d.school,
      links: d.links
    })
    this.mainlyIcons = d.mainly_icons
    this.othersIcons = d.others_icons
    this.articles = d.articles
    this.ads = d.ads
  },
  data () {
    return {
      mainlyIcons: [],
      othersIcons: [],
      ads: [],
      articles: []
    }
  },
  methods: {
    onClick (item) {
      clickAnalytics(this, '广告', item.name, item.link)
    }
  }
}
</script>

<style lang="scss" scoped>
  .mint-swipe, .mint-swipe a {
    display: block;
    width: 100%;
    .swipe-ad {
      position: relative;
      line-height: 0;
      img {
        width: 100%;
      }
    }
  }
</style>
