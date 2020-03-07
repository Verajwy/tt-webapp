<template>
    <div class="index">
        <all-func />
        <div class="new-user-image">
            <swiper
                ref="mySwiper"
                id="my-swiper"
                :options="swiperOption"
            >
                <swiper-slide
                    v-for="(slide, index) in swiperSlides"
                    :key="index"
                >
                    <img :src="slide.mainPicture">
                </swiper-slide>
                <div
                    class="swiper-pagination"
                    slot="pagination"
                ></div>
            </swiper>
        </div>

        <debt-select
            @getGetAll="getGetAll"
            @getStartTime="getStartTime"
            @getEndTime="getEndTime"
        />
        <debt-list ref="DebtList" />
        <lg-footer :index="0"></lg-footer>
    </div>
</template>

<script>
import AllFunc from './components/all-func'
import DebtSelect from './components/debt-select'
import DebtList from './components/debt-list'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getCarouselList } from '../../api/api'
export default {
    components: {
        AllFunc,
        DebtSelect,
        DebtList,
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperSlides: []
        }
    },
    mounted() {
        this.getCarouselList()
    },
    computed: {
        swiperOption() {
            return {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination'
                },
                on: {
                    click: this.callback
                }
            }
        },
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    methods: {
        async getCarouselList() {
            let res = await getCarouselList({ page: 1, size: 100 })
            this.swiperSlides = res.data.records
        },
        tabChange(index, title) {
            this.num = (index + 1) * 20;
        },
        onRefresh(done) {
            setTimeout(() => {
                done();
            }, 1500)
        },
        onInfinite(done) {
            setTimeout(() => {
                this.num += 50;
                done();

            }, 1500)
        },
        getGetAll() {
            this.$refs.DebtList.getParams('all', 0)
        },
        getStartTime(val) {
            this.$refs.DebtList.getParams('startTime', val)
        },
        getEndTime(val) {
            this.$refs.DebtList.getParams('endTime', val)
        },
        callback() {
            this.$nextTick(() => {
                const { activeIndex, realIndex } = this.swiper
                const link = this.swiperSlides[activeIndex].activeLink
                link && window.open(link)
            })
        }
    },
}
</script>
<style lang="scss" >
.index {
  background: #fff;
  .new-user-image {
    width: 100%;
    height: 70px;
    float: left;
    background: #fff;
    .swiper-container {
      width: 345px;
      height: 70px;
      margin: 5px 15px;
      border-radius: 35px;
      background: #f3f3f3;
      .swiper-pagination-bullets {
        bottom: 10px !important;
      }
      .swiper-pagination-bullet {
        width: 6px;
        height: 2px;
        background: #ffffff;
        border-radius: 50%;
        opacity: 0.4;
        bottom: 5px !important;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
      }
      img {
        width: 345px;
        height: 70px;
      }
    }
  }
}
</style>