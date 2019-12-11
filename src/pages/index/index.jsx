import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
// 公有组件引入
import SearchBox from '../../component/searchBox/searchBox'
// 私有组件引入
import IndexSwiper from './_component/indexSwiper'
import IndexNumberBox from './_component/indexNumberBox'
import IndexBookCommend from './_component/indexBookCommend'
import BottomNav from '../../component/BottomNav/BottomNav'
export default class Index extends Component {
  constructor () {
  super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
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
        <SearchBox jumpUrl='/pages/category/searchPage/searchPage'/>
        <IndexSwiper/>
        <IndexNumberBox/>
        <IndexBookCommend/> 
        <View>弹窗块</View>
        <BottomNav pageNumber={ 0 }/>
      </View>
    )
  }
}
