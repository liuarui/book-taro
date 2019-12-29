import Taro, { Component } from '@tarojs/taro'
import { View, Input, Button, Text } from '@tarojs/components'
import Curtain from '../../../component/Curtain/Curtain'
import './indexNumberBox.scss'
// Toast显示标志
// let indexNumberToast = false
export default class IndexNumberBox extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      videoNumberValue: ''
    }
  }
  handleInput(event) {
    console.log(event.target.value)
    this.setState({ videoNumberValue: event.target.value })
    this.forceUpdate()
  }
  getVideoDetails() {
    if (this.state.videoNumberValue.length != 5) {
      this.child.onOpen()
    } else {
      Taro.navigateTo({
        url: `/pages/index/videoDetails/videoDetails?bookId=${this.state.videoNumberValue}`
      })
    }
  }
  onRef(ref) {
    this.child = ref
  }
  render() {
    return (
      <View className='indexNumberBox'>
        <View className='indexNumberTitle'>输入编码观看视频</View>
        <View className='indexNumberBody'>
          <Text className='indexNumberBodyBox indexNumberBodyBox1'>
            {this.state.videoNumberValue.slice(0, 1)}
          </Text>
          <Text className='indexNumberBodyBox indexNumberBodyBox2'>
            {this.state.videoNumberValue.slice(1, 2)}
          </Text>
          <Text className='indexNumberBodyBox indexNumberBodyBox3'>
            {this.state.videoNumberValue.slice(2, 3)}
          </Text>
          <Text className='indexNumberBodyBox indexNumberBodyBox4'>
            {this.state.videoNumberValue.slice(3, 4)}
          </Text>
          <Text className='indexNumberBodyBox indexNumberBodyBox5'>
            {this.state.videoNumberValue.slice(4, 5)}
          </Text>
          <Input
            className='indexNumberContent'
            type='number'
            maxLength='5'
            onInput={this.handleInput.bind(this)}
            value={this.state.videoNumberValue}
          />
          <Button
            className='indexNumberButton'
            onClick={this.getVideoDetails.bind(this)}
          >
            查询
          </Button>
        </View>
        <Curtain content='请输入正确编号' onRef={this.onRef.bind(this)} />
      </View>
    )
  }
}
