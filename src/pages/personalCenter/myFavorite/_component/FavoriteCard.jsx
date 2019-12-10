import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import './FavoriteCard.scss'

// let boxSize = {
//   width: '248',
//   height: '403',
//   border: '1px solid rgba(245,245,245,1)'
// }
export default class FavoriteCard extends Component {
  render() {
    return (
      // 这里需要调用接口请求后端数据，进行渲染 TODO
      <View className="favoriteCardBox">
        <Image className='favoriteCardImage'></Image>
        <View className='favoriteCardRight'>
          <View className='favoriteCardTitle'></View>
          <View className='favoriteCardAut'></View>
          <View className='favoriteCardIntro'></View>
        </View>
        
      </View>
    )
  }
}
