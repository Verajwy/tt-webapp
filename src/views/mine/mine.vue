<template>
    <div class="mine">
        <div class="mine-header">
            <img :src="avatar?avatar:require('../../assets/images/head@3x.png')">
            <p class="nikename">{{nickname?nickname:'用户'}}</p>
            <p class="phone">{{phoneNumber}}</p>
        </div>
        <div class="link-list">
            <div
                v-for="(item,index) in linkList"
                class="link-item"
                @click="toLink(item.link)"
            >
                <div class="left">
                    <img
                        :src="item.icon"
                        alt=""
                    >
                    <p>{{item.text}}</p>
                </div>
                <div class="right">
                    <img
                        src="../../assets/images/arrow@3x.png"
                        alt=""
                    >
                </div>
                <span
                    v-if="index<linkList.length-1"
                    class="bottom-line"
                ></span>
            </div>
        </div>
        <div class="mine-banner">
            <img src="../../assets/images/mine_banner@3x.png">
        </div>
        <lg-footer :index="1"></lg-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            linkList: [
                { icon: require('../../assets/images/jiesuan@3x.png'), text: '结算卡', link: '/card-list' },
                { icon: require('../../assets/images/jiaoyika@3x.png'), text: '交易卡', link: '/card-list' },
                { icon: require('../../assets/images/feilv@3x.png'), text: '我的费率', link: './my-fee' }
            ],
            phoneNumber: null,
            nickname: null,
            avatar: null
        }
    },
    mounted() {
        this.phoneNumber = localStorage.getItem('tt-phoneNumber')
        this.nickname = localStorage.getItem('tt-nickname')
        this.avatar = localStorage.getItem('tt-avatar')
    },
    methods: {
        tabChange(index, title) {
            this.num = (index + 1) * 20;
        },
        onRefresh(done) {
            setTimeout(() => {
                done();
            }, 1500)
        },
        onInfinite(done) {
            setTimeout(() => {
                this.num += 50;
                done();

            }, 1500)
        },
        toLink(link) {
            this.$router.push(link)
        }
    },
}
</script>
<style lang="scss" scoped>
.mine {
  overflow: hidden;
  .mine-header {
    width: 375px;
    height: 208px;
    background: url("../../assets/images/mine_bg@3x.png") no-repeat;
    background-size: 375px 208px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }
    p {
      color: #ffffff;
    }
    .nikename {
      font-size: 20px;
      line-height: 28px;
      font-weight: bold;
    }
    .phone {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 20px;
    }
  }
  .link-list {
    width: 345px;
    border-radius: 10px;
    margin: 0 15px;
    background: #fff;
    margin-top: -45px;
    .link-item {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .left {
        margin-left: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 21px;
          height: 21px;
          margin-right: 13px;
        }
        p {
          font-size: 14px;
          color: #333333;
        }
      }
      .right {
        margin-right: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 5px;
          height: 10px;
          margin-right: 10px;
        }
      }
      .bottom-line {
        position: absolute;
        right: 0;
        bottom: 0;
        display: inline-block;
        width: 100%;
        height: 1px;
        background: #f3f3f3;
      }
    }
  }
  .mine-banner {
    width: 345px;
    height: 60px;
    margin: 15px;
    img {
      width: 345px;
      height: 60px;
    }
  }
}
</style>