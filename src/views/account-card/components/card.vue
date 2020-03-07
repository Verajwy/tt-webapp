<template>
    <div class="card">
        <van-field
            :value="cardNo"
            label="姓名"
            placeholder="请输入持卡人姓名"
            :readonly="showType"
            size="large"
        />
        <van-field
            :value="cardNo"
            label="身份证号"
            placeholder="请输入持卡人身份证号"
            :readonly="showType"
            size="large"
        />
        <van-field
            :value="cardNo"
            label="卡号"
            placeholder="请输入卡号"
            :readonly="showType"
            size="large"
        />
        <div class="van-cell">
            <div class="van-cell__title">
                <span class="text-15">选择开户行</span>
            </div>
            <div
                @click="openCardList"
                class="van-cell__value choose-card"
            >
                <span
                    class="text-15"
                    v-if="!cardType"
                >请选择</span>
                <span
                    class="text-15"
                    v-if="cardType"
                >{{cardType}}</span>
                <img src="../../../assets/images/arrow@3x.png" />
            </div>
        </div>
        <van-field
            :value="phoneNumber"
            label="手机号"
            placeholder="请输入绑卡手机号"
            :readonly="showType"
            size="large"
        >
            <span
                v-if="!showType"
                style="font-size: 15px;color: #04B3BF;"
                slot="button"
            >获取验证码</span></van-field>
        <van-field
            v-if="!showType"
            :value="phoneNumber"
            label="验证码"
            placeholder="请输入短信验证码"
            :readonly="showType"
            size="large"
        />
        <van-popup
            @close="closeCardList"
            v-model="showCardList"
            position="bottom"
            size="large"
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
</template>

<script>
import { Field, Popup, Picker } from 'vant'

export default {
    components: {
        [Field.name]: Field,
        [Popup.name]: Popup,
        [Picker.name]: Picker
    },
    props: {
        showType: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            cardNo: '',
            cardType: '',
            phoneNumber: '',
            showCardList: false,
            columns: ['农行', '建行']
        }
    },
    methods: {
        openCardList() {
            !this.showType ? this.showCardList = true : ''
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
<style lang="scss" scoped>
.card {
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
  .text-15 {
    font-size: 15px;
  }
}
</style>