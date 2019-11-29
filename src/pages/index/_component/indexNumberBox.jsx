import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './indexNumberBox.scss'

export default class IndexNumberBox extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      videoNumberValue: "",
    }
  }
  handleInput(event) {
    this.setState({ videoNumberValue: event.target.value })
    
    console.log(event.target.value)
    // let number1
    // this.state.videoNumber.splice(0,1)
    // this.state.videoNumber.splice(1,2)
    // this.state.videoNumber.splice(2,3)
    // this.state.videoNumber.splice(3,4)
    // this.state.videoNumber.splice(4,5)
  }
  render() {
    return (
      <View className="indexNumberBox">
        <View className="indexNumberTitle">输入编码观看视频</View>
        <View className="indexNumberBody">
          <span>{this.state.videoNumberValue.slice(0,1)}</span>
          <span>{this.state.videoNumberValue.slice(1,2)}</span>
          <span>{this.state.videoNumberValue.slice(2,3)}</span>
          <span>{this.state.videoNumberValue.slice(3,4)}</span>
          <span>{this.state.videoNumberValue.slice(4,5)}</span>
          <Input
            className="indexNumberContent"
            type="number"
            maxLength='5'
            onInput={this.handleInput}
            value={this.state.videoNumberValue}
          />
          <Button className="indexNumberButton">查询</Button>
        </View>
      </View>
    )
  }
}