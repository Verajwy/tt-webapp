<template>
    <div class="card-select">
        <div
            @click="openCardList"
            class="select"
        >
            <p>选择交易卡</p>
            <img
                src="../../../assets/images/arrow@3x.png"
                alt=""
            >
        </div>
        <van-popup
            @close="closeCardList"
            v-model="showCardList"
            position="bottom"
        >
            <div class="card-list">
                <div class="title">
                    <div
                        @click="closeCardList"
                        class="close-icon"
                    >
                        <img src="../../../assets/images/close@3x.png" />
                    </div>
                    <p>选择交易卡</p>
                </div>
                <div
                    v-if="cardList.length>0"
                    class="card-list_list"
                >
                    <div
                        v-for="item in cardList"
                        :key="item"
                        class="list-item"
                        @click="chooseItem(item)"
                    >
                        <div class="left">
                            <img src="../../../assets/images/card_icon@3x.png">
                            <p>{{item.cardName}}</p>
                        </div>
                        <div class="right">
                            <img
                                v-if="item.isChoose"
                                src="../../../assets/images/dui@3x.png"
                            >
                            <span v-else></span>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="left">
                            <img
                                src="../../../assets/images/card_icon@3x.png"
                                alt=""
                            >
                            <p>添加交易卡</p>
                        </div>
                        <div class="right">
                            <img
                                class="add-choose"
                                src="../../../assets/images/arrow@3x.png"
                            >
                        </div>
                    </div>
                </div>
                <div
                    v-if="cardList.length==0"
                    class="card-list_list"
                >
                    <p class="no-card">您还未绑定交易卡，无法交易</p>
                    <div class="tt-btn select-btn"><span class="add-icon">+</span><span class="add-text">添加交易卡</span>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { Popup } from 'vant'
export default {
    components: {
        [Popup.name]: Popup
    },
    data() {
        return {
            showCardList: false,
            cardList: [
                // {
                //     cardName: '招商银行',
                //     isChoose: true
                // },
                // {
                //     cardName: '农业银行',
                //     isChoose: false
                // },
            ]
        }
    },
    methods: {
        openCardList() {
            this.showCardList = true
        },
        closeCardList() {
            this.showCardList = false
        },
        chooseItem(val) {
            this.cardList.forEach(item => {
                item.isChoose = item.cardName == val.cardName
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.card-select {
  margin-top: 10px;
  background: #fff;
  .select {
    width: 375px;
    height: 50px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 15px;
      color: #333333;
    }
    img {
      width: 5px;
      height: 10px;
    }
  }
  .card-list {
    width: 375px;
    min-height: 250px;
    background: #fff;
    z-index: 2;
    .title {
      width: 375px;
      height: 54px;
      position: relative;
      border: 1px solid #f3f3f3;
      p {
        font-size: 17px;
        color: #333333;
        text-align: center;
        line-height: 54px;
      }
      .close-icon {
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 15px;
        width: 45px;
        height: 45px;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    .card-list_list {
      width: 100%;
      .list-item {
        width: 375px;
        height: 50px;
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
          p {
            font-size: 16px;
            color: #333333;
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
      .no-card {
        font-size: 16px;
        color: #d43e39;
        height: 130px;
        line-height: 130px;
        text-align: center;
      }
      .select-btn {
        width: 345px;
        margin: 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        .add-icon {
          font-size: 32px;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>