import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtMessage } from 'taro-ui'
import './PersonalCenter.scss'
// 公有组件引入
import BottomNav from '../../component/BottomNav/BottomNav'
import Curtain from '../../component/Curtain/Curtain'
// 私有组件引入
// 图片引入
import logo from '../../images/personalCenter/personalCenterLogo.png'

import stateNo from '../../images/personalCenter/stateNo.png'
import stateYes from '../../images/personalCenter/stateYes.png'

// 私有方法引入
import Request from '../../utils/request'

export default class PersonalCenter extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      username: '未登录',
      avatarPath: '',
      userState: '-1',
      loginState: true
    }
  }
  componentWillMount() {
    if (this.$router.params.loginState === true) {
      this.setState({
        loginState: true
      })
    }
    // 获取用户名和头像
    Request.reqHC('user', null, 'GET')
      .then(res => {
        console.log('用户名称请求成功')
        this.setState({
          username: res.data.value.username,
          avatarPath: res.data.value.avatarPath
        })
      })
      .catch(() => {
        if (this.state.loginState === false) {
          Taro.atMessage({
            message: `请先登陆后再进行操作`,
            type: 'error'
          })
        } else {
          Taro.atMessage({
            message: `请先登陆后再进行操作`,
            type: 'error'
          })
        }
      })
    // 获取用户认证状态
    Request.reqHC('principal/status', null, 'GET').then(res => {
      console.log('认证状态成功', res.data.value)
      this.setState({
        userState: res.data.value
      })
    })
  }

  toPersonlChild(url, state) {
    if (state === 'save' && this.state.loginState === false) {
      Taro.atMessage({
        message: `请先登陆后再进行操作`,
        type: 'error'
      })
      return
    }
    Taro.navigateTo({
      url: url
    })
  }
  // 联系客服弹窗
  // 获取子组件对象
  onRef(ref) {
    this.child = ref
  }
  getService() {
    this.child.onOpen()
  }
  toOK(state) {
    if (state === 'save' && this.state.loginState === false) {
      Taro.atMessage({
        message: `请先登陆后再进行操作`,
        type: 'error'
      })
      return
    }
    Taro.navigateTo({
      url: '/pages/personalCenter/principalApprove/principalApproveOK'
    })
  }
  toLoginPage() {
    if (this.state.loginState === false || this.state.username === '未登录') {
      Taro.navigateTo({
        url: '/pages/login/userLogin'
      })
    }

    return
  }
  loginOut() {
    Request.reqHC('logout', null, 'GET')
      .then(() => {
        Taro.atMessage({
          message: `退出登陆成功`,
          type: 'success'
        })
        this.setState({
          loginState: false
        })
      })
      .catch(() => {
        Taro.atMessage({
          message: `退出登陆失败，请检查网络连接`,
          type: 'error'
        })
      })
  }
  config = {
    navigationBarTitleText: '我的'
  }
  render() {
    return (
      <View className='personalCenter'>
        <AtMessage />
        <View className='personalCenterTop'>
          <Image
            className='userImg'
            src={this.state.avatarPath}
            onClick={this.toPersonlChild.bind(
              this,
              `/pages/personalCenter/personalInfor/personalInfor?username=${this.state.username}&avatarPath=${this.state.avatarPath}`
            )}
          ></Image>
          <Text className='userName' onClick={this.toLoginPage.bind(this)}>
            {this.state.loginState ? this.state.username : '未登录'}
          </Text>
          {/* 这里直接用判断，从后台请求回来的状态来显示 */}
          {this.state.userState === 1 ? (
            <Image
              className='userStateImage'
              src={stateYes}
              onClick={this.toOK.bind(this, 'save')}
            ></Image>
          ) : (
            <Image className='userStateImage' src={stateNo}></Image>
          )}
          <Text
            className={
              this.state.userState === 1
                ? 'userStateText'
                : 'userStateText userStateTextGray'
            }
          >
            园长
          </Text>
          {/* 这里直接用判断，从后台请求回来的状态来显示 */}
          {this.state.userState === 1 ? null : this.state.userState === 0 ? (
            <Text
              className='userRZZ'
              onClick={this.toPersonlChild.bind(
                this,
                '/pages/personalCenter/principalApprove/principalApprove',
                'save'
              )}
            >
              认证中
            </Text>
          ) : (
            <Text
              className='userQRZ'
              onClick={this.toPersonlChild.bind(
                this,
                '/pages/personalCenter/principalApprove/principalApprove','save'
              )}
            >
              去认证
            </Text>
          )}
        </View>
        <View
          className='personalCenterBody'
          onClick={this.toPersonlChild.bind(
            this,
            '/pages/personalCenter/FavoriteCardList/FavoriteCardList',
            'save'
          )}
        >
          <Image className='personalCenterBodyLogo' src={logo}></Image>
          <Text className='personalCenterBodyText'>我的收藏</Text>
          <Text className='personalCenterBodyLogo2'>&gt;</Text>
        </View>
        <View
          className='personalCenterBody'
          onClick={this.getService.bind(this)}
        >
          <Image className='personalCenterBodyLogo' src={logo}></Image>
          <Text className='personalCenterBodyText'>联系客服</Text>
          <Text className='personalCenterBodyLogo2'>&gt;</Text>
        </View>
        <View
          className='personalCenterBody'
          onClick={this.toPersonlChild.bind(
            this,
            '/pages/personalCenter/aboutUs/aboutUs'
          )}
        >
          <Image className='personalCenterBodyLogo' src={logo}></Image>
          <Text className='personalCenterBodyText'>关于我们</Text>
          <Text className='personalCenterBodyLogo2'>&gt;</Text>
        </View>
        {this.state.username != '未登录' && this.state.loginState === true ? (
          <View
            className='personalCenterBody'
            onClick={this.loginOut.bind(this)}
          >
            <Image className='personalCenterBodyLogo' src={logo}></Image>
            <Text className='personalCenterBodyText'>注销</Text>
            <Text className='personalCenterBodyLogo2'>&gt;</Text>
          </View>
        ) : null}
        {/* 联系客服弹窗 */}
        <Curtain content='123123123115' onRef={this.onRef.bind(this)} />
        <BottomNav pageNumber={2} />
      </View>
    )
  }
}
