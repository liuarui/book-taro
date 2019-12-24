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
import Curtain from '../../component/Curtain/Curtain'

export default class Index extends Component {
  constructor () {
  super(...arguments)
    this.state = {
      current: 0,
      loginState: true
    }
  }
  componentWillMount () {
    if(!this.state.loginState){
      Taro.redirectTo({
        url: '/pages/login/userLogin'
      })
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
  render () {
    return (
      <View className='index'>
        <SearchBox jumpUrl='/pages/category/searchPage/searchPage' />
        <IndexSwiper />
        <IndexNumberBox />
        <IndexBookCommend /> 
        <Curtain content='请输入正确编号' />
        <BottomNav pageNumber={0} />
      </View>
    )
  }
}
