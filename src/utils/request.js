import Taro from '@tarojs/taro'

export default {
  // requestGetCookie() {
  //   let value
  //   Taro.request({
  //     method: 'POST',
  //     url: 'http://localhost:8080/login',
  //     data: {
  //       username: this.state.username,
  //       password: this.state.password
  //     },
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded'
  //     },
  //     mode: 'cors',
  //     success: (res)=> {
  //       console.log(res)
  //     }
  //     // credentials: 'omit'
  //   }).then(res => {
  //     console.log(res)
  //     let cookies = res.header['Set-Cookie'].replace(/,/g, ';')
  //     console.log('=======', cookies)
  //     Taro.setStorageSync('Cookies', cookies)
  //     Taro.redirectTo({
  //       url: `/pages/login/login`
  //     })
  //     value = res
  //   })
  //   return value
  // },
  reqHC(url,params = null,method = 'POST') {
    let cookie = Taro.getStorageSync('Cookies')
    return(
    Taro.request({
      method: `${method}`,
      data: params,
      url: `http://localhost:8080/${url}`,
      mode: 'cors',
      header: { Cookie: cookie, 'content-type': 'application/json' },
      credentials: 'include',
    }).catch(() => {
      console.log('请求发生错误检查错误信息')
    })
    )
  }
}