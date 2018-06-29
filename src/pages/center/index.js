import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

export default class Center extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>个人中心</Text>
      </View>
    );
  }
}
