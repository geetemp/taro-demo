import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { updateCountFunc } from "../../redux/actions/counter";
import PositionItem from "../../components/position-item/index";

import "./index.less";

function mapStateToProps(state) {
  return {
    counter: state.counter.toJS()
  };
}

@connect(
  mapStateToProps,
  dispatch => ({
    updateCountFunc(num) {
      dispatch(updateCountFunc(num));
    }
  })
)
export default class Position extends Component {
  config = { navigationBarTitleText: "职位列表" };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPosDetailClick(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: "/pages/posDesc/index?id=2&type=test"
    });
  }
  onPositionClick(value) {
    Taro.showToast({ title: "点击了" + value, icon: "success" });
  }

  addNumer() {
    const { counter, updateCountFunc } = this.props;
    updateCountFunc(counter.num + 1);
  }

  minusNumer() {
    const { counter, updateCountFunc } = this.props;
    updateCountFunc(counter.num - 2);
  }

  render() {
    const positionObj = { positionName: "药物质量研究员药物质量研究员" };
    return (
      <View>
        <Text className="red">职位列表</Text>
        <Button type="default" onClick={this.onPosDetailClick}>
          跳转到职位详情
        </Button>
        <i className="iconfont icon-kefu" />
        <PositionItem
          position={positionObj}
          positionClick={this.onPositionClick.bind(this)}
        />

        <Text className="red">
          redux中counter的值为: {this.props.counter.num}
        </Text>
        <Button type="default" onClick={this.addNumer.bind(this)}>
          加1
        </Button>
        <Button type="default" onClick={this.minusNumer.bind(this)}>
          减2
        </Button>
      </View>
    );
  }
}
