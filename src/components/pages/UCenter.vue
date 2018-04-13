<template>
  <section>
    <section class="head">
      <div class="face-wrap">
        <img class="face" src="@/assets/images/face.jpg"/>
        <img class="link" src="@/assets/images/face_btn.png"/>
        <span class="nickname">小仙女呀呀呀</span>
      </div>
    </section>
    <div class="desc white-space">手机号绑定</div>
    <section class="form">
      <mt-field label="手机号" placeholder="[接收成绩单研发中~]" type="tel" v-model="tel"></mt-field>
      <mt-field label="验证码" placeholder="4位纯数字" type="number" v-model="tcode">
        <div class="getcode">60s后重新获取</div>
      </mt-field>
    </section>
    <div class="desc white-space">邮箱绑定</div>
    <section class="form">
      <mt-field label="邮箱" placeholder="[接收成绩单研发中~]" type="email" v-model="email"></mt-field>
    </section>
    <div class="desc white-space">主修专业</div>
    <section class="form">
      <mt-field label="学号" placeholder="[尚未绑定]" v-model="sid"></mt-field>
      <mt-field label="密码" placeholder="[尚未绑定]" type="password" v-model="psw"></mt-field>
    </section>
    <div class="desc white-space">辅修专业</div>
    <section class="form">
      <mt-field label="学号" placeholder="[尚未绑定]" v-model="sid2"></mt-field>
      <mt-field label="密码" placeholder="[尚未绑定]" type="password" v-model="psw2"></mt-field>
    </section>
    <div class="btn-group white-space">
      <mt-button type="primary" size="large">提交</mt-button>
    </div>
  </section>
</template>

<script>
import { Field, Button } from 'mint-ui'

export default {
  components: {
    Field,
    Button
  },
  data () {
    return {
      tel: '',
      tcode: '',
      email: '',
      sid: '',
      psw: '',
      sid2: '',
      psw2: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/color.scss';
  .head {
    padding: 20px 0 40px;
    .face-wrap {
      position: relative;
      margin: 0 auto;
      width: 120px;
      height: 120px;
      text-align: center;
      .face {
        display: block;
        margin: 0 auto;
        width: 120px;
        height: 120px;
        border-radius: 120px;
        border: 5px solid #fff;
        box-shadow: 0 0 8px 2px rgba($color: #000000, $alpha: 0.1);
      }
      .link {
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 32px;
        bottom: 5px;
        right: 0;
        box-shadow: 0 0 8px 2px rgba($color: #000000, $alpha: 0.1);
      }
      .nickname {
        color: $primaryTextColor;
        line-height: 32px;
        font-size: 15px;
      }
    }
  }
  .desc {
    color: $descTextColor;
    font-size: 12px;
  }
  .btn-group {
    margin-top: 30px;
  }
  .form {
    .mint-cell.mint-field {
      margin-top: -1px;
    }
  }
  .getcode {
    color: $primaryColor;
    font-size: 15px;
    height: 48px;
    line-height: 48px;
    width: 120px;
    text-align: right;
    position: absolute;
    right: 0;
    top: -24px;
  }
</style>
