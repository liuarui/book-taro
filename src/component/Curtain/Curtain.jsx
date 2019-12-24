import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtCurtain,AtButton } from 'taro-ui'
import './Curtain.scss'

export default class TagPage extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
    }
  }
  handleChange () {
    this.setState({
      isOpened: true
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }
  render () {
    return (
      <View>
      <AtCurtain
        isOpened={this.state.isOpened}
        onClose={this.onClose.bind(this)}
      >
        <View className='curtainText'>{this.props.content}</View>
      </AtCurtain>
      <AtButton
        onClick={this.handleChange.bind(this)}
      >
        右上关闭幕帘
      </AtButton>
      </View>
    )
  }
}