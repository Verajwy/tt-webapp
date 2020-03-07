// 认证页面
<template>
    <div class="add-deal-card">
        <headers
            leftArrow
            fixed
            border
            title="添加交易卡"
        />
        <div class="input-wrap">
            <van-field
                :value="cardNo"
                label="结算卡卡号"
                placeholder="请输入结算卡卡号"
            />
            <div class="van-cell">
                <div class="van-cell__title">
                    <span>选择开户行</span>
                </div>
                <div
                    @click="openCardList"
                    class="van-cell__value choose-card"
                >
                    <span v-if="!cardType">请选择</span>
                    <span v-if="cardType">{{cardType}}</span>
                    <img src="../../assets/images/arrow@3x.png" />
                </div>
            </div>
            <van-field
                :value="CVN2id"
                label="CVN2安全码"
                placeholder="卡背面签名栏后三位"
            />
            <van-field
                :value="outDate"
                label="过期时间"
                placeholder="例：0120，不要输入/"
            />
            <van-field
                :value="phoneNumber"
                label="手机号"
                placeholder="请输入绑卡手机号"
            />
            <van-popup
                @close="closeCardList"
                v-model="showCardList"
                position="bottom"
            >
                <van-picker
                    show-toolbar
                    title="请选择开户行"
                    :columns="columns"
                    @cancel="onCancel"
                    @confirm="onConfirm"
                />
            </van-popup>
        </div>
        <div
            class="tt-btn add-deal-card-btn"
            @click="comfirm"
        >确定</div>
    </div>
</template>

<script>
import { Field, Popup, Picker } from 'vant'
import headers from '../../components/layout/header'
export default {
    components: {
        [Field.name]: Field,
        [Popup.name]: Popup,
        [Picker.name]: Picker,
        headers
    },
    data() {
        return {
            cardNo: '',
            cardType: '',
            phoneNumber: '',
            CVN2id: '',
            outDate: '',
            showCardList: false,
            columns: ['农行', '建行']
        }
    },
    methods: {
        comfirm() {
            console.log('完成')
        },
        openCardList() {
            this.showCardList = true
        },
        closeCardList() {
            this.showCardList = false
        },
        onCancel() {
            this.closeCardList()
        },
        onConfirm(value, index) {
            console.log(value, index)
            this.cardType = value
            this.closeCardList()
        }
    },
}
</script>
<style lang="scss" >
.add-deal-card {
  .input-wrap {
    margin-top: 46px;
    .choose-card {
      flex: 3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 5px;
      span {
        color: #333;
      }
      img {
        width: 5px;
        height: 10px;
      }
    }
  }
  .add-deal-card-btn {
    margin: 30px 10px;
    width: 355px;
  }
  .add-deal-card-btn-empty {
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