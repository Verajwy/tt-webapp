// 银行列表
<template>
    <div class="choose-way">
        <headers
            leftArrow
            fixed
            border
            title="选择开户行"
        />
        <van-index-bar
            sticky
            :sticky-offset-top="46"
            style="margin-top:46px;"
        >
            <div
                v-for="(item,index) in bankList"
                :key="index"
            >
                <van-index-anchor :index="item[0].firstLetter" />
                <van-cell
                    v-for="($item,$index) in item"
                    :key="$index"
                    :title="$item.bankName"
                />
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import headers from '../../components/layout/header'
import { IndexBar, IndexAnchor, Cell } from 'vant'
import { getBankList } from '../../api/api'
export default {
    components: {
        headers,
        [IndexBar.name]: IndexBar,
        [IndexAnchor.name]: IndexAnchor,
        [Cell.name]: Cell
    },
    data() {
        return {
            bankList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    mounted() {
        this.getBankList()
    },
    methods: {
        async getBankList() {
            let res = await getBankList()
            let bankList = []
            bankList = res.data.map(item => {
                return { ...item, firstLetter: item.bankCode.substring(0, 1) }
            })
            // console.log(res.data)
            let tempArr = bankList.reduce((r, x) => ((r[x.firstLetter] || (r[x.firstLetter] = [])).push(x), r), {})
            this.bankList = Object.keys(tempArr).map(x => tempArr[x])
            console.log(this.bankList)
        }
    },
}
</script>
<style lang="scss" >
</style>