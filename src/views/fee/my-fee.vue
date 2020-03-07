<template>
    <div class="my-fee">
        <headers
            leftArrow
            fixed
            border
            title="我的费率"
        />
        <div class="fee-header">
            <div class="fee-box">
                <van-row>
                    <van-col span="9">渠道</van-col>
                    <van-col span="8">交易费率</van-col>
                    <van-col span="7">提现手续费</van-col>
                </van-row>
                <van-row
                    v-for="item in feeList"
                    :key="item"
                >
                    <van-col span="9">{{item.name}}</van-col>
                    <van-col span="8">{{item.fee}}</van-col>
                    <van-col span="7">{{item.cost}}/笔</van-col>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script>
import headers from '../../components/layout/header'
import { Col, Row } from 'vant'
import { getMyRate } from '../../api/api'
export default {
    components: {
        headers,
        [Col.name]: Col,
        [Row.name]: Row
    },
    data() {
        return {
            feeList: [
                {
                    name: '花呗',
                    fee: '0.06000',
                    cost: '1.00'
                },
                {
                    name: '支付宝信用卡',
                    fee: '0.06000',
                    cost: '1.00'
                }
            ]
        }
    },
    created() {
        this.getMyRate()
    },
    methods: {
        async getMyRate() {
            let res = await getMyRate()
            console.log(res)
        }
    },
}
</script>
<style lang="scss" scoped>
.my-fee {
  overflow: hidden;
  .fee-header {
    width: 375px;
    height: 140px;
    margin-top: 46px;
    background: url("../../assets/images/fl_bg@3x.png") no-repeat;
    background-size: 375px 140px;
    position: relative;
    .fee-box {
      width: 345px;
      position: absolute;
      left: 15px;
      top: 85px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.9);
      .van-row {
        width: 295px;
        height: 55px;
        margin: 0 25px;
        line-height: 55px;
        font-size: 15px;
        color: #333333;
        text-align: left;
      }
    }
  }
}
</style>