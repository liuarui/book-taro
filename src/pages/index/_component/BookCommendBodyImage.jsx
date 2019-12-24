import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import './BookCommendBodyImage.scss'
import bookImage from '../../../images/bookDetails/book.png'

export default class BookCommendBodyImage extends Component {
  constructor(props) {
    super(props)
  }
  getBookDetails() {
    console.log(this.props)
    Taro.navigateTo({
      url: `/pages/index/bookDetails/bookDetails?bookId=${this.props.bookId}`
    })
  }
  render() {
    return (
        <View className='indexBookCommendBodyImage' onClick={this.getBookDetails.bind(this)}>
          <Image className='BodyImageTop' src={this.props.imageUrl}></Image>
          <View className='BodyImageBottom'>{this.props.bookName}</View>
        </View>
    )
  }
}