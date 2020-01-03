import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtMessage } from 'taro-ui'
import './bookDetails.scss'
import saveButtonTrue from '../../../images/bookDetails/saveButtonTrue.png'
import saveButtonFalse from '../../../images/bookDetails/saveButtonFalse.png'
import sortButton from '../../../images/bookDetails/sortButton.png'
// 公有组件引入
import DetailsCard from '../../../component/detailsCard/detailsCard'
import Curtain from '../../../component/Curtain/Curtain'
// 私有组件引入
import Request from '../../../utils/request'
import VideoCatelog from './_component/videoCatelog'

export default class BookDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookId: this.$router.params.bookId,
      bookName: '骑鹅历险记',
      imagePath: '../../../images/bookDetails/book.png',
      bookPrice: '152.30',
      bookAuthor: '[瑞典] 塞尔玛·拉格洛夫 著',
      bookPublisher: '人民邮电出版社',
      bookPublishTime: '出版时间：2018-04-01',
      bookIsbn: '9787533952099',
      bookIntroduction: '我是默认简介',
      bookStar: false,
      videos: []
      // videoSrc: ''
    }
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  componentWillMount() {
    Request.reqHC(`book/${this.state.bookId}`, null, 'GET')
      .then(res => {
        Taro.atMessage({
          message: `图书信息请求成功书名：${res.data.value.name}`,
          type: 'success'
        })
        this.setState({
          bookName: res.data.value.name,
          imagePath: res.data.value.coverPath,
          bookPrice: res.data.value.price,
          bookAuthor: res.data.value.author,
          bookPublisher: res.data.value.publisher,
          bookPublishTime: res.data.value.publishTime,
          bookIsbn: res.data.value.isbn,
          bookIntroduction: res.data.value.introduction,
          bookStar: res.data.value.star,
          videos: res.data.value.videos
        })
      })
      .catch(() => {
        Taro.atMessage({
          message: `获取图书详情信息失败，请检查登录状态或网络连接`,
          type: 'error'
        })
      })
  }
  config = {
    navigationBarTitleText: '图书详情'
  }
  // 前往分类
  toCategory() {
    Taro.redirectTo({
      url: '/pages/category/Category'
    })
  }
  // 收藏逻辑
  starBook() {
    Request.reqHC(`star?bookId=${this.state.bookId}`)
      .then(res => {
        this.setState({
          bookStar: res.data.value
        })
        Taro.atMessage({
          message: `收藏成功！`,
          type: 'success'
        })
      })
      .catch(() => {
        Taro.atMessage({
          message: `收藏操作失败，请检查登录状态或网络连接`,
          type: 'error'
        })
      })
  }
  // 联系客服弹窗
  // 获取子组件对象
  onRef(ref) {
    this.child = ref
  }
  getService() {
    this.child.onOpen()
  }
  // 跳转主页按钮
  toIndex(){
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  }
  // // 获取视频目录子组件状态
  // onRefCatelog(ref) {
  //   this.childCatelog = ref
  // }
  // getVideoSrc() {
  //   this.setState({
  //     videoSrc:
  //   })console.log(this.childCatelog.changeVideoSrc())
  // }
  render() {
    return (
      <View className='bookDetailsBox'>
        <AtMessage />
        <View className='bookDetailsCore'>
          <Image
            src={this.state.imagePath}
            className='bookDetailsImage'
          ></Image>
          <View className='bookDetailsCoreRight'>
            <View className='bookDetailsName'>{this.state.bookName}</View>
            <View className='bookDetailsPrize'>
              定价：
              <Text className='bookDetailsPrizeStyle'>
                ￥{this.state.bookPrice}
              </Text>
            </View>
            <View className='bookDetailsMessage bookDetailsMessageFirst'>
              {this.state.bookAuthor}
            </View>
            <View className='bookDetailsMessage'>
              {this.state.bookPublisher}
            </View>
            <View className='bookDetailsMessage'>
              {this.state.bookPublishTime}
            </View>
            <View className='bookDetailsMessage'>
              ISBN：{this.state.bookIsbn}
            </View>
          </View>
        </View>
        <DetailsCard title='简介' content={this.state.bookIntroduction} />
        <VideoCatelog title='目录' catelog={this.state.videos} />
        <View className='bookDetailsBottomNav'>
          <View className='sortButton' onClick={this.toCategory}>
            <Image src={sortButton} className='sortButtonImage'></Image>
            <Text className='sortButtonText'>分类</Text>
          </View>
          <View className='saveButton' onClick={this.starBook.bind(this)}>
            {this.state.bookStar ? (
              <Image src={saveButtonTrue} className='saveButtonImage'></Image>
            ) : (
              <Image src={saveButtonFalse} className='saveButtonImage'></Image>
            )}
            <Text className='saveButtonText'>收藏</Text>
          </View>
          <View className='serviceButton'>
            <Text
              className='serviceButtonText'
              onClick={this.getService.bind(this)}
            >
              联系客服
            </Text>
          </View>
        </View>
        <View className='indexButton' onClick={this.toIndex.bind(this)}>首页</View>
        {/* 联系客服弹窗 */}
        <Curtain content='123123123115' onRef={this.onRef.bind(this)} />
      </View>
    )
  }
}
