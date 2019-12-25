import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCurtain } from 'taro-ui'
import './Curtain.scss'

export default class Curtain extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      isOpened: false
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  onOpen() {
    this.setState({
      isOpened: true
    })
  }
  onClose() {
    this.setState({
      isOpened: false
    })
  }
  render() {
    return (
      <View>
        <AtCurtain
          isOpened={this.state.isOpened}
          onClose={this.onClose.bind(this)}
        >
          <View className='curtainText'>{this.props.content}</View>
        </AtCurtain>
      </View>
    )
  }
}
