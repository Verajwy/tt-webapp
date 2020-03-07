<template>
    <van-dialog
        v-model="showDialog"
        title="业务完善中，敬请期待..."
        confirmButtonText="我知道了"
        confirmButtonColor="#04B3BF"
        class="dialog"
    >
        <img
            class="dialog-image"
            src="../../assets/images/img@3x.png"
        >
    </van-dialog>
</template>

<script>
import { Dialog } from 'vant';
export default {
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    data() {
        return {
            showDialog: false
        }
    }
}
</script>
<style lang="scss">
.dialog {
  .van-dialog__content {
    text-align: center;
    .dialog-image {
      width: 130px;
      height: 130px;
    }
  }
}
</style>