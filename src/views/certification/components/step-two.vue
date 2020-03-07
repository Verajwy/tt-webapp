<template>
    <div class="step-two">
        <van-field
            :value="userName"
            label="姓名"
            placeholder="请输入姓名"
        />
        <van-field
            :value="idNo"
            label="身份证号"
            placeholder="请输入身份证号"
        />
    </div>
</template>

<script>
import { Field } from 'vant'
export default {
    components: {
        [Field.name]: Field
    },
    data() {
        return {
            userName: '',
            idNo: ''
        }
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
// .step-two{

// }
</style>