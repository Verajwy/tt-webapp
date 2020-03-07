<template>
    <div class="login">
        <div class="login-text">手机号</div>
        <div class="input-wrap">
            <van-field
                v-model="valuePhone"
                placeholder="请输入手机号码"
                type="number"
                maxlength="11"
                @input="validPhone"
            />
        </div>
        <div class="login-text">验证码</div>
        <div class="input-wrap">
            <van-field
                v-model="valueSms"
                placeholder="请输入验证码"
                type="number"
                maxlength="6"
            />
            <p
                v-if="!getSms"
                class="sms get-sms"
                @click="getCaptcha"
            >获取验证码</p>
            <p
                v-if="getSms"
                class="sms get-sms-done"
                @click="getCaptcha"
            >重新获取({{s}}s)</p>
        </div>
        <div
            @click="login"
            class="tt-btn login-btn"
        >登录</div>
    </div>
</template>

<script>
import { Field } from 'vant'
import { loginByCaptcha, sendCaptcha } from '../../api/api'
import { setTimeout, clearInterval, setInterval } from 'timers';
import router from '../../router';
export default {
    components: {
        [Field.name]: Field
    },
    data() {
        return {
            valuePhone: '',
            valueSms: '',
            promotionId: '06k2CqijZWQQOzKVYPTYwQ==',
            s: 60,
            getSms: false, //是否获取验证码
            valid: false
        }
    },
    methods: {
        async sendCaptcha() {
            try {
                this.s = 60
                let res = await sendCaptcha({ mobile: this.valuePhone, type: 1 })
                this.getSms = true
                this.setTimeOutS()
            } catch (err) {
                this.getSms = true
                this.setTimeOutS()
            }
        },
        async loginByCaptcha() {
            let res = await loginByCaptcha({ mobile: this.valuePhone, code: this.valueSms, promotionId: this.promotionId })
            localStorage.setItem('tt-token', res.data.token)
            localStorage.setItem('tt-phoneNumber', res.data.phoneNumber)
            res.data.nickname && localStorage.setItem('tt-nickname', res.data.nickname)
            res.data.avatar && localStorage.setItem('tt-avatar', res.data.avatar)
            router.push('/')
        },
        getCaptcha() {
            if (!this.valid) {
                this.$vant.toast({ msg: '手机号码格式错误' })
                return
            }
            !this.getSms && this.sendCaptcha()
        },
        login() {
            if (!this.valid) {
                this.$vant.toast({ msg: '手机号码格式错误' })
                return
            }
            if (this.valueSms.length != 6) {
                this.$vant.toast({ msg: '请输入正确的验证码' })
                return
            }
            this.loginByCaptcha()
        },
        setTimeOutS() {
            let timer = setInterval(() => {
                this.s -= 1
                if (this.s == 0) {
                    clearInterval(timer)
                    this.getSms = false
                }
            }, 1000)
        },
        validPhone(val) {
            let reg = /^((1[3,4,5,6,7,8,9][0-9])|)\d{11}$/
            this.valid = reg.test(val)
        }
    },
}
</script>
<style lang="scss" >
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: hidden;
  .van-field {
    padding: 0;
  }
  .login-text {
    font-size: 15px;
    color: #333333;
    margin-left: 25px;
    margin-top: 20px;
  }
  .input-wrap {
    width: 325px;
    margin: 10px 25px;
    margin-top: 0;
    padding: 10px 0;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .sms {
      height: 21px;
      font-size: 15px;
      line-height: 21px;
      text-align: right;
      border-left: 1px solid #eeeeee;
    }
    .get-sms {
      width: 120px;
      color: #04b3bf;
    }
    .get-sms-done {
      width: 155px;
      color: #999999;
    }
  }
  .login-btn {
    margin: 30px 25px;
  }
}
</style>