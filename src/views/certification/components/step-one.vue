<template>
    <div class="step-one">
        <van-field
            :value="phoneNumber"
            label="手机号"
            placeholder="请输入手机号"
        />
        <van-field
            :value="smsCode"
            label="验证码"
            placeholder="请输入验证码"
        />
        <div class="sms-wrap">
            <p
                class="sms get-sms"
                v-if="!getCode"
            >获取验证码</p>
            <p
                class="sms get-sms-done"
                v-if="getCode"
            >重新获取({{s}}s)</p>
        </div>
    </div>
</template>

<script>
import { Field } from 'vant'
export default {
    components: {
        [Field.name]: Field
    },
    data() {
        return {
            phoneNumber: '',
            smsCode: '',
            getCode: true,
            s: 60
        }
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
.step-one {
  position: relative;
  .van-field {
    height: 50px !important;
  }
  .sms-wrap {
    position: absolute;
    right: 20px;
    bottom: 18px;
    .sms {
      height: 21px;
      font-size: 15px;
      line-height: 21px;
      text-align: right;
    }
    .get-sms {
      width: 90px;
      color: #04b3bf;
      border-left: 1px solid #04b3bf;
    }
    .get-sms-done {
      width: 105px;
      color: #999999;
      border-left: 1px solid #eeeeee;
    }
  }
}
</style>