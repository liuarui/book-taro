import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './myFavorite.scss'
// 公有组件引入

// 私有组件引入
import FavoriteCard from './_component/FavoriteCard'

export default class MyFavorite extends Component {
  config = {
    navigationBarTitleText: '我的收藏'
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillUnmount() {}

  // componentDidShow() {}

  // componentDidHide() {}

  render() {
    return (
      <View className='myFavoriteBox'>
        <View className='myFavoriteText'>发现好书，加入收藏，随时查看</View>
        {/* 这里这个组件应该叫FavoriteCardList更合适 */}
        <FavoriteCard></FavoriteCard>
      </View>
    )
  }
}
