import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./index.less";

// import namedPng from "../../asset/images/user_avastr.png";

export default class PositionItem extends Component {
  positionClick() {
    const { positionClick, position } = this.props;
    positionClick(position.positionName);
  }
  render() {
    return (
      <View className="position-item" onClick={this.positionClick.bind(this)}>
        <View className="item-left">
          <Image
            className="position-logo"
            src={require("../../asset/images/user_avastr.png")}
          />
        </View>
        <View className="item-center">
          <View className="position-name ellipsis-style">
            {this.props.position.positionName}
          </View>
          <View className="company-name ellipsis-style">
            辉瑞制药生化技术有限公司
          </View>
          <View className="location ellipsis-style">苏州|1-3年|本科</View>
        </View>
        <View className="item-right">
          <View className="salary">15k-20k</View>
          <View className="date">刚刚发布</View>
        </View>
      </View>
    );
  }
}
