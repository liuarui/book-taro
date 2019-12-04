import Taro, { Component } from "@tarojs/taro";
import { View, Text, Input, Image } from "@tarojs/components";
import './detailsCard.scss'
export default class DetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <View className="detailsCardBox">
        <View className="detailsCardTitleBox">
          <View className="detailsCardTitleLogo"></View>
          <View className="detailsCardTitleText">{ this.props.title }</View>
        </View>
        <View className="detailsCardContent">{ this.props.content }
        //TODO下拉效果</View>
      </View>
    )
  }
}
