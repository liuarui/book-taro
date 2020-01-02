/* eslint-disable react/no-unused-state */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
// 公有组件引入
import SearchBox from '../../component/searchBox/searchBox'
// 私有组件引入
import IndexSwiper from './_component/indexSwiper'
import IndexNumberBox from './_component/indexNumberBox'
import IndexBookCommend from './_component/indexBookCommend'
import BottomNav from '../../component/BottomNav/BottomNav'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      loginState: true,// 登陆状态
    }
  }
  componentWillMount() {
    // 未登录将跳转登录页
    if (!this.state.loginState) {
      Taro.redirectTo({
        url: '/pages/login/userLogin'
      })
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  config = {
    navigationBarTitleText: '首页'
  }
  render() {
    return (
      <View className='indexBox'>
        <SearchBox jumpUrl='/pages/category/searchPage/searchPage' />
        <IndexSwiper />
        <IndexNumberBox />
        <IndexBookCommend />
        <BottomNav pageNumber={0} />
      </View>
    )
  }
}
