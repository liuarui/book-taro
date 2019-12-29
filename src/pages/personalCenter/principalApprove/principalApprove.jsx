import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtInput, AtForm, AtImagePicker, AtButton, AtMessage } from 'taro-ui'
import Request from '../../../utils/request'
import './principalApprove.scss'
// 公有组件引入

// 私有组件引入
let imageFlag = false
export default class PrincipalApprove extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      phoneNumber: '',
      authCode: '',
      files: [],
      codeButton: true,
      reCodeTime: 5 //重发倒计时
    }
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange(value) {
    this.setState({
      phoneNumber: value
    })
  }
  onChange(files) {
    this.setState(
      {
        files
      },
      () => {
        // console.log(this.state.files)
      }
    )
    imageFlag = true
  }
  onFail(mes) {
    console.log(mes)
  }
  onImageClick(index, file) {
    console.log(index, file)
  }
  onSubmit() {
    let cookie = Taro.getStorageSync('Cookies')
    // 上传文件
    if (this.state.files.length === 0 || this.state.phoneNumber.length === 0) {
      Taro.atMessage({
        message: `请将信息填写完全后再提交`,
        type: 'error'
      })
    } else {
      Taro.uploadFile({
        url: 'http://101.132.157.78/principal',
        filePath: this.state.files[0].url,
        header: {
          Cookie: cookie
        },
        name: 'license',
        formData: {
          phoneNumber: this.state.phoneNumber
        }
      })
        .then(res => {
          Taro.atMessage({
            message: `提交信息成功`,
            type: 'success'
          })
          Taro.navigateTo({
            url: '/pages/personalCenter/PersonalCenter'
          })
          console.log('请求成功', res)
        })
        .catch(() => {
          Taro.atMessage({
            message: `提交信息失败，请检查网络连接或登陆状态`,
            type: 'error'
          })
        })
    }
  }
  // 认证码逻辑
  getCode() {
    // 更换按钮状态
    this.setState({
      codeButton: false
    })
    Taro.atMessage({
      message: `获取验证码成功`,
      type: 'success'
    })
    let timeOut = setInterval(() => {
      this.setState(
        {
          reCodeTime: this.state.reCodeTime - 1
        },
        () => {
          if (this.state.reCodeTime <= 0) {
            // 倒计时结束重置发送按钮
            clearInterval(timeOut)
            this.setState({
              reCodeTime: 5,
              codeButton: true
            })
          }
        }
      )
    }, 1000)
  }
  config = {
    navigationBarTitleText: '园长认证'
  }

  render() {
    return (
      <View className='principalApprove'>
        <AtMessage />
        <AtForm onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            clear
            name='phoneNumber'
            border={false}
            title='手机号码'
            type='phone'
            placeholder='手机号码'
            value={this.state.phoneNumber}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            clear
            name='authCode'
            title='验证码'
            type='text'
            maxLength='4'
            placeholder='验证码'
            value={this.state.authCode}
            onChange={this.handleChange.bind(this)}
          >
            {this.state.codeButton ? (
              <Button
                className='messageButton'
                onClick={this.getCode.bind(this)}
              >
                获取验证码
              </Button>
            ) : (
              <Button className='messageButton messageButtonGray' disabled>
                已发送({this.state.reCodeTime})
              </Button>
            )}
          </AtInput>
          <AtImagePicker
            files={this.state.files}
            onChange={this.onChange.bind(this)}
            count={3}
            multiple
            length={3}
          />
          <View className={imageFlag ? 'imageTextNone' : 'imageText'}>
            <View>
              <Text className='imageText1'>添加营业执照</Text>
              <Text className='imageText2'>(必填，最多可传3张图片)</Text>
            </View>
            <View className='imageText1'>请上传照片或者拍照取图，方便确认</View>
            <View className='imageText2'>墨秀会确保您的隐私安全</View>
          </View>
          <AtButton formType='submit' className='approveSubmitButton'>
            确定
          </AtButton>
        </AtForm>
      </View>
    )
  }
}
