import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './detailsCard.scss'

export default class DetailsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showFlag: false
    }
  }
  showDetailsContent() {
    this.setState({
      showFlag: !this.state.showFlag
    })
    console.log(this.state.showFlag)
  }
  render() {
    return (
      <View className='detailsCardBox'>
        <View className='detailsCardTitleBox'>
          <View className='detailsCardTitleLogo'></View>
          <View className='detailsCardTitleText'>{this.props.title}</View>
        </View>
        <View className='detailsCardContent'>
          <View
            className={
              this.state.showFlag
                ? 'detailsCardContentTextShow'
                : 'detailsCardContentText'
            }
          >
            {this.props.content}
            小男孩 小土地神 三月二十日 星期天 从前有个小男孩，
            差不多十四岁，身材细长，亚麻色头发。他没多大能耐：最乐意的就是睡觉和吃
            饭，其次就是调皮捣蛋。
            这是个星期天的早晨，小男孩的父母正穿衣打扮要去教堂。小男
          </View>
          <View
            className={
              this.state.showFlag
                ? 'detailsCardContentButtonDown'
                : 'detailsCardContentButton'
            }
            onClick={this.showDetailsContent.bind(this)}
          >
            `&gt;`
          </View>
        </View>
      </View>
    )
  }
}
