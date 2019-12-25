import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import image1 from '../../../images/indexSwiper/1.png'
import './indexSwiper.scss'

export default class IndexSwiper extends Component {
  render() {
    return (
      <Swiper
        className='swiperBox'
        autoplay
        interval='3000'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
      >
        <SwiperItem>
          <Image src={image1}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={image1}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={image1}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={image1}></Image>
        </SwiperItem>
      </Swiper>
    )
  }
}
