import Taro, { Component } from '@tarojs/taro'
import { View, Video, Text } from '@tarojs/components'
import { AtMessage } from 'taro-ui'
import './videoDetails.scss'
// 公有组件引入
import DetailsCard from '../../../component/detailsCard/detailsCard'
// 私有组件引入
import Request from '../../../utils/request'
import IndexBookCommend from '../_component/indexBookCommend'
// import VideoCatelog from './_component/videoCatelog'

export default class VideoDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: this.$router.params.bookId,
      changeVideoSrc: this.$router.params.changeVideoSrc,
      // select: this.$router.params.select ? this.$router.params.select : 1,
      videos: [],
      intro: '',
      showFlag: false,
      select: 1,
      changeVideoSrc: 'http://www.baidu.com'
    }
  }
  componentWillMount() {
    // console.log('视频id为:', this.state.videoId)
    Request.reqHC(`book/${this.state.videoId}`)
      .then(res => {
        // console.log('视频信息请求成功：', res.data.value.videos)
        this.setState({
          videos: res.data.value.videos,
          intro: res.data.value.introduction
        })
      })
      .catch(() => {
        Taro.atMessage({
          message: `获取信息失败，请检查登录状态或网络连接`,
          type: 'error'
        })
      })
    this.forceUpdate()
  }
  showDetailsContent() {
    this.setState({
      showFlag: !this.state.showFlag
    })
  }

  openVideoSrc(index) {
    this.setState(
      {
        select: index + 1,
        changeVideoSrc: this.state.videos[index].videoPath
      },
      () => {
        console.log('章节', this.state.select)
        console.log('视频地址', this.state.changeVideoSrc)
        this.forceUpdate()
      }
    )
  }
  config = {
    navigationBarTitleText: '视频详情'
  }
  render() {
    return (
      <View className='videoDetailsBox'>
        <AtMessage />
        <View className='videoDetailsCore'>
          <Video src={this.state.changeVideoSrc} className='videoControl' />
        </View>
        <DetailsCard title='简介' content={this.state.intro} />
        <View className='detailsCardBox'>
          <View className='detailsCardTitleBox'>
            <View className='detailsCardTitleLogo'></View>
            <View className='detailsCardTitleText'>目录</View>
          </View>
          <View className='detailsCardContent'>
            <View
              className={
                this.state.showFlag
                  ? 'detailsCardContentTextShow'
                  : 'detailsCardContentText'
              }
            >
              {this.state.videos.map((value, index) => {
                return this.state.select - 1 === index ? (
                  <Text
                    key={value}
                    className='chapterBox chapterBoxSelect'
                    onClick={this.openVideoSrc.bind(this, index)}
                  >
                    {value.chapterTitle}
                  </Text>
                ) : (
                  <Text
                    key={value}
                    className='chapterBox'
                    onClick={this.openVideoSrc.bind(this, index)}
                  >
                    {value.chapterTitle}
                  </Text>
                )
              })}
            </View>
            <View
              className={
                this.state.showFlag
                  ? 'detailsCardContentButtonDown'
                  : 'detailsCardContentButton'
              }
              onClick={this.showDetailsContent.bind(this)}
            >
              &gt;
            </View>
          </View>
        </View>
        <IndexBookCommend size={3} />
      </View>
    )
  }
}
