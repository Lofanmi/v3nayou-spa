<template>
  <section class="icon-widget">
    <!--main-icons-->
    <section class="icons main-icons border-bottom">
      <div v-for="item in mainlyIcons"
        :key="item.name"
        @click="onClick(item)"
        class="icon"
        >
        <img src="../../assets/images/icons/score.png">
        <div class="name">成绩</div>
      </div>
    </section>
    <!--bottom-icons-->
    <section class="icons bottom-icons border-bottom">
      <template v-for="item in bottomIcons"
        class="icon"
        >
        <div
          :key="item.name"
          @click="onClick(item)"
          class="icon"
          >
          <img src="../../assets/images/icons/score.png">
        </div>
        <div
          :key="item.id"
          @click="onClick(item)"
          class="icon"
          >
          <div class="name">公选排行榜</div>
        </div>
      </template>
    </section>
  </section>
</template>

<script>
import {clickAnalytics} from '@/utils'

export default {
  props: {
    mainlyIcons: Array,
    bottomIcons: Array
  },
  methods: {
    onClick (item) {
      clickAnalytics(this, '图标', item.name, item.link)
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-widget {
    background-color: #fff;
    .icons {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 10px 0;
      font-size: 13px;
      line-height: 0;
      .icon {
        width: 25%;
        text-align: center;
        color: #333;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
    .main-icons {
      padding-bottom: 0;
      .name {
        line-height: 24px;
        height: 34px;
      }
    }
    .bottom-icons {
      .name {
        line-height: 48px;
        text-align: left;
      }
      .icon:nth-child(2) {
        border-right: 1px solid #eee;
      }
    }
  }
</style>
