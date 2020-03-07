// 认证页面
<template>
    <div class="choose-card">
        <headers
            leftArrow
            fixed
            border
            title="收款"
        />
        <div class="to-card">
            <p class="title">到账结算卡</p>
            <div class="card-info">
                <img src="../../assets/images/card_icon@3x.png">
                <div class="text">
                    <p>招商银行<span>储蓄卡</span> </p>
                    <span>**** **** 0000</span>
                </div>
            </div>
        </div>
        <card-select />
        <input-box />
        <div class="tt-btn choose-card-btn">下一步</div>
    </div>
</template>

<script>
import headers from '../../components/layout/header'
import CardSelect from './components/card-select'
import InputBox from './components/input-box'
export default {
    components: {
        headers,
        CardSelect,
        InputBox
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>
<style lang="scss" >
.choose-card {
  overflow: hidden;
  .choose-card-btn {
    margin: 30px 10px;
    width: 355px;
  }
  .to-card {
    width: 375px;
    height: 110px;
    margin-top: 46px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .title {
      font-size: 14px;
      color: #333333;
      margin-top: 15px;
      margin-left: 15px;
    }
    .card-info {
      width: 100%;
      height: 44px;
      margin-top: 15px;
      img {
        width: 44px;
        height: 44px;
        margin-left: 15px;
        float: left;
      }
      .text {
        height: 44px;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #333333;
        margin-left: 15px;
        p {
          font-size: 15px;
          font-weight: bold;
          margin-top: 5px;
          span {
            font-size: 12px;
            font-weight: 400;
            margin-left: 10px;
          }
        }
        span {
          font-size: 13px;
          line-height: 18px;
          margin-top: 2px;
        }
      }
    }
  }
}
</style>