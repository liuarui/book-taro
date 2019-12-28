import Taro, { Component } from '@tarojs/taro'
import { View, Input, Image } from '@tarojs/components'
import './searchBox.scss'
import searchButton from '../../../../images/serachBox/searchButton.png'
import Request from '../../../../utils/request'

export default class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  handleInput(event) {
    this.setState(
      {
        value: event.target.value
      },
      () => {
        console.log(this.state.value)
        Request.reqHC(`search?keyword=${this.state.value}`)
      }
    )
  }
  render() {
    return (
      <View className='searchBox'>
        <View className='searchBody'>
          <Image src={searchButton} className='searchButton' />
          <Input
            className='searchContent'
            type='text'
            maxLength='40'
            placeholder='输入图书'
            value={this.state.value}
            onInput={this.handleInput.bind(this)}
          />
        </View>
      </View>
    )
  }
}
