import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

import "./index.less";

export default class Position extends Component {
  config = {
    navigationBarTitleText: "职位详情"
  };

  componentWillMount() {
    console.log(this.$router.params); // 输出 { id: 2, type: 'test' }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPosDetailClic(e) {
    e.stopPropagation();
    Taro.redirectTo({ url: "/pages/posDesc/index?id=3&type=test" });
  }

  render() {
    return (
      <View className="index">
        <Text>职位详情</Text>
        <Button type="default" onClick={this.onPosDetailClic}>
          继续跳转
        </Button>
      </View>
    );
  }
}
