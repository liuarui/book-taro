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
