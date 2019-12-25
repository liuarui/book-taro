import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'

export default class UserLogin extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      username: 'admin',
      password: 'admin'
    }
  }

  handleUserNameChange(value) {
    console.log(value)
    this.setState({
      username: value
    })
  }
  handlePassWordChange(value) {
    console.log(value)
    this.setState({
      password: value
    })
  }
  onSubmit() {
    Taro.request({
      method: 'POST',
      url: 'http://localhost:8080/login',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      mode: 'cors',
      success: (res)=> {
        console.log(res)
      }
      // credentials: 'omit'
    }).then(res => {
      console.log(res)
      let cookies = res.header['Set-Cookie'].replace(/,/g, ';')
      console.log('=======', cookies)
      Taro.setStorageSync('Cookies', cookies)
      Taro.redirectTo({
        url: `/pages/login/login`
      })
      console.log(res)
    })
  }
  render() {
    return (
      <AtForm onSubmit={this.onSubmit.bind(this)}>
        <AtInput
          name='username'
          title='用户名'
          type='text'
          placeholder='请输入用户名'
          value={this.state.value}
          onChange={this.handleUserNameChange.bind(this)}
        />
        <AtInput
          name='password'
          title='密码'
          type='password'
          value={this.state.value}
          onChange={this.handlePassWordChange.bind(this)}
        />
        <AtButton  onClick={this.onSubmit.bind(this)}>
          提交
        </AtButton>
      </AtForm>
    )
  }
}
