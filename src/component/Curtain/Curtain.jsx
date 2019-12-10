import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtCurtain,AtButton } from 'taro-ui'
import curtainPng from '../../../assets/images/curtain.png'
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
      <AtCurtain
        isOpened={this.state.isOpened}
        onClose={this.onClose.bind(this)}
      >
        <Image
          style='width:100%;height:250px'
          src={curtainPng}
        />
      </AtCurtain>
      <AtButton
        onClick={this.handleChange.bind(this)}>
        右上关闭幕帘
      </AtButton>
    )
  }
}