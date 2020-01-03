import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './CategoryCard.scss'

export default class CategoryCard extends Component {
  constructor(props) {
    super(props)
  }
  getBookDetails() {
    Taro.redirectTo({
      url: `/pages/index/bookDetails/bookDetails?bookId=${this.props.bookId}`
    })
  }
  render() {
    return (
      <View className='categoryCard' onClick={this.getBookDetails.bind(this)}>
        <Image className='categoryCardImage' src={this.props.imageUrl}></Image>
        <View className='categoryCardName'>{this.props.bookName}</View>
      </View>
    )
  }
}
