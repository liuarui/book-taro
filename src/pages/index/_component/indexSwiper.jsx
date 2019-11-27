import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View, Swiper, SwiperItem } from '@tarojs/components'
import './indexSwiper.scss'
export default class IndexSwiper extends Component {
  render () {
    return (
      <Swiper
        className='swiperBox'
        autoplay
        interval='3000'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-4'>4</View>
        </SwiperItem>
      </Swiper>
    )
  }
}