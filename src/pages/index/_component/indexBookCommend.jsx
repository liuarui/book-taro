import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import './indexBookCommend.scss'
import bookImage from '../../../images/bookDetails/book.png'
// import BookBox from '../../../component/bookBox/bookBox'
// 私有组件引入
import BookCommendBodyImage from './BookCommendBodyImage'
export default class IndexBookCommend extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View className="indexBookCommendBox">
       <View className="indexBookCommendTitle">
        <Text className="indexBookCommendTitleLeft">图书推荐</Text>
        <Navigator url='/pages/category/Category' className="indexBookCommendTitleRight">查看更多</Navigator>
       </View>
       <View className="indexBookCommendBody">
         <BookCommendBodyImage imageUrl={bookImage} bookName={'儿童文学书籍'}/>
         <BookCommendBodyImage imageUrl={bookImage} bookName={'儿童文学书籍'}/>
         <BookCommendBodyImage imageUrl={bookImage} bookName={'儿童文学书籍'}/>
         <BookCommendBodyImage imageUrl={bookImage} bookName={'儿童文学书籍'}/>
         <BookCommendBodyImage imageUrl={bookImage} bookName={'儿童文学书籍'}/>
         <BookCommendBodyImage imageUrl={bookImage} bookName={'儿童文学书籍'}/>
       </View>
      </View>
    )
  }
}