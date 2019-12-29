import Taro from '@tarojs/taro'

export default {
  reqHC(
    url,
    params = null,
    method = 'POST',
    header = { 'content-type': 'application/json' }
  ) {
    let cookie = Taro.getStorageSync('Cookies')
    return Taro.request({
      method: `${method}`,
      data: params,
      url: `http://101.132.157.78/${url}`,
      mode: 'cors',
      header: { Cookie: cookie, ...header },
      credentials: 'include'
    }).catch(() => {
      console.log('请求发生错误，请检查错误信息')
    })
  }
}
