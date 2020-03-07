// 认证页面
<template>
    <div class="certification">
        <headers
            leftArrow
            fixed
            border
            :title="titleText"
        />
        <div class="step-images">
            <img
                v-if="step==1"
                src='../../assets/images/step01@3x.png'
            >
            <img
                v-if="step==2"
                src='../../assets/images/step02@3x.png'
            >
            <img
                v-if="step==3"
                src='../../assets/images/step03@3x.png'
            >
            <img
                v-if="step==4"
                src='../../assets/images/step04@3x.png'
            >
            <div class="step-text">
                <p>手机号</p>
                <p :class="step<2?'grey-text':''">身份证</p>
                <p :class="step<3?'grey-text':''">结算卡</p>
                <p :class="step<4?'grey-text':''">完成</p>
            </div>
        </div>
        <div class="steps">
            <step-one v-if="step==1" />
            <step-two v-if="step==2" />
            <step-three v-if="step==3" />
            <img
                class="complete-img"
                v-if="step==4"
                src="../../assets/images/complete@3x.png"
                alt=""
            >
        </div>
        <div
            v-if="step<4"
            class="tt-btn certification-btn"
            @click="goNext"
        >下一步</div>
        <div
            v-if="step==4"
            class="tt-btn certification-btn"
            @click="comfirm"
        >确定</div>
        <div
            v-if="step==3"
            @click="goBefore"
            class="tt-btn certification-btn-empty"
        >上一步</div>
    </div>
</template>

<script>
import { Field } from 'vant'
import headers from '../../components/layout/header'
import StepOne from './components/step-one'
import StepTwo from './components/step-two'
import StepThree from './components/step-three'
export default {
    components: {
        [Field.name]: Field,
        headers,
        StepOne,
        StepTwo,
        StepThree
    },
    data() {
        return {
            step: 1,
            titleText: '绑定手机号'
        }
    },
    methods: {
        goNext() {
            this.step += 1
        },
        goBefore() {
            this.step -= 1
        },
        comfirm() {
            console.log('完成')
        }
    },
}
</script>
<style lang="scss" >
.certification {
  .step-images {
    width: 100%;
    height: 120px;
    margin-top: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    img {
      width: 325px;
      height: 35px;
    }
    .step-text {
      width: 325px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
      p {
        font-size: 12px;
        color: #333333;
        &:last-child {
          margin-right: 5px;
        }
      }
      .grey-text {
        color: #999999;
      }
    }
  }
  .steps {
    margin-top: 10px;
    .complete-img {
      width: 80px;
      height: 80px;
      margin: 45px 147px;
      margin-bottom: 25px;
    }
  }
  .certification-btn {
    margin: 30px 10px;
    width: 355px;
  }
  .certification-btn-empty {
    margin: 30px 10px;
    margin-top: -15px;
    width: 355px;
    height: 44px;
    border: 1px solid #04b3bf;
    border-radius: 4px;
    background: #fff;
    color: #04b3bf;
  }
}
</style>