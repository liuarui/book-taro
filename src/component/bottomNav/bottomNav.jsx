import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './BottomNav.scss'
import { AtTabBar } from 'taro-ui'
// 公有组件引入
// 私有组件引入
export default class BottomNav extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: this.props.pageNumber
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    },() => {
      console.log(this.state.current)
      let toUrl = ''
      if(this.state.current === 0) {
        toUrl = '/pages/index/index'
      } else if(this.state.current === 1) {
        toUrl = '/pages/category/Category'
      }
       else if(this.state.current === 2) {
        toUrl = '/pages/personalCenter/PersonalCenter'
      }
      Taro.redirectTo({
        url: toUrl,
      })
    })
  }
  render () {
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '推荐'},
          { title: '分类'},
          { title: '我的'}
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}
