<template>
  <section class="icon-widget">
    <!--main-icons-->
    <section class="icons main-icons">
      <div v-for="item in mainlyIcons"
        :key="item.name"
        :data-link="item.link"
        @click="onClick(item)"
        class="icon"
        >
        <img :src="item.icon">
        <div class="name">{{item.name}}</div>
      </div>
    </section>
    <!--others-icons-->
    <section class="icons others-icons border-top border-bottom">
      <template v-for="item in othersIcons"
        class="icon"
        >
        <div
          :key="item.name"
          :data-link="item.link"
          @click="onClick(item)"
          class="icon"
          >
          <img :src="item.icon">
        </div>
        <div
          :key="item.id"
          :data-link="item.link"
          @click="onClick(item)"
          class="icon"
          >
          <div class="name">{{item.name}}</div>
        </div>
      </template>
    </section>
  </section>
</template>

<script>
import { clickAnalytics } from '@/utils'

export default {
  props: {
    mainlyIcons: Array,
    othersIcons: Array
  },
  methods: {
    onClick (item) {
      clickAnalytics(this, '图标', item.name, item.link)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';
  .icon-widget {
    background-color: #fff;
    .icons {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      font-size: 13px;
      line-height: 0;
      .icon {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        width: 25%;
        text-align: center;
        color: #333;
        padding: 10px 0 5px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .main-icons {
      padding: 0;
      .name {
        line-height: 24px;
        height: 24px;
      }
    }
    .others-icons {
      .name {
        line-height: 36px;
        text-align: left;
      }
      .icon:nth-child(2) {
        border-right: 1px solid $primaryBorderColor;
      }
    }
  }
</style>
