import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './PersonalCenter.scss'
// 公有组件引入
import BottomNav from '../../component/BottomNav/BottomNav'
// 私有组件引入
// 图片引入
import logo from '../../images/personalCenter/personalCenterLogo.png'

import stateNo from '../../images/personalCenter/stateNo.png'
import stateYes from '../../images/personalCenter/stateYes.png'

import userImage from '../../images/personalCenter/userImage.png'
export default class PersonalCenter extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  toPersonlChild(url,event) {
    Taro.navigateTo({
      url: url
    })
  }
  render () {
    return (
      <View className='personalCenter'>
        <View className='personalCenterTop'>
          <Image 
            className='userImg' src={userImage} 
            onClick={this.toPersonlChild.bind(this,'/pages/personalCenter/personalInfor/personalInfor')}>
          </Image>{/*这里放请求回来的图片*/}
          <Text className='userName'>Eric</Text>{/*这里放请求回来的名字*/}
          {/* 这里直接用判断，从后台请求回来的状态来显示 */}
          {false 
            ? <Image className='userStateImage' src={ stateYes }></Image> 
            :<Image className='userStateImage' src={ stateNo }></Image>
          }
          <Text className={ true ? 'userStateText' : 'userStateText userStateTextGray' }>园长</Text>
          {/* 这里直接用判断，从后台请求回来的状态来显示 */}
          {
            // if(认证未成功)则执行以下逻辑
          true 
          ? <Text 
              className='userRZZ'
              onClick={this.toPersonlChild.bind(this,'/pages/personalCenter/principalApprove/principalApprove')}
            >认证中</Text>
          : <Text 
              className='userQRZ'
              onClick={this.toPersonlChild.bind(this,'/pages/personalCenter/principalApprove/principalApprove')}
            >去认证</Text>
          }
          
          
        </View>
        <View 
          className='personalCenterBody'
          onClick={this.toPersonlChild.bind(this,'/pages/personalCenter/myFavorite/myFavorite')}
        >
          <Image className='personalCenterBodyLogo' src={ logo }></Image>
          <Text className='personalCenterBodyText'>我的收藏</Text>
          <Text className='personalCenterBodyLogo2'>></Text>
        </View>
        <View 
          className='personalCenterBody'
          
          >
          <Image className='personalCenterBodyLogo' src={ logo }></Image>
          <Text className='personalCenterBodyText'>联系客服</Text>
          <Text className='personalCenterBodyLogo2'>></Text>
        </View>
        <View 
          className='personalCenterBody'
          onClick={this.toPersonlChild.bind(this,'/pages/personalCenter/aboutUs/aboutUs')}
        >
          <Image className='personalCenterBodyLogo' src={ logo }></Image>
          <Text className='personalCenterBodyText'>关于我们</Text>
          <Text className='personalCenterBodyLogo2'>></Text>
        </View>
        <View>弹窗块</View>
        <BottomNav pageNumber={ 2 }/>
      </View>
    )
  }
}
