import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui'
import { View, Image } from '@tarojs/components'
import bgImage from '../../images/login/loginbg.png'
import './login.scss'
import './userLogin.scss'

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
      url: 'http://101.132.157.78/login',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      mode: 'cors',
      credentials: 'include'
    }).then(res => {
      let cookies = res.header['Set-Cookie'].replace(/,/g, ';')
      Taro.setStorageSync('Cookies', cookies)
      Taro.atMessage({
        message: `登陆请求成功Cookie为${cookies}`,
        type: 'success'
      })
      Taro.redirectTo({
        url: `/pages/login/login`
      })
    }).catch((res)=>{
      Taro.atMessage({
        message: `登陆失败,错误信息为${res}`,
        type: 'error'
      })
    })
  }
  render() {
    return (
      <View className='loginBox'>
        <AtMessage />
        <Image className='loginBG' src={bgImage}></Image>
        <View className='loginText1'>欢迎来到墨秀图书，请登陆</View>
        <View className='loginText2'>便于获取想要的内容</View>
        <View>
          <View className='loginRadioBox'></View>
          <AtForm
            onSubmit={this.onSubmit.bind(this)}
            className='userloginInput'
          >
            <AtInput
              name='username'
              title='用户名'
              type='text'
              placeholder='请输入用户名'
              value={this.state.value}
              onChange={this.handleUserNameChange.bind(this)}
              className='userloginInputBorder'
            />
            <AtInput
              name='password'
              title='密码'
              type='password'
              value={this.state.value}
              onChange={this.handlePassWordChange.bind(this)}
              className='userloginInputBorder'
            />
            <AtButton
              onClick={this.onSubmit.bind(this)}
              className='userloginInputBorder'
            >
              提交
            </AtButton>
          </AtForm>
        </View>
      </View>
    )
  }
}
