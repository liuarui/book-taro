import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './FavoriteCardList.scss'
import Request from '../../../utils/request'
// 公有组件引入

// 私有组件引入
import FavoriteCard from './_component/FavoriteCard'

export default class FavoriteCardList extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      favoriteList: []
    }
  }
  componentWillMount() {
    Request.reqHC('stars').then(res => {
      this.setState({
        favoriteList: res.data.value
      })
    })
  }
  // componentDidMount() {}

  // componentWillUnmount() {}

  // componentDidShow() {}

  // componentDidHide() {}
  config = {
    navigationBarTitleText: '我的收藏'
  }
  render() {
    return (
      <View className='myFavoriteBox'>
        <View className='myFavoriteText'>发现好书，加入收藏，随时查看</View>
        {this.state.favoriteList.map(value => {
          return (
            <FavoriteCard
              key={value.id}
              imageUrl={value.coverPath}
              bookName={value.name}
              bookIntro={value.introduction}
              bookAut={value.author ? value.author : '测试中'}
              bookId={value.id}
            />
          )
        })}
      </View>
    )
  }
}
