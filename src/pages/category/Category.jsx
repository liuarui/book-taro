import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtMessage } from 'taro-ui'
import './Category.scss'
import Request from '../../utils/request'
// 公有组件引入
import SearchBox from '../../component/searchBox/searchBox'
// 私有组件引入
import BottomNav from '../../component/BottomNav/BottomNav'
import CategoryCard from './_compenent/CategoryCard'

export default class Category extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      category: [
        { id: 1, desc: 'demoname' },
      ], // 请求回来的数据
      categoryBook: [
        { id: 1, name: 'demoname', coverPath: 'demoData' },
        { id: 2, name: 'demoname', coverPath: 'demoData' }
      ]
    }
  }
  componentWillMount() {
    // 请求所有分类
    Request.reqHC('category', null, 'GET')
      .then(res => {
        // 处理重定向302问题
        if (res.data.value.length > 300) {
          Taro.atMessage({
            message: `获取分类信息失败，请检查登陆状态或网络连接`,
            type: 'error'
          })
        } else {
          this.setState(
            {
              category: res.data.value
            },
            () => {
              // 请求分类下所有图书
              Request.reqHC(
                `books?categoryId=${
                  this.state.category[this.state.current].id
                }`,
                null,
                'GET'
              ).then(value => {
                this.setState({
                  categoryBook: value.data.value
                })
                Taro.atMessage({
                  message: `获取分类信息成功`,
                  type: 'success'
                })
              })
            }
          )
        }
      })
      .catch(() => {
        Taro.atMessage({
          message: `获取分类信息失败，请检查登陆状态或网络连接`,
          type: 'error'
        })
      })
  }
  config = {
    navigationBarTitleText: '图书'
  }
  // 更换页面逻辑实现
  handleClick(value) {
    this.setState({
      current: value
    })
    // 保证实时获取到当前目录id
    this.forceUpdate()
    Request.reqHC(
      `books?categoryId=${this.state.category[this.state.current].id}`,
      null,
      'GET'
    )
      .then(res => {
        this.setState({
          categoryBook: res.data.value
        })
      })
      .catch(() => {
        Taro.atMessage({
          message: `获取分类信息失败，请检查登陆状态或网络连接`,
          type: 'error'
        })
      })
  }
  render() {
    return (
      <View className='Category'>
        <AtMessage />
        <SearchBox jumpUrl='/pages/category/searchPage/searchPage' />
        <AtTabs
          current={this.state.current}
          scroll
          height='750px'
          tabDirection='vertical'
          tabList={this.state.category.map(value => {
            return {
              title: value.desc
            }
          })}
          onClick={this.handleClick.bind(this)}
        >
          {this.state.category.map((value, index) => {
            return (
              <AtTabsPane
                tabDirection='vertical'
                current={this.state.current}
                index={index}
                key={value.bookId}
              >
                <View style='height: 750px'>
                  {this.state.categoryBook.map(cateIndex => {
                    // 请求回来的数据块
                    return (
                      <CategoryCard
                        key={cateIndex.name}
                        bookName={cateIndex.name}
                        bookId={cateIndex.id}
                        imageUrl={cateIndex.coverPath}
                      />
                    )
                  })}
                </View>
              </AtTabsPane>
            )
          })}
        </AtTabs>
        <BottomNav pageNumber={1} />
      </View>
    )
  }
}
