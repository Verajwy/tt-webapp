// 微信支付宝开通页
<template>
    <div class="open-result">
        <headers
            leftArrow
            fixed
            border
            :title="openStatus==2?'花呗开通申请':'微信支付宝'"
        />
        <div
            v-if="openStatus==1"
            class="open-box not-open"
        >
            <img src="../../assets/images/huabei@3x.png">
            <p>您的花呗渠道暂未开通，请确认开通</p>
        </div>
        <div
            v-if="openStatus==2"
            class="open-box open-progress"
        >
            <div class="progress-item">
                <p>花呗渠道开通申请已提交，正在处理中，请稍后</p>
                <time>02-27 18:00</time>
                <img
                    class="current-progress"
                    src="../../assets/images/progress_tick@3x.png"
                >
                <span class="center-line"></span>
            </div>
            <div class="progress-item margin-20">
                <p>预计开通时间</p>
                <time>02-27 18:00</time>
                <span class="current-progress next-progress">¥</span>
            </div>
        </div>
        <div
            v-if="openStatus==3"
            class="open-box not-open wait-audit"
        >
            <img src="../../assets/images/huabei@3x.png">
            <p>您的花呗渠道正在审核中，请稍后再试</p>
            <span>预计等待时间5-30分钟</span>
        </div>
        <div
            v-if="openStatus!=2"
            :class="openStatus==3?'tt-btn open-btn opacity-5':'tt-btn open-btn'"
            @click="changeInfo"
        >确认开通</div>
        <div
            v-if="openStatus==2"
            class="tt-btn open-btn"
            @click="changeInfo"
        >继续交易</div>
    </div>
</template>

<script>
import { Field } from 'vant'
import headers from '../../components/layout/header'
export default {
    components: {
        [Field.name]: Field,
        headers
    },
    data() {
        return {
            titleText: '微信支付宝',
            openStatus: 3//1未开通，2开通申请，3开通审核
        }
    },
    methods: {
        changeInfo() {
            this.titleText = '修改结算卡'
            this.showType = false
        },
        comfirm() {
            this.titleText = '结算卡信息'
            this.showType = true
        }
    },
}
</script>
<style lang="scss" >
.open-result {
  font-size: 14px;
  color: #333333;
  line-height: 20px;
  .open-box {
    width: 375px;
    margin-top: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
  }
  .not-open {
    height: 165px;
    img {
      width: 65px;
      height: 65px;
    }
    p {
      margin-top: 20px;
    }
  }
  .open-progress {
    height: 156px;
    .progress-item {
      width: 100%;
      height: 78px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
      p {
        margin-left: 45px;
        color: #04b3bf;
        margin-top: 21px;
      }
      time {
        margin-top: 5px;
        margin-left: 45px;
        font-size: 12px;
        color: #999999;
        line-height: 17px;
      }
      .center-line {
        width: 2px;
        height: 50px;
        position: absolute;
        left: 24px;
        top: 40px;
        opacity: 0.3;
        background: #2db6d8;
      }
      .current-progress {
        position: absolute;
        left: 15px;
        top: 20px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 10px;
      }
      .next-progress {
        background: linear-gradient(134deg, #50d1c5 0%, #22addf 100%);
        opacity: 0.3;
        color: #fff;
        font-weight: bold;
        text-align: center;
        line-height: 20px;
        z-index: 2;
      }
    }
    .margin-20 {
      margin-top: -10px;
    }
  }
  .wait-audit {
    height: 190px;
    span {
      margin-top: 5px;
      color: #d43e39;
    }
  }
  .open-btn {
    margin: 30px 10px;
    width: 355px;
  }
  .opacity-5 {
    opacity: 0.5;
  }
}
</style>