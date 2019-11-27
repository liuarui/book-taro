import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// 公有组件引入

// 私有组件引入
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <SearchBox/>
        <IndexSwiper/>
        <IndexNumberBox/>
        <View>
          <View>图书推荐头部块</View>
          <View>图书推荐列表</View>
          </View>
      </View>
    )
  }
}
