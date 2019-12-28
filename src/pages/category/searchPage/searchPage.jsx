import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import './searchPage.scss'
// 公有组件引入
import IndexBookCommend from '../../index/_component/indexBookCommend'
// 私有组件引入
import SearchResultCard from './_compenent/SearchResultCard'
import searchButton from '../../../images/serachBox/searchButton.png'
import Request from '../../../utils/request'
import notFound from '../../../images/searchPage/notFound.png'

export default class SearchPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      searchResult: []
    }
  }
  componentWillMount() {
    Request.reqHC(`search?keyword=`).then(res => {
      this.setState({
        searchResult: res.data.value
      })
      // this.forceUpdate()
    })
  }
  handleInput(event) {
    this.setState(
      {
        value: event.target.value
      },
      () => {
        Request.reqHC(`search?keyword=${this.state.value}`).then(res => {
          this.setState({
            searchResult: res.data.value
          })
          this.forceUpdate()
          console.log(this.state.searchResult.length)
        })
      }
    )
  }
  config = {
    navigationBarTitleText: '搜索'
  }
  render() {
    return (
      <View className='Category'>
        <View className='searchBox'>
          <View className='searchBody'>
            <Image src={searchButton} className='searchButton' />
            <Input
              className='searchContent'
              type='text'
              maxLength='40'
              placeholder='输入图书'
              value={this.state.value}
              onInput={this.handleInput.bind(this)}
            />
          </View>
        </View>
        {this.state.searchResult.length != 0 ? (
          <View>
            {this.state.searchResult.map(value => {
              return (
                <SearchResultCard
                  key={value.id}
                  bookId={value.id}
                  imagePath={value.coverPath}
                  bookName={value.name}
                  bookPrice={value.price}
                  bookAuthor={value.author}
                  bookPublisher={value.publisher}
                  bookPublishTime={value.publishTime}
                  bookIsbn={value.isbn}
                />
              )
            })}
          </View>
        ) : (
          <View>
            <Image src={notFound} className='serachNotFound'></Image>
            <IndexBookCommend />
          </View>
        )}
      </View>
    )
  }
}
