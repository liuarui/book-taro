import Taro, { Component } from "@tarojs/taro";
import { View, Text, Input, Image } from "@tarojs/components";
import './searchBox.scss'
import searchButton from '../../images/serachBox/searchButton.png'
export default class SearchBox extends Component {
  render() {
    return (
      <View className="searchBox">
        <View className="searchBody">
          <Image  src={ searchButton } className="searchButton"/>
          <Input
            className="searchContent"
            type="text"
            maxLength='40'
            placeholder="输入图书，一键查找"
          />
        </View>
      </View>
    )
  }
}
