import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './indexBookCommend.scss'
import bookImage from '../../../images/bookDetails/book.png'
// import BookBox from '../../../component/bookBox/bookBox'
// 私有组件引入
import BookCommendBodyImage from './BookCommendBodyImage'

export default class IndexBookCommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      length: []
    }
  }
  componentWillMount() {
    // 获取推荐图书详情
    let cookie = Taro.getStorageSync('Cookies')
    Taro.request({
      method: 'GET',
      url: 'http://localhost:8080/recommend',
      data: {
        page: '0', // 当前页数
        size: '6' // 显示最多
      },
      header: { Cookie: cookie, 'content-type': 'application/json' },
      mode: 'cors',
      credentials: 'include',
      success: res => {
        this.setState({
          length: res.data.value
        })
      }
    })
  }
  render() {
    return (
      <View className='indexBookCommendBox'>
        <View className='indexBookCommendTitle'>
          <Text className='indexBookCommendTitleLeft'>图书推荐</Text>
          {/* <Navigator url='/pages/category/Category' className="indexBookCommendTitleRight">查看更多</Navigator> */}
        </View>
        <View className='indexBookCommendBody'>
          {this.state.length.map(item => {
            return (
              <BookCommendBodyImage
                key={item.id}
                bookId={item.id}
                imageUrl={item.coverPath}
                bookName={item.name}
              />
            )
          })}
          <BookCommendBodyImage
            imageUrl={bookImage}
            bookName='儿童文学书籍'
            bookId={1}
          />
        </View>
      </View>
    )
  }
}
