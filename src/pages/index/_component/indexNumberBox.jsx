import Taro, { Component } from '@tarojs/taro'
import {View, Text, Input, Button} from '@tarojs/components'
import './indexNumberBox.scss'

export default class IndexNumberBox extends Component {
  render() {
    return (
      <View className="indexNumberBox">
        <View className="indexNumberTitle">输入编码观看视频</View>
        <View className="indexNumberBody">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <Input
            className="indexNumberContent"
            type="number"
            maxLength='5'
            />
          <Button className="indexNumberButton">查询</Button>
        </View>
      </View>
    )
  }
}