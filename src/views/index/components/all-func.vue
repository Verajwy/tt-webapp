<template>
    <div class="index-header column-flex">
        <div
            class="top-item"
            @click="toLink('/get-debt')"
        >
            <img
                class="icon"
                src="../../../assets/images/home_icon02@3x.png"
            >
            <div class="title-text column-flex">
                <div><span>微信支付宝收款</span><img src="../../../assets/images/arrow-white.png"></div>
                <p>可使用花呗、信用卡</p>
            </div>
        </div>
        <div class="bottom-items">
            <div
                class="func-item"
                v-for="item in funcList"
                @click="dialogMethod"
            >
                <img :src="item.image">
                <p>{{item.text}}</p>
            </div>
        </div>
        <no-func ref="noFunc" />
    </div>
</template>

<script>
import NoFunc from '../../../components/layout/no-func'
export default {
    data() {
        return {
            funcList: [
                { image: require('../../../assets/images/home_icon01@3x.png'), text: '收款', link: './choose-card' },
                { image: require('../../../assets/images/home_icon03@3x.png'), text: '延期还款', link: './card-list' }
            ],
            showDialog: false
        }
    },
    components: {
        NoFunc
    },
    methods: {
        toLink(link) {
            this.$router.push(link)
        },
        dialogMethod() {
            this.$refs.noFunc.showDialog = true
        }
    },
}
</script>
<style lang="scss" scoped>
.column-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.index-header {
  width: 100%;
  height: 173px;
  background: url("../../../assets/images/home_card_bg@3x.png") no-repeat;
  background-size: 375px 173px;
  justify-content: flex-start;
  margin-top: 20px;
  float: left;
  overflow: hidden;
  .top-item {
    width: 345px;
    height: 100px;
    margin-left: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      width: 59px;
      height: 49px;
      margin-right: 22px;
      margin-left: 24px;
    }
    .title-text {
      justify-content: flex-start;
      align-items: flex-start;
      color: #ffffff;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 18px;
          font-weight: bold;
          line-height: 25px;
        }
        img {
          width: 16px;
          height: 16px;
          margin-left: 5px;
        }
      }
      p {
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
  .bottom-items {
    width: 345px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .func-item {
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 52px;
      height: 52px;
    }
    p {
      font-size: 15px;
      color: #333;
    }
  }
}
</style>