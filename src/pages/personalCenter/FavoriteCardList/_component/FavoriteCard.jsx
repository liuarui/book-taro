import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './FavoriteCard.scss'

export default class FavoriteCard extends Component {
  toBookDetails(){
    Taro.navigateTo({
      url: `/pages/index/bookDetails/bookDetails?bookId=${this.props.bookId}`
    })
  }
  render() {
    return (
      <View className='favoriteCardBox' onClick={this.toBookDetails.bind(this)}>
        <Image className='favoriteCardImage'src={this.props.imageUrl}></Image>
        <View className='favoriteCardRight'>
          <View className='favoriteCardTitle'>{this.props.bookName}</View>
          <View className='favoriteCardAut'>{this.props.bookAut}</View>
          <View className='favoriteCardIntro'>{this.props.bookIntro}</View>
        </View>
      </View>
    )
  }
}
