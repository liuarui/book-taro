import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtInput, AtForm, AtImagePicker, AtButton } from "taro-ui";
import "./principalApprove.scss";
// 公有组件引入

// 私有组件引入
let imageFlag = false
export default class PrincipalApprove extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      phoneNumber: "",
      authCode: "",
      email: "",
      files: [
      ]
    };
  }
  
  handleChange(value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value;
  }
  onChange(files) {
    this.setState({
      files
    })
    imageFlag = true
  }
  onFail(mes) {
    console.log(mes);
  }
  onImageClick(index, file) {
    console.log(index, file);
  }
  onSubmit (event) {
    console.log(event)
  }
  config = {
    navigationBarTitleText: "园长认证"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="principalApprove">
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
          <AtInput
            clear
            name="phoneNumber"
            border={false}
            title="手机号码"
            type="phone"
            placeholder="手机号码"
            value={this.state.phoneNumber}
            onChange={this.handleChange.bind(this)}
          />
          <AtInput
            clear
            name="authCode"
            title="验证码"
            type="text"
            maxLength="4"
            placeholder="验证码"
            value={this.state.authCode}
            onChange={this.handleChange.bind(this)}
          >
            {false ? (
              <Button className="messageButton">获取验证码</Button>
            ) : (
              <Button className="messageButton messageButtonGray" disabled>
                已发送
              </Button>
            )}
          </AtInput>
          <AtInput
            clear
            name="email"
            title="邮箱号"
            type="text"
            maxLength="30"
            placeholder="邮箱号"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
          ></AtInput>
          <AtImagePicker
            files={this.state.files}
            onChange={this.onChange.bind(this)}
            count={3}
            multiple={true}
            length={3}
          />
          <View className={imageFlag ? 'imageTextNone' : 'imageText'}>
            <View><Text className='imageText1'>添加营业执照</Text><Text className='imageText2'>(必填，最多可传3张图片)</Text></View>
            <View className='imageText1'>请上传照片或者拍照取图，方便确认</View>
            <View  className='imageText2'>墨秀会确保您的隐私安全</View>
          </View>
          <AtButton formType='submit' className='approveSubmitButton'>确定</AtButton>
        </AtForm>
      </View>
    );
  }
}
