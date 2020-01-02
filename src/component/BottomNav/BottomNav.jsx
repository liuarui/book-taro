import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import './BottomNav.scss'

// 公有组件引入
// 私有组件引入
export default class BottomNav extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: this.props.pageNumber
    }
  }
  handleClick(value) {
    this.setState(
      {
        current: value
      },
      () => {
        console.log(this.state.current)
        let toUrl = ''
        if (this.state.current === 0) {
          toUrl = '/pages/index/index'
        } else if (this.state.current === 1) {
          toUrl = '/pages/category/Category'
        } else if (this.state.current === 2) {
          toUrl = '/pages/personalCenter/PersonalCenter'
        }
        Taro.redirectTo({
          url: toUrl
        })
      }
    )
  }
  render() {
    return (
      <AtTabBar
        fixed
        tabList={
                [{ title: '推荐', image: 'https://s2.ax1x.com/2020/01/02/lYdLJf.png', selectedImage: 'https://s2.ax1x.com/2020/01/02/lYdTeA.png',color:'#000000',selectedColor:'#EABE10'},
                { title: '分类' , image: 'https://s2.ax1x.com/2020/01/02/lYd7dI.png', selectedImage: 'https://s2.ax1x.com/2020/01/02/lYdILd.png',color:'#000000',selectedColor:'#EABE10'}, 
                { title: '我的' , image: 'https://s2.ax1x.com/2020/01/02/lYd5sH.png', selectedImage: 'https://s2.ax1x.com/2020/01/02/lYdOW8.png',color:'#000000',selectedColor:'#EABE10'}
               ]
          }
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}
