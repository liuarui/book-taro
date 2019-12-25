import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './searchPage.scss'
// 公有组件引入
import SearchBox from '../../../component/searchBox/searchBox'
// 私有组件引入

export default class SearchPage extends Component {
  config = {
    navigationBarTitleText: '搜索'
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillUnmount() {}

  // componentDidShow() {}

  // componentDidHide() {}

  render() {
    return (
      <View className='Category'>
        <SearchBox />
        123
      </View>
    )
  }
}
