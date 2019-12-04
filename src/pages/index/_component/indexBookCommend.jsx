import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import './indexBookCommend.scss'
import bookImage from '../../../images/bookDetails/book.png'
// import BookBox from '../../../component/bookBox/bookBox'
export default class IndexBookCommend extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View className="indexBookCommendBox">
       <View className="indexBookCommendTitle">
        <Text className="indexBookCommendTitleLeft">图书推荐</Text>
        <Navigator className="indexBookCommendTitleRight">查看更多</Navigator>
       </View>
       <View className="indexBookCommendBody">
        <View className="indexBookCommendBodyImage">
          <Image className="BodyImageTop" src={ bookImage }></Image>
          <View className="BodyImageBottom">儿童文学书籍</View>
        </View>
        <View className="indexBookCommendBodyImage">
          <Image className="BodyImageTop" src={ bookImage }></Image>
          <View className="BodyImageBottom">儿童文学书籍</View>
        </View>
        <View className="indexBookCommendBodyImage">
          <Image className="BodyImageTop" src={ bookImage }></Image>
          <View className="BodyImageBottom">儿童文学书籍</View>
        </View>
        <View className="indexBookCommendBodyImage">
          <Image className="BodyImageTop" src={ bookImage }></Image>
          <View className="BodyImageBottom">儿童文学书籍</View>
        </View>
        <View className="indexBookCommendBodyImage">
          <Image className="BodyImageTop" src={ bookImage }></Image>
          <View className="BodyImageBottom">儿童文学书籍</View>
        </View>
        <View className="indexBookCommendBodyImage">
          <Image className="BodyImageTop" src={ bookImage }></Image>
          <View className="BodyImageBottom">儿童文学书籍</View>
        </View>
       </View>
      </View>
    )
  }
}