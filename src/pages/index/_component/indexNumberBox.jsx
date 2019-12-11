import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './indexNumberBox.scss'
// Toast显示标志
let indexNumberToast = false
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
  }
  getVideoDetails() {
    // let length = this.state.videoNumberValue.length
    // console.log(this.state.videoNumberValue.length)
    // console.log(indexNumberToast)
    // if(length != '5'){
    //   indexNumberToast = true
    // }else {
    //   indexNumberToast = false
    // }
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
      url: '/pages/index/videoDetails/videoDetails'
    })
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
          <Button className="indexNumberButton" onClick={this.getVideoDetails}>查询</Button>
          {/* <View className={ indexNumberToast ? 'indexNumberToast' : 'ToastNo' } >请输入完整的图书编码</View> */}
        </View>
      </View>
    )
  }
}