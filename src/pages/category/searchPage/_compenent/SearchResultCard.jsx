import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './SearchResultCard.scss'

export default class SearchResultCard extends Component {
  componentDidMount() {}
  getBookDetails() {
    Taro.redirectTo({
      url: `/pages/index/bookDetails/bookDetails?bookId=${this.props.bookId}`
    })
  }
  render() {
    return (
      <View className='bookDetailsCore' onClick={this.getBookDetails.bind(this)}>
        <Image src={this.props.imagePath} className='bookDetailsImage'></Image>
        <View className='bookDetailsCoreRight'>
          <View className='bookDetailsName'>{this.props.bookName}</View>
          <View className='bookDetailsPrize'>
            定价：
            <Text className='bookDetailsPrizeStyle'>
              ￥{this.props.bookPrice}
            </Text>
          </View>
          <View className='bookDetailsMessage bookDetailsMessageFirst'>
            {this.props.bookAuthor}
          </View>
          <View className='bookDetailsMessage'>{this.props.bookPublisher}</View>
          <View className='bookDetailsMessage'>
            {this.props.bookPublishTime}
          </View>
          <View className='bookDetailsMessage'>
            ISBN：{this.props.bookIsbn}
          </View>
        </View>
      </View>
    )
  }
}
