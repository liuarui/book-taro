import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './indexSwiper.scss'
import image1 from '../../../images/indexSwiper/1.png'
import image2 from '../../../images/indexSwiper/2.png'
import image3 from '../../../images/indexSwiper/3.png'
import image4 from '../../../images/indexSwiper/4.png'
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
          <Image src={image1}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={image2}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={image3}></Image>
        </SwiperItem>
        <SwiperItem>
          <Image src={image4}></Image>
        </SwiperItem>
      </Swiper>
    )
  }
}