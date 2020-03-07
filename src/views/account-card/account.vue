// 认证页面
<template>
    <div class="acoount">
        <headers
            leftArrow
            fixed
            border
            :title="titleText"
        />
        <card :show-type="showType" />
        <div
            v-if="showType"
            class="tt-btn acoount-btn"
            @click="changeInfo"
        >去修改</div>
        <div
            v-if="!showType"
            class="tt-btn acoount-btn"
            @click="comfirm"
        >确认修改</div>
    </div>
</template>

<script>
import { Field } from 'vant'
import headers from '../../components/layout/header'
import card from './components/card'
export default {
    components: {
        [Field.name]: Field,
        headers,
        card
    },
    data() {
        return {
            titleText: '结算卡信息',
            showType: false//是否为只读
        }
    },
    methods: {
        changeInfo() {
            this.titleText = '修改结算卡'
            this.showType = false
        },
        comfirm() {
            this.titleText = '结算卡信息'
            this.showType = true
        }
    },
}
</script>
<style lang="scss" >
.acoount {
  .acoount-btn {
    margin: 30px 10px;
    width: 355px;
  }
}
</style>