<template>
    <div class="step-three">
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
                <img src="../../../assets/images/arrow@3x.png" />
            </div>
        </div>
        <van-field
            :value="phoneNumber"
            label="手机号"
            placeholder="输入绑定手机号"
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
</template>

<script>
import { Field, Popup, Picker } from 'vant'

export default {
    components: {
        [Field.name]: Field,
        [Popup.name]: Popup,
        [Picker.name]: Picker
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
<style lang="scss" scoped>
.step-three {
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
</style>