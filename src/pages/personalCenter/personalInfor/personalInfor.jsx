import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './personalInfor.scss'
// 公有组件引入

// 私有组件引入

export default class PersonalInfor extends Component {

  config = {
    navigationBarTitleText: '个人信息'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='personalInfor'>
        <View>弹窗块</View>
      </View>
    )
  }
}
