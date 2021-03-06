import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './personalInfor.scss'
// 公有组件引入

export default class PersonalInfor extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  config = {
    navigationBarTitleText: '个人信息'
  }

  render() {
    return (
      <View className='personalInfor'>
        <View className='headerImageBox'>
          <Text className='imageTitle'>头像</Text>
          <Image
            src={this.$router.params.avatarPath}
            className='imageContent'
          ></Image>
        </View>
        <View className='nameBox'>
          <Text className='nameTitle'>昵称</Text>
          <Text className='nameContent'>
            {this.$router.params.username
              ? this.$router.params.username
              : 'Eric'}
          </Text>
        </View>
      </View>
    )
  }
}
