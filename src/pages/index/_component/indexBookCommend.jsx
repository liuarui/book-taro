import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './indexBookCommend.scss'

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
         图书列表块
       </View>
      </View>
    )
  }
}