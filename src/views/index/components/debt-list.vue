<template>
    <div class="index-debt-list">
        <div
            v-if="debtList.length>0"
            class="lists"
        >
            <div
                class="debt-item"
                v-for="item in debtList"
            >
                <div class="left">
                    <p>收款</p>
                    <time>{{item.payTime}}</time>
                </div>
                <div class="right">
                    <p>{{item.arriveAmount}}</p>
                    <img src="../../../assets/images/arrow@3x.png">
                </div>
            </div>
        </div>
        <div
            v-if="debtList.length==0"
            class="list-null"
        >
            <img
                src="../../../assets/images/empty@3x.png"
                alt=""
            >
            <p>暂无账单哦</p>
        </div>
    </div>
</template>

<script>
import { getWithdrawRecord } from '../../../api/api'
export default {
    data() {
        return {
            debtList: [],
            params: {
                startTime: null,
                endTime: null,
                page: 1,
                size: 10
            }
        }
    },
    mounted() {
        this.getWithdrawRecord()
    },
    methods: {
        async getWithdrawRecord() {
            let res = await getWithdrawRecord(this.params)
            this.debtList = res.data.list
        },
        getParams(name, val) {
            if (name == 'all') {
                this.params = {
                    ...this.params,
                    startTime: null,
                    endTime: null
                }
            } else {
                let valArr = val.split(' ')[0].split('/')
                Number(valArr[1]) < 10 ? valArr[1] = '0' + valArr[1] : ''
                Number(valArr[2]) < 10 ? valArr[2] = '0' + valArr[2] : ''
                val = valArr.join('-') + ' 00:00:00'
                this.params[name] = val
            }
            this.getWithdrawRecord()
        }
    },
}
</script>
<style lang="scss" scoped>
.index-debt-list {
  width: 100%;
  background: #fff;
  border-top: 1px solid #f3f3f3;
  float: left;
  .list-null {
    width: 100%;
    height: 216px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 116px;
      height: 86px;
    }
    p {
      margin-top: 10px;
      font-size: 13px;
      color: #999999;
    }
  }
  .lists {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .debt-item {
      width: 335px;
      height: 60px;
      border-bottom: 1px solid #f3f3f3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          font-size: 15px;
          color: #333333;
          line-height: 21px;
        }
        time {
          font-size: 11px;
          color: #999999;
          line-height: 16px;
          margin-top: 5px;
        }
      }
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 15px;
          color: #333333;
        }
        img {
          width: 5px;
          height: 10px;
          margin-left: 10px;
        }
      }
      &:last-child {
        border: 0;
      }
    }
  }
}
</style>