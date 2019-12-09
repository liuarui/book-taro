import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './principalApprove.scss'
// 公有组件引入

// 私有组件引入

export default class PrincipalApprove extends Component {

  config = {
    navigationBarTitleText: '园长认证'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='principalApprove'>
        <View>弹窗块</View>
      </View>
    )
  }
}
