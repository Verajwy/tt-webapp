// 认证页面
<template>
    <div class="card-list">
        <headers
            leftArrow
            fixed
            border
            title="交易卡"
        />
        <div class="card-wrap">
            <div class="wrap-title">
                <img src="../../assets/images/deal_icon@3x.png">
                <span>交易卡</span>
            </div>
            <div class="list">
                <div
                    v-for="(item,index) in cardList"
                    :key="index"
                    :style="{top:-10*index+'px',background:'linear-gradient(-45deg,#'+item.color1+' 0%, #'+item.color2+' 100%)'}"
                    class="list-item"
                >
                    <div class="left">
                        <img src="../../assets/images/card_icon@3x.png">
                        <div class="text">
                            <p>{{item.cardName}}<span>储蓄卡</span> </p>
                            <span>**** **** 0000</span>
                        </div>
                    </div>
                    <div
                        @click="unBindCard(item)"
                        class="right"
                    >解绑</div>
                </div>
            </div>
        </div>
        <div class="tt-btn card-list-btn">
            <span class="add-icon">+</span>
            <span class="add-text">添加交易卡</span>
        </div>
        <div class="tt-btn card-list-btn-empty">去交易</div>
    </div>
</template>

<script>
import headers from '../../components/layout/header'
import { getMyBankList } from '../../api/api'
export default {
    components: {
        headers
    },
    data() {
        return {
            cardList: [
                {
                    cardName: '招商银行',
                    isChoose: true,
                    color1: 'F2656C',
                    color2: 'FF9484 '
                },
                {
                    cardName: '农业银行',
                    isChoose: false,
                    color1: '508AC9',
                    color2: '4261B8'
                },
            ]
        }
    },
    created() {
        this.getMyBankList()
    },
    methods: {
        async getMyBankList() {
            let res = await getMyBankList()
            console.log(res)
        },
        unBindCard(item) {
            this.$vant.dialogConfirm(
                {
                    msg: '解除绑定后，该卡将不能再使用',
                    confirmButtonText: '确定解绑',
                    confirmButtonColor: '#D43E39'
                },
                () => { console.log('确认') },
                () => { console.log('取消') }
            )
        }
    },
}
</script>
<style lang="scss" >
.card-list {
  overflow: hidden;
  .card-wrap {
    width: 100%;
    margin-top: 46px;
    background: #fff;
    .wrap-title {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 29px;
        height: 25px;
        margin: 0 15px;
      }
      span {
        font-size: 15px;
        color: #333333;
      }
    }
    .list {
      width: 100%;
      padding: 0 10px;
      padding-bottom: 10px;
      .list-item {
        width: 355px;
        height: 75px;
        // background: linear-gradient(-45deg, #f2656c 0%, #ff9484 100%);
        border-radius: 12px 12px 0 0;
        padding-left: 20px;
        padding-right: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .left {
          height: 65px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 44px;
            height: 44px;
          }
          .text {
            height: 44px;
            float: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
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
        .right {
          width: 60px;
          height: 28px;
          border: 1px solid #ffffff;
          border-radius: 14px;
          font-size: 13px;
          color: #fff;
          text-align: center;
          line-height: 28px;
        }
      }
    }
  }
  .card-list-btn {
    margin: 30px 10px;
    width: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
    .add-icon {
      font-size: 32px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .card-list-btn-empty {
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