import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Video  } from '@tarojs/components'
import './videoDetails.scss'
// 公有组件引入
import DetailsCard from '../../../component/detailsCard/detailsCard'
// 私有组件引入
// import cd1 from '../../images/cd1.mp4'
export default class VideoDetails extends Component {

  config = {
    navigationBarTitleText: '视频详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='videoDetailsBox'>
        <View className='videoDetailsCore'>
          <Video src='www.baidu.com' className='videoControl' />
        </View>
        <DetailsCard title='简介' content='sss'/>
        <DetailsCard title='目录' content='sss'/>
        <DetailsCard title='图书推荐' content='sss'/>
       
      </View>
    )
  }
}
