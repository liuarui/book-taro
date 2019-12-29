import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtInput } from 'taro-ui'
import Request from '../../../utils/request'
import './principalApproveOK.scss'
// 公有组件引入

// 私有组件引入
export default class PrincipalApproveOK extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      phoneNumber: '',
      licensePath: ''
    }
  }
  componentWillMount() {
    Request.reqHC('principal', null, 'GET').then(res => {
      this.setState({
        phoneNumber: res.data.value.phoneNumber,
        licensePath: res.data.value.licensePath
      })
    })
  }

  handleChange(value) {
    this.setState({
      phoneNumber: value
    })
  }

  config = {
    navigationBarTitleText: '园长认证'
  }

  render() {
    return (
      <View className='principalApproveOKBox'>
        <View className='principalApproveOKTop'>
          <View className='principalApproveOK'>手机号码</View>
          <View>{this.state.phoneNumber}</View>
        </View>
        <View className='principalApproveOKTop'>
          <View className='principalApproveOK'>营业执照</View>
          <Image
            className='principalApproveOKImage'
            src={`http://101.132.157.78/static?dir=${this.state.licensePath}`}
          ></Image>
        </View>
      </View>
    )
  }
}
