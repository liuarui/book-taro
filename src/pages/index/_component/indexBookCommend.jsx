import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './indexBookCommend.scss'
import bookImage from '../../../images/bookDetails/book.png'
// import BookBox from '../../../component/bookBox/bookBox'
// 私有组件引入
import BookCommendBodyImage from './BookCommendBodyImage'
import Request from '../../../utils/request'

export default class IndexBookCommend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      length: []
    }
  }
  componentWillMount() {
    //   // 获取推荐图书详情
    Request.reqHC(
      'recommend',
      {
        page: '0', // 当前页数
        size: `${this.props.size ? this.props.size : 6}` // 显示最多
      },
      'GET'
    ).then(res => {
      console.log('推荐列表请求成功', res)
      this.setState({
        length: res.data.value
      })
    })
  }
  jumpCategory() {
    Taro.navigateTo({
      url: '/pages/category/Category'
    })
  }
  render() {
    return (
      <View className='indexBookCommendBox'>
        <View className='indexBookCommendTitle'>
          <Text className='indexBookCommendTitleLeft'>图书推荐</Text>
          <Text
            onClick={this.jumpCategory.bind(this)}
            className='indexBookCommendTitleRight'
          >
            查看更多
          </Text>
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
