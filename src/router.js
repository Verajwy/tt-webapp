import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routerMap = [
    {
        path: '/',
        name: 'index',
        meta: { title: '首页' },
        component: () => import('./views/index/index.vue')//首页
    },
    {
        path: '/mine',
        name: 'mine',
        meta: { title: '我的' },
        component: () => import('./views/mine/mine.vue')//我的
    },
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('./views/login/login.vue')//登录
    },
    {
        path: '/certification',
        name: 'certification',
        meta: { title: '认证' },
        component: () => import('./views/certification/certification.vue')//认证
    },
    {
        path: '/account-card',
        name: 'accountCard',
        meta: { title: '结算卡' },
        component: () => import('./views/account-card/account.vue')//结算卡
    },
    {
        path: '/bank-list',
        name: 'bankList',
        meta: { title: '选择开户行' },
        component: () => import('./views/bank-list/index.vue')//结算卡
    },
    {
        path: '/get-debt',
        name: 'getDebt',
        meta: { title: '微信支付宝' },
        component: () => import('./views/open-wx-ali/ali-get-debt.vue')//微信支付宝
    },
    {
        path: '/open-result',
        name: 'openResult',
        meta: { title: '微信支付宝' },
        component: () => import('./views/open-wx-ali/open-result.vue')//微信支付宝
    },
    {
        path: '/choose-card',
        name: 'ChooseCard',
        meta: { title: '收款' },
        component: () => import('./views/collection/choose-card.vue')//收款-选择交易卡
    },
    {
        path: '/choose-way',
        name: 'ChooseWay',
        meta: { title: '选择渠道' },
        component: () => import('./views/collection/choose-way.vue')//收款-选择渠道
    },
    {
        path: '/add-deal-card',
        name: 'AddDealWay',
        meta: { title: '添加交易卡' },
        component: () => import('./views/collection/add-deal-card.vue')//添加交易卡
    },
    {
        path: '/card-list',
        name: 'CardList',
        meta: { title: '交易卡' },
        component: () => import('./views/collection/card-list.vue')//交易卡
    },
    {
        path: '/my-fee',
        name: 'MyFee',
        meta: { title: '我的费率' },
        component: () => import('./views/fee/my-fee.vue')//我的费率
    },
]
const router = new Router({
    mode: 'history',
    routes: routerMap
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router
