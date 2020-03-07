// 认证页面
<template>
    <div class="ali-get-debt">
        <headers
            leftArrow
            fixed
            border
            title="微信支付宝"
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
        <input-box />
        <div class="choose-ali-way">
            <div class="way-title">选择渠道</div>
            <div class="way-list">
                <div
                    v-for="(item,index) in wayList"
                    :key="index"
                    class="list-item"
                    @click="chooseItem(item)"
                >
                    <div class="left">
                        <img :src="item.icon">
                        <div class="info">
                            <p>{{item.wayName}}</p>
                            <span>0.06</span>
                        </div>
                    </div>
                    <div class="right">
                        <img
                            v-if="item.isChoose"
                            src="../../assets/images/dui@3x.png"
                        >
                        <span v-else></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tt-btn choose-card-btn">立即收款</div>
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
            wayList: [
                {
                    icon: require('../../assets/images/huabei1@3x.png'),
                    wayName: '花呗',
                    isChoose: true
                },
                {
                    icon: require('../../assets/images/zfb@3x.png'),
                    wayName: '支付宝信用卡',
                    isChoose: false
                },
            ]
        }
    },
    methods: {
        chooseItem(val) {
            this.wayList.forEach(item => {
                item.isChoose = item.wayName == val.wayName
            })
        }
    },
}
</script>
<style lang="scss" >
.ali-get-debt {
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
  .choose-ali-way {
    width: 100%;
    height: 165px;
    background: #fff;
    margin-top: 10px;
    .way-title {
      width: 100%;
      height: 44px;
      border-bottom: 1px solid #f3f3f3;
      font-size: 12px;
      line-height: 44px;
      padding-left: 15px;
      color: #333333;
    }
    .way-list {
      width: 100%;
      .list-item {
        width: 375px;
        height: 60px;
        padding-left: 15px;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 24px;
            height: 24px;
            margin-right: 15px;
          }
          .info {
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            p {
              font-size: 16px;
              color: #333333;
              line-height: 22px;
            }
            span {
              font-size: 11px;
              color: #999999;
              line-height: 16px;
            }
          }
        }
        .right {
          img {
            width: 15px;
            height: 15px;
          }
          .add-choose {
            width: 5px;
            height: 10px;
          }
          span {
            display: inline-block;
            width: 15px;
            height: 15px;
            border: 1px solid #999;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>