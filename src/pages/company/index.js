import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

export default class Position extends Component {
  config = {
    navigationBarTitleText: "公司列表"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>公司列表</Text>
      </View>
    );
  }
}
