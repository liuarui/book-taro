import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import './BookCommendBodyImage.scss'
import bookImage from '../../../images/bookDetails/book.png'
export default class BookCommendBodyImage extends Component {
  constructor(props) {
    super(props)
  }
  getBookDetails() {
    // 这里发起请求获取图书码，然后通过图书码跳转
    Taro.request({
      url: 'http://localhost:8080/test',
      data: {
        foo: 'foo',
        bar: 10
      },
      header: {
        'content-type': 'application/json'
      }
    }).then(res => console.log(res.data))
    Taro.navigateTo({
      url: '/pages/index/bookDetails/bookDetails'
    })
  }
  render() {
    return (
        <View className="indexBookCommendBodyImage" onClick={this.getBookDetails}>
          <Image className="BodyImageTop" src={ this.props.imageUrl }></Image>
          <View className="BodyImageBottom">{this.props.bookName}</View>
        </View>
    )
  }
}