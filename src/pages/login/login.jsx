import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// taro-ui引入
import { AtRadio, AtButton } from 'taro-ui'
import './login.scss'
import bgImage from '../../images/login/loginbg.png'
// 公有组件引入
// 私有组件引入

export default class Login extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      identity: ''
    }
  }
  config = {
    navigationBarTitleText: '登陆页'
  }
  handleChange(value) {
    this.setState({
      identity: value
    })
  }
  jumpIndex() {
    console.log(this.state.identity)
    if(this.state.identity === 'easyUser'){
      Taro.navigateTo({
        url: `/pages/personalCenter/PersonalCenter?loginState=${true}`
      })
    } else if(this.state.identity === 'highUser') {
      Taro.navigateTo({
        url: '/pages/personalCenter/principalApprove/principalApprove'
      })
    }
  }
  render() {
    return (
      <View className='loginBox'>
        <Image className='loginBG' src={bgImage}></Image>
        <View className='loginText1'>欢迎来到墨秀图书，请选择身份！</View>
        <View className='loginText2'>便于获取想要的内容</View>
        <View>
          <View className='loginRadioBox'>
            <AtRadio
              className='loginRadio'
              options={[
                { label: '家长', value: 'easyUser' },
                { label: '园长', value: 'highUser' }
              ]}
              value={this.state.identity}
              onClick={this.handleChange.bind(this)}
            />
          </View>
          <AtButton className='loginButton' onClick={this.jumpIndex.bind(this)}>确认身份</AtButton>
        </View>
      </View>
    )
  }
}
