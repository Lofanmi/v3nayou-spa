<template>
  <section>
    <section class="head">
      <div class="face-wrap">
        <img class="face" :src="headimgurl"/>
        <img class="link" src="@/assets/images/face_btn.png"/>
        <span class="nickname">{{nickname}}</span>
      </div>
    </section>

    <div class="desc white-space">手机号绑定</div>
    <section class="form">
      <template v-if="telDisabledInput">
        <mt-field label="手机号" placeholder="[接收成绩单研发中~]" type="tel" v-model="tel" :disabled="true"></mt-field>
      </template>
      <template v-else>
        <mt-field label="手机号" placeholder="[接收成绩单研发中~]" type="tel" v-model="tel"></mt-field>
        <mt-field label="验证码" placeholder="4位纯数字" type="number" v-model="tcode" :disableClear="true">
          <div class="getcode" @click="getCode()">{{status}}</div>
        </mt-field>
      </template>
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
      <mt-button
        type="primary"
        size="large"
        :disabled="loading ? 'disabled' : false"
        @click="submit()"
      >
      {{buttonText}}
      </mt-button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { Field, Button, Toast } from 'mint-ui'
import { setLocalObject } from '@/utils'

export default {
  components: {
    Field,
    Button
  },
  async created () {
    const r = await axios('/ucenter')
    const d = r.data.data
    this.tel = d.tel
    this.email = d.email
    this.sid = d.sid
    this.psw = d.psw
    this.sid2 = d.sid2
    this.psw2 = d.psw2
    this.nickname = d.nickname
    this.headimgurl = d.headimgurl
    if (!this.tel) {
      this.telDisabledInput = false
    }
  },
  data () {
    return {
      loading: false,
      // 手机号
      tel: '',
      telDisabledInput: true,
      // 邮箱
      email: '',
      // 主修账号
      sid: '',
      psw: '',
      // 辅修账号
      sid2: '',
      psw2: '',
      // 昵称
      nickname: '',
      // 微信头像
      headimgurl: '',
      // 短信验证码
      tcode: '',
      // 倒计时
      timeout: 60,
      tick: 0
    }
  },
  computed: {
    status () {
      return this.tick > 0 ? `${this.tick}s后重新获取` : '获取短信验证码'
    },
    buttonText () {
      return this.loading ? '处理中, 请稍等...' : '提交'
    }
  },
  methods: {
    async getCode () {
      if (this.tick > 0) {
        return
      }
      if (!this.tel) {
        return Toast('请输入手机号')
      }
      // 清空验证码输入框
      this.tcode = ''
      // 验证码倒计时
      this.tick = this.timeout
      let handle = setInterval(() => {
        this.tick--
      }, 1000)
      setTimeout(() => {
        clearInterval(handle)
      }, this.timeout * 1000)
      // 请求后端接口发送验证码
      const r = await axios(`/sendsms/${this.tel}`)
      if (r.data.code === 422) {
        return Toast(r.data.message)
      }
      return Toast('发送成功')
    },
    async submit () {
      this.loading = true
      const data = qs.stringify({
        tel: this.tel,
        email: this.email,
        sid: this.sid,
        psw: this.psw,
        sid2: this.sid2,
        psw2: this.psw2,
        tcode: this.tcode
      })
      try {
        const r = await axios.post('/member', data)
        if (r.data.code === 422) {
          return Toast(r.data.message)
        }
        Toast(r.data.message)
        // 清空缓存
        setLocalObject('score', null)
        setLocalObject('schedule', null)
        // 2s后跳转到首页
        setTimeout(() => {
          this.$router.push({name: 'home'})
        }, 2000)
      } finally {
        this.loading = false
      }
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
      width: 100px;
      height: 100px;
      text-align: center;
      .face {
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 100px;
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
