import request from './request'

// 发送验证码
export const sendCaptcha = (data) => {
    return request('post', '/api/v1.0/captcha/sendCaptcha', data)
}
// 登录
export const loginByCaptcha = (data) => {
    return request('post', '/api/v1.0/login/loginByCaptcha', data)
}
//获取轮播图
export const getCarouselList = (data) => {
    return request('get', '/api/v1.0/carousel/list', data)
}
// 获取我的费率
export const getMyRate = (data) => {
    return request('get', '/api/v1.0/userInterestRate/myRate', data)
}
// 获取我的收款
export const getWithdrawRecord = (data) => {
    return request('get', '/api/v1.0/withdrawRecord/queryList', data)
}
// 获取银行列表
export const getBankList = (data) => {
    return request('get', '/api/v1.0/bankList/bankList', data)
}
// 获取我的银行卡列表
export const getMyBankList = () => {
    return request('get', '/api/v1.0/bankCard/list')
}

