import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Category.scss'
import { AtTabs, AtTabsPane } from 'taro-ui'
// 公有组件引入
import SearchBox from '../../component/searchBox/searchBox'
// 私有组件引入
import BottomNav from '../../component/BottomNav/BottomNav'

export default class Category extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  config = {
    navigationBarTitleText: '图书'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <View className='Category'>
        <SearchBox/>
        <AtTabs
          current={this.state.current}
          scroll
          height='200px'
          tabDirection='vertical'
          tabList={[
            { title: '图书1' },
            { title: '图书2' },
            { title: '图书3' },
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
        <BottomNav pageNumber={ 1 }/>
      </View>
    )
  }
}
