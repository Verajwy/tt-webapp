<template>
    <van-tabbar
        v-model="active"
        active-color="#35B3D4"
        @change="tabClick"
    >
        <van-tabbar-item>
            <span>首页</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? require('../../assets/images/home_s@3x.png') : require('../../assets/images/home@3x.png')"
            >
        </van-tabbar-item>
        <van-tabbar-item>
            <span>我的</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? require('../../assets/images/mine_s@3x.png') : require('../../assets/images/mine@3x.png')"
            >
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            active: this.index
        }
    },
    methods: {
        tabClick(key) {
            if (this.index != key) {
                key == 0 ? this.$router.push('/') : this.$router.push('/mine')
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.van-tabbar-item__icon {
  img {
    width: 22px !important;
    height: 22px !important;
  }
}
.van-tabbar-item__text {
  span {
    font-size: 11px !important;
  }
}
</style>