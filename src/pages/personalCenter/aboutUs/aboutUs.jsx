import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './aboutUs.scss'
// 公有组件引入

// 私有组件引入

import aboutUs from '../../../images/personalCenter/aboutUs/aboutUs.png'

export default class AboutUs extends Component {
  config = {
    navigationBarTitleText: '关于我们'
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillUnmount() {}

  // componentDidShow() {}

  // componentDidHide() {}

  render() {
    return (
      <View className='aboutUsBox'>
        <View className='aboutUsTitle'>
          湖北墨秀文化传媒有限公司,创立于湖北武汉市,是一家从事教育图书策划、编辑、出版、销售发行的文化传播公司。
          本公司自主研发,自主制造,自主营销,研发体系,制造以西,营销.
        </View>
        <Image className='aboutUsImage' src={aboutUs}></Image>
        <View className='aboutUsIntro'>
          地址：武汉市江汉区建行建行建行附近{' '}
        </View>
        <View className='aboutUsIntro'>
          WuHan Arier Clinic Co , Ltd WuHan Arier{' '}
        </View>
        <View className='aboutUsIntro'>Clinic Co , Ltd</View>
        <View className='aboutUsIntro'>WuHan Arier Clinic Co ,</View>
        <View className='aboutUsIntro'>电话（Tel）：17771899999 </View>
        <View className='aboutUsIntro'>座机：027—85333333 </View>
        <View className='aboutUsIntro'>邮箱：CRM@shisdhdm.cn </View>
        <View className='aboutUsIntro'>邮编：430000</View>
      </View>
    )
  }
}
