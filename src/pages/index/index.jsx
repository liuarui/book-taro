import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
// 公有组件引入
import SearchBox from '../../component/searchBox/searchBox'
// 私有组件引入
import IndexSwiper from './_component/indexSwiper'
import IndexNumberBox from './_component/indexNumberBox'
import IndexBookCommend from './_component/indexBookCommend'
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
        <IndexBookCommend/>
        <View>弹窗块</View>
      </View>
    )
  }
}
