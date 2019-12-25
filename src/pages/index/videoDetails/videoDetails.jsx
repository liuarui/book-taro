import Taro, { Component } from '@tarojs/taro'
import { View, Video } from '@tarojs/components'
import './videoDetails.scss'
// 公有组件引入
import DetailsCard from '../../../component/detailsCard/detailsCard'
// 私有组件引入
import Request from '../../../utils/request'

export default class VideoDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: this.$router.params.videoId
    }
  }

  componentWillMount() {
    console.log('视频id为:',this.state.videoId)
    Request.reqHC(`book/${this.state.videoId}`)
      .then(res => {
        console.log('视频信息请求成功：', res.data.value.videos)
        // this.setState({

        // })
      })
      
  }

  // componentDidMount() {}

  // componentWillUnmount() {}

  // componentDidShow() {}

  // componentDidHide() {}
  config = {
    navigationBarTitleText: '视频详情'
  }
  render() {
    return (
      <View className='videoDetailsBox'>
        <View className='videoDetailsCore'>
          <Video src='www.baidu.com' className='videoControl' />
        </View>
        <DetailsCard title='简介' content='sss' />
        <DetailsCard title='目录' content='sss' />
        <DetailsCard title='图书推荐' content='sss' />
      </View>
    )
  }
}
