<template>
    <div class="input-box">
        <p
            v-if="textType==1"
            class="input-title"
        >提现金额<span>(不能低于110)</span></p>
        <p
            v-if="textType==2"
            class="input-title"
        >收款金额</p>
        <div class="input-wrap">
            <span class="icon">¥</span>
            <van-field
                @blur="bindInput"
                type="number"
                :value="money"
            />
        </div>
    </div>
</template>

<script>
import { Field } from 'vant'
export default {
    components: {
        [Field.name]: Field
    },
    props: {
        textType: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            money: '',
        }
    },
    methods: {
        bindInput(e) {
            this.money = e.target.value
            e.target.value > 110 ? '' : this.$vant.toast({ msg: '金额不能低于110元' })
        }
    },
}
</script>
<style lang="scss" >
.input-box {
  width: 375px;
  height: 121px;
  margin-top: 10px;
  background: #fff;
  overflow: hidden;
  .input-title {
    margin: 15px;
    margin-bottom: 5px;
    font-size: 12px;
    color: #333333;
    span {
      color: #04b3bf;
    }
  }
  .input-wrap {
    width: 345px;
    margin: 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    .icon {
      font-size: 34px;
      color: #333333;
      font-weight: bold;
    }
    .van-cell {
      width: 300px;
      height: 70px;
      margin-left: 10px;
      .van-field__control {
        display: inline-block;
        width: 300px;
        font-size: 34px;
        margin-top: 5px;
        font-weight: bold;
      }
    }
  }
}
</style>