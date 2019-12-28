import Taro, { Component } from '@tarojs/taro'
import { View, Video } from '@tarojs/components'
import './videoDetails.scss'
// 公有组件引入
import DetailsCard from '../../../component/detailsCard/detailsCard'
// 私有组件引入
import Request from '../../../utils/request'
import IndexBookCommend from '../_component/indexBookCommend'
import VideoCatelog from './_component/videoCatelog'

export default class VideoDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: this.$router.params.bookId,
      changeVideoSrc: this.$router.params.changeVideoSrc,
      select: this.$router.params.select ? this.$router.params.select : 1,
      videos: [],
      intro: ''
    }
  }
  componentWillMount() {
    // console.log('视频id为:', this.state.videoId)
    Request.reqHC(`book/${this.state.videoId}`).then(res => {
      // console.log('视频信息请求成功：', res.data.value.videos)
      this.setState({
        videos: res.data.value.videos,
        intro: res.data.value.introduction
      })
    })
  }
  config = {
    navigationBarTitleText: '视频详情'
  }
  render() {
    return (
      <View className='videoDetailsBox'>
        <View className='videoDetailsCore'>
          <Video src={this.state.changeVideoSrc} className='videoControl' />
        </View>
        <DetailsCard title='简介' content={this.state.intro} />
        <VideoCatelog
          title='目录'
          catelog={this.state.videos}
          select={this.state.select}
        />
        <IndexBookCommend size={3} />
      </View>
    )
  }
}
