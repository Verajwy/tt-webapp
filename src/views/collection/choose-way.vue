// 选择渠道
<template>
    <div class="choose-way">
        <headers
            leftArrow
            fixed
            border
            title="选择渠道"
        />
        <div style="margin-top:46px;">
            <input-box :text-type="2" />
        </div>
        <div class="no-report">
            <p class="text-1">选择渠道<span>(只有开通的渠道才能进行选择交易，渠道可以叠加使用)</span></p>
            <img src="../../assets/images/nil_icon@3x.png">
            <p class="text-2">该交易卡暂无支持的渠道，请选择其它交易卡</p>
            <div class="back-btn">返回上一步</div>
        </div>
        <div class="tt-btn choose-way-btn">确认收款</div>
    </div>
</template>

<script>
import headers from '../../components/layout/header'
import InputBox from './components/input-box'
export default {
    components: {
        headers,
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
.choose-way {
  overflow: hidden;
  .no-report {
    width: 375px;
    height: 246px;
    margin-top: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .text-1 {
      font-size: 12px;
      color: #333333;
      line-height: 17px;
      margin-top: 15px;
      span {
        color: #04b3bf;
      }
    }
    img {
      width: 50px;
      height: 50px;
      margin-top: 40px;
    }
    .text-2 {
      font-size: 14px;
      color: #d43e39;
      line-height: 20px;
      margin-top: 20px;
    }
    .back-btn {
      width: 120px;
      height: 34px;
      margin-top: 20px;
      background: #ffffff;
      border: 1px solid #04b3bf;
      border-radius: 4px;
      font-size: 14px;
      color: #04b3bf;
      text-align: center;
      line-height: 34px;
    }
  }
  .choose-way-btn {
    margin: 30px 10px;
    margin-top: 150px;
    width: 355px;
  }
}
</style>