<template>
    <div class="index-debt-select">
        <div class="title">
            <img src="../../../assets/images/bill@3x.png">
        </div>
        <div class="select-box">
            <div
                @click="openDate1"
                class="time start-time"
            >
                <span>开始时间</span>
                <img
                    src="../../../assets/images/arrow_down@3x.png"
                    alt=""
                >
            </div>
            <span class="center-line"></span>
            <div
                @click="openDate2"
                class="time end-time"
            >
                <span>结束时间</span>
                <img
                    src="../../../assets/images/arrow_down@3x.png"
                    alt=""
                >
            </div>
            <div
                @click="onGetAll"
                class="time all-time"
            >
                <img src="../../../assets/images/home_icon_date@3x.png">
                <span>全部</span>
            </div>
        </div>
        <van-popup
            @close="closeDate1"
            v-model="showDate1"
            position="bottom"
        >
            <div class="calendar-title">请选择开始时间</div>
            <Calendar
                @choseDay="clickDay1"
                :futureDayHide="futureDayHide"
            ></Calendar>
        </van-popup>
        <van-popup
            @close="closeDate2"
            v-model="showDate2"
            position="bottom"
        >
            <div class="calendar-title">请选择结束时间</div>
            <Calendar
                @choseDay="clickDay2"
                :agoDayHide="agoDayHide"
            ></Calendar>
        </van-popup>

    </div>
</template>

<script>
import { Popup } from 'vant'
import Calendar from "vue-calendar-component"
export default {
    components: {
        [Popup.name]: Popup,
        Calendar
    },
    data() {
        return {
            showDate1: false,
            showDate2: false,
            startTime: null,
            endTime: null,
            currentTime: null,
            agoDayHide: null,
            futureDayHide: '10000000000000000000'
        }
    },
    methods: {
        openDate1() {
            this.showDate1 = true
        },
        closeDate1() {
            this.showDate1 = false
        },
        openDate2() {
            this.showDate2 = true
        },
        closeDate2() {
            this.showDate2 = false
        },
        onGetAll(val) {
            this.$emit('getGetAll')
        },
        clickDay1(val) {
            this.startTime = val + ' 00:00:00'
            this.showDate1 = false
            this.agoDayHide = `${new Date(this.startTime).getTime() / 1000}`
            this.$emit('getStartTime', this.startTime)
        },
        clickDay2(val) {
            this.endTime = val + ' 00:00:00'
            this.showDate2 = false
            this.futureDayHide = `${new Date(this.endTime).getTime() / 1000}`
            this.$emit('getEndTime', this.endTime)
        },
    },
}
</script>
<style lang="scss" >
.index-debt-select {
  width: 100%;
  height: 97px;
  margin-top: 10px;
  background: #fff;
  float: left;
  .title {
    height: 36px;
    img {
      width: 159px;
      height: 15px;
      margin: 21px 108px;
      margin-bottom: 0;
    }
  }
  .wh_content_all {
    background: #fff !important;
    .wh_top_changge {
      color: #333 !important;
    }
    .wh_chose_day {
      background: #04b3bf;
      color: #fff;
    }
    .wh_isToday {
      background: #999 !important;
      color: #fff !important;
    }
    .wh_jiantou1 {
      border-top: 2px solid #333;
      border-left: 2px solid #333;
    }
    .wh_jiantou2 {
      border-top: 2px solid #333;
      border-right: 2px solid #333;
    }
    .wh_content_li {
      color: #333 !important;
      font-size: 15px !important;
    }
    .wh_content_item {
      color: #333 !important;
    }
  }
  .calendar-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #04b3bf;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  .select-box {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .time {
      width: 100px;
      height: 26px;
      border: 1px solid #04b3bf;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #04b3bf;
      img {
        width: 8px;
        height: 5px;
        margin-left: 13px;
      }
      span {
        margin-left: 5px;
      }
    }
    .all-time {
      width: 80px;
      margin-left: 24px;
      img {
        width: 20px;
        height: 20px;
        margin-left: 0px;
      }
      span {
        margin-left: 10px;
      }
    }
    .center-line {
      width: 15px;
      height: 1px;
      display: inline-block;
      margin: 0 10px;
      background: #04b3bf;
    }
  }
}
</style>