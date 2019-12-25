import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './bookDetails.scss'
import saveButtonTrue from '../../../images/bookDetails/saveButtonTrue.png'
import saveButtonFalse from '../../../images/bookDetails/saveButtonFalse.png'
import sortButton from '../../../images/bookDetails/sortButton.png'
// 公有组件引入
import DetailsCard from '../../../component/detailsCard/detailsCard'
import Curtain from '../../../component/Curtain/Curtain'
// 私有组件引入

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
      bookStar: false
    }
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  componentWillMount() {
    let cookie = Taro.getStorageSync('Cookies')
    console.log(this.state.bookId) // 路由传过来的图书id
    Taro.request({
      method: 'POST',
      url: `http://localhost:8080/book/${this.state.bookId}`,
      mode: 'cors',
      header: { Cookie: cookie, 'content-type': 'application/json' },
      credentials: 'include',
      success: res => {
        this.setState({
          bookName: res.name,
          imagePath: res.coverPath,
          bookPrice: res.price,
          bookAuthor: res.author,
          bookPublisher: res.publisher,
          bookPublishTime: res.publishTime,
          bookIsbn: res.isbn,
          bookIntroduction: res.introduction,
          bookStar: res.star
        })
      }
    }).catch(() => {
      console.log('图书信息未存在')
    })
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
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
  starBook() {}
  render() {
    return (
      <View className='bookDetailsBox'>
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
        <DetailsCard title='目录' content='我是目录' />
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
            <Text className='serviceButtonText'>联系客服</Text>
          </View>
        </View>
        {/* 联系客服弹窗 */}
        <Curtain content='123123123115' />
      </View>
    )
  }
}
