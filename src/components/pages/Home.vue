<template>
  <section>
    <icon-widget :mainly-icons="mainlyIcons" :bottom-icons="bottomIcons"></icon-widget>
    <mt-swipe :auto="3000" :show-indicators="false" class="border-bottom">
      <mt-swipe-item v-for="item in ads"
        :key="item.id"
        class="swipe-ad"
        >
        <router-link to="item.url">
          <img :src="item.img"/>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
    <hot-article :articles="articles"></hot-article>
  </section>
</template>

<script>
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
  created () {
    this.$emit('data', {
      school: this.school,
      links: this.links
    })
  },
  data () {
    return {
      school: '广大',
      mainlyIcons: [
        {name: '成绩1', link: 'ucenter'},
        {name: '成绩2'},
        {name: '成绩3'},
        {name: '成绩4'},
        {name: '成绩5'},
        {name: '成绩6'},
        {name: '成绩7'},
        {name: '成绩8'}
      ],
      bottomIcons: [
        {id: 1, name: '公选排行榜'},
        {id: 2, name: '校园攻略'}
      ],
      ads: [
        {
          'id': 2,
          'filename': 'http://m.nayou.finded.net/uploads/ads/5076857456ccccd9f2167774245a98f31f4b2e4c.jpg',
          'url': 'http://mp.weixin.qq.com/s?__biz=MzI3NTA4MDQzMw==&mid=2649722125&idx=1&sn=20fee8d2821faac6b752435d939738b4#rd',
          'path': '',
          'hot': 2435,
          'sort': 0,
          'school': 7,
          'img': 'http://m.nayou.finded.net/uploads/ads/5076857456ccccd9f2167774245a98f31f4b2e4c.jpg'
        },
        {
          'id': 3,
          'filename': 'http://m.nayou.finded.net/uploads/ads/529de50d95a28442dd5718532ba432835c144588.jpg',
          'url': 'http://mp.weixin.qq.com/s?__biz=MzI3NTA4MDQzMw==&mid=2649722125&idx=1&sn=20fee8d2821faac6b752435d939738b4#rd',
          'path': '',
          'hot': 2435,
          'sort': 0,
          'school': 7,
          'img': 'http://m.nayou.finded.net/uploads/ads/529de50d95a28442dd5718532ba432835c144588.jpg'
        }
      ],
      articles: [
        {
          'id': 14,
          'title': '我曾以为这辈子最重要的已错过',
          'abstract': '“为什么让我大四才遇到你”',
          'cover': 'http://m.nayou.finded.net/uploads/articles/733d6e048ea2125ea3f79f7b9e3ee8a9b0486634.png',
          'url': 'http://mp.weixin.qq.com/s?__biz=MzA5NTg5NzExMg==&mid=2650012782&idx=1&sn=9e2882dfc268b43ba4ce93d6c701a099&scene=1&srcid=0622cIzpPbHR2n5U3pLlD2UY&from=singlemessage&isappinstalled=0',
          'date': '2016-06-17'
        },
        {
          'id': 1555,
          'title': '我曾以为这辈子最重要的已错过',
          'abstract': '“为什么让我大四才遇到你”',
          'cover': 'http://m.nayou.finded.net/uploads/articles/733d6e048ea2125ea3f79f7b9e3ee8a9b0486634.png',
          'url': 'http://mp.weixin.qq.com/s?__biz=MzA5NTg5NzExMg==&mid=2650012782&idx=1&sn=9e2882dfc268b43ba4ce93d6c701a099&scene=1&srcid=0622cIzpPbHR2n5U3pLlD2UY&from=singlemessage&isappinstalled=0',
          'date': '2016-06-17'
        }
      ],
      links: [
        {
          'name': '哪有',
          'link': 'http://mp.weixin.qq.com/s?__biz=MzA5NTg5NzExMg==&mid=2650012782&idx=1&sn=9e2882dfc268b43ba4ce93d6c701a099&scene=1&srcid=0622cIzpPbHR2n5U3pLlD2UY&from=singlemessage&isappinstalled=0'
        },
        {
          'name': '有独',
          'link': 'http://mp.weixin.qq.com/s?__biz=MzA5NTg5NzExMg==&mid=2650012782&idx=1&sn=9e2882dfc268b43ba4ce93d6c701a099&scene=1&srcid=0622cIzpPbHR2n5U3pLlD2UY&from=singlemessage&isappinstalled=0'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .mint-swipe, .mint-swipe a {
    display: block;
    width: 100%;
    height: 120px;
    .swipe-ad {
      position: relative;
      img {
        width: 100%;
        height: 120px;
      }
    }
  }
</style>
