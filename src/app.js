import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import configStore from "./redux/store";
const store = configStore();

import Position from "./pages/position/index";

import "./app.less";

class App extends Component {
  config = {
    pages: [
      "pages/position/index",
      "pages/center/index",
      "pages/company/index",
      "pages/posDesc/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#0068C4",
      navigationBarTitleText: "医脉同道",
      navigationBarTextStyle: "white",
      enablePullDownRefresh: true
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/position/index",
          text: "职位",
          iconPath: "./asset/images/tabbar/icon-position.png",
          selectedIconPath: "./asset/images/tabbar/icon-position-active.png"
        },
        {
          pagePath: "pages/company/index",
          text: "公司",
          iconPath: "./asset/images/tabbar/icon-enterprise.png",
          selectedIconPath: "./asset/images/tabbar/icon-enterprise-active.png"
        },
        {
          pagePath: "pages/center/index",
          text: "个人中心",
          iconPath: "./asset/images/tabbar/icon-person.png",
          selectedIconPath: "./asset/images/tabbar/icon-person-active.png"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return (
      <Provider store={store}>
        <Position />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
