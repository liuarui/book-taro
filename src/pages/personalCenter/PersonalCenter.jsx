import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './PersonalCenter.scss'
// 公有组件引入

// 私有组件引入

export default class PersonalCenter extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='personalCenter'>
        <View>弹窗块</View>
      </View>
    )
  }
}
