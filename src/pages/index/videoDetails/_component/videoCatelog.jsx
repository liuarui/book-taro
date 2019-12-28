import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './videoCatelog.scss'

export default class VideoCatelog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFlag: false,
      select: 1,
      changeVideoSrc: 'http://www.baidu.com'
    }
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
        changeVideoSrc: this.props.catelog[index].videoPath
      },
      () => {
        console.log(123, this.state.select)
        console.log(456, this.state.changeVideoSrc)
        // Taro.navigateTo({
        //   url: `/pages/index/videoDetails/videoDetails?bookId=${this.props.catelog[0].bookId}&changeVideoSrc=${this.state.changeVideoSrc}&select=${this.state.select}`
        // })
      }
    )
  }
  render() {
    return (
      <View className='detailsCardBox'>
        <View className='detailsCardTitleBox'>
          <View className='detailsCardTitleLogo'></View>
          <View className='detailsCardTitleText'>{this.props.title}</View>
        </View>
        <View className='detailsCardContent'>
          <View
            className={
              this.state.showFlag
                ? 'detailsCardContentTextShow'
                : 'detailsCardContentText'
            }
          >
            {this.props.catelog.map((value, index) => {
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
            `&gt;`
          </View>
        </View>
      </View>
    )
  }
}
