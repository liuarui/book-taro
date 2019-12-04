import Taro, { Component } from "@tarojs/taro";
import { View, Text, Input } from "@tarojs/components";
import './bookBox.scss'

let boxSize = {
  width: '248',
  height: '403',
  border: '1px solid rgba(245,245,245,1)'
}
export default class BookBox extends Component {
  render() {
    return (
      <View className="bookBox" style={ boxSize }>
        <View className="bookBody">
          1
        </View>
      </View>
    )
  }
}
