import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './bookDetails.scss'
import imageSrc from '../../images/bookDetails/book.png'
import saveButton from '../../images/bookDetails/saveButton.png'
import sortButton from '../../images/bookDetails/sortButton.png'
// 公有组件引入
import DetailsCard from '../../component/detailsCard/detailsCard'
// 私有组件引入

export default class BookDetails extends Component {

  config = {
    navigationBarTitleText: '图书详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='bookDetailsBox'>
        <View className='bookDetailsCore'>
          <Image src={ imageSrc } className="bookDetailsImage"></Image>
          <View className="bookDetailsCoreRight">
            <View className="bookDetailsName">骑鹅历险记</View>
            <View className="bookDetailsPrize">定价：<Text className='bookDetailsPrizeStyle'>￥152.30</Text></View>
            <View className="bookDetailsMessage bookDetailsMessageFirst">[瑞典] 塞尔玛·拉格洛夫 著</View>
            <View className="bookDetailsMessage">出版社： 浙江文艺出版社</View>
            <View className="bookDetailsMessage">出版时间：2018-04-01</View>
            <View className="bookDetailsMessage">ISBN：9787533952099</View>
          </View>
        </View>
        <DetailsCard title='简介' content='sss'/>
        <DetailsCard title='目录' content='sss'/>
        <View className='bookDetailsBottomNav'>
          <View className='sortButton'>
            <Image src={sortButton} className='sortButtonImage'></Image>
            <Text className='sortButtonText'>分类</Text>
          </View>
          <View className='saveButton'>
            <Image src={saveButton} className='saveButtonImage'></Image>
            <Text className='saveButtonText'>收藏</Text>
          </View>
          <View className='serviceButton'><Text className='serviceButtonText'>联系客服</Text></View>
        </View>
        <View>弹窗块</View>
      </View>
    )
  }
}
