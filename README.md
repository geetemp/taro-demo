---

---
#### 简介

​	Taro是由京东·凹凸实验室([aotu.io](https://aotu.io/))倾力打造的 多端开发解决方案。使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、RN等）运行的代码。并且它的语法风格是React语法风格，遵循React语法规范，采用React语法一致的组件化思想，使用taro进行开发可以获得和React一致的开发体验。

#### 安装使用

1、使用 npm 或者 yarn 全局安装 Taro 开发工具 `@tarojs/cli`

```javascript
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```

2、创建模板项目

```javascript
$ taro init myApp
```

在创建的过程中，会提醒你是否使用typescript，sass等选项，根据自己的技术站选择即可。

3、安装依赖

```
$ npm install 
```

4、编译项目

```javascript
// 小程序端
$ npm run dev:weapp

// h5端
$ npm run dev:h5
```

在这个步骤，有一个注意点，使用微信开发者工具打开项目的根目录，并需要把`es6转es5` 、`上传代码时样式自动补全`、`上传代码时自动压缩`  三个选项勾掉，要不然会报错。

5、预览项目，编译成功后，在微信开发者工具或浏览器观看项目，会发现只有一个hello word。如果你能成功的看到这个hello word，那么恭喜你，第一步准备工作已经完成了。

#### 目录结构

taro的原始目录结构入下表所示，你可根据实际的情况进行添加。

```javasecipt
├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index页面目录
|   |   |   ├── index.js   index页面逻辑
|   |   |   └── index.css  index页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```

目录结构很清晰，并且如果你之前开发过react项目来说，代码也都不难，几乎和react一样的代码。自己稍微看下也都能看明白。 

#### taro 组件库

为了实现多端代码统一，taro 以 [微信小程序组件库](https://developers.weixin.qq.com/miniprogram/dev/component/) 为标准，结合 `jsx` 语法规范，定制了一套自己的组件库规范[快速入口](https://nervjs.github.io/taro/components.html)。在开发的过程中，尽量使用taro的组件，以免会出现多端不统一的现象。当然，它并不是所有组件的所有功能都支持，如果有不支持的地方，taro都会有说明，大家在开发的过程中注意一下即可。

组件的使用如下所示：

```javascript
import { View, Text, Button } from '@tarojs/components'
 render() {
    return (
 		<Button className="btn-max-w" plain type="primary">按钮</Button>
  	)
  }
```



#### tabbar组件配置

非常简单，和wepy/mpvue一样，在app.js的config对象中添加一个tabBar的字段，并为其配置内容即可。代码如下:

```javascript
tabBar: {
  color: "#626567",           // 默认颜色
    selectedColor: "#2A8CE5",    // 选中的颜色
    backgroundColor: "#FBFBFB",     // 背景色
    borderStyle: "white",
    list: [    // tab数组
    {
        pagePath: "pages/position/index",       // tab对应的页面
        text: "职位",                           // 文字信息
        iconPath: "./asset/images/tabbar/icon-position.png", // 默认的图片
        selectedIconPath: "./asset/images/tabbar/icon-position-active.png" // 选中的图片
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
```

这个里面有一个注意点：pagePath字段对应的页面必须要配在config的pages里面，要不然会报错。

#### 路由跳转

taro参考小程序原生的路由事件，封装了一套自己的api，用法和小程序一样。只是在传参的时候比小程序体验更好，可以通过`$router.params`来获取参数。如下代码所示：

```javascript
// 跳转到目的页面，打开新页面
Taro.navigateTo({
  url: '/pages/page/path/name'
})

// 跳转到目的页面，在当前页面打开
Taro.redirectTo({
  url: '/pages/page/path/name'
})

// 传入参数 id=2&type=test
Taro.navigateTo({
  url: '/pages/page/path/name?id=2&type=test'
})

class C extends Taro.Component {
  componentWillMount () {
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }
}
```

#### 设计稿的尺寸单位

在 Taro 中尺寸单位建议使用 `px`、 `百分比 %`，Taro 默认会对所有单位进行转换。在 Taro 中书写尺寸按照 1:1 的关系来进行书写，即从设计稿上量的长度 `100px`，那么尺寸书写就是 `100px`，当转成微信小程序的时候，尺寸将默认转换为 `100rpx`，当转成H5时将默认转换为以 `rem` 为单位的值。

如果你希望部分 `px` 单位不被转换成 `rpx` 或者 `rem` ，最简单的做法就是在px单位中增加一个大写字母，例如 `Px` 或者 `PX` 这样，则会被转换插件忽略。

结合过往的开发经验，Taro 默认以 `750px` 作为换算尺寸标准，如果设计稿不是以 `750px` 为标准，则需要在项目配置 `config/index.js` 中进行设置，例如设计稿尺寸是 `640px`，则需要修改项目配置 `config/index.js` 中的 `designWidth` 配置为 `640`，如代码所示：

```javascript
const config = {
  projectName: 'taro-demo',
  date: '2018-6-28',
  designWidth: 640,
  ....
}
```

#### 使用iconfont

在使用下载好的静态资源文件的时候总是报错，不起作用。最后没办法，使用了阿里线上的包，把css代码写在了app.less文件里面。taro貌似不支持less的import，代码如下：

```css
// icon-font
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_708567_qixxv2e29cl.eot?t=1528971887418"); /* IE9*/
  src: url("//at.alicdn.com/t/font_708567_qixxv2e29cl.eot?t=1528971887418#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff;charset=utf-8;base64,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")
      format("woff"),
    url("//at.alicdn.com/t/font_708567_qixxv2e29cl.ttf?t=1528971887418")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url("//at.alicdn.com/t/font_708567_qixxv2e29cl.svg?t=1528971887418#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 32px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gongsi00:before {
  content: "\e6f6";
}

.icon-shezhi:before {
  content: "\e604";
}

.icon-activity_fill:before {
  content: "\e6de";
}

.icon-group_fill:before {
  content: "\e6ff";
}

.icon-kefu:before {
  content: "\e67e";
}

.icon-xuewei:before {
  content: "\e6dd";
}
```



#### redux

在 Taro 中可以自由地使用 `React` 生态中非常流行的数据流管理工具 [Redux](http://redux.js.org/) 来解决复杂项目的数据管理问题。而为了更方便地使用 `Redux` ，Taro 提供了与 [react-redux](https://redux.js.org/basics/usage-with-react) API 几乎一致的包 `@tarojs/redux` 来让开发人员获得更加良好的开发体验。

首先请安装 `redux` 、 `@tarojs/redux` 和 `@tarojs/redux-h5`，以及一些需要用到的 `redux` 中间件

```javascript
$ npm install --save redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger
```

然后可以在项目的src目录下面建一个redux目录，redux分别建`actions`、`reducers`、`store`  三个文件夹。

在actions中创建`couter.js` 文件，写如下代码:

```javascript
const UPDATE_COUNT = "UPDATE_COUNT"; // 更新num

/**
 * @description 更新值
 * @param {Number} num 数值
 */
const updateCount = num => ({
  type: UPDATE_COUNT,
  payload: num
});

export const updateCountFunc = num => {
  return dispatch => {
    dispatch(updateCount(num));
  };
};

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [UPDATE_COUNT]: (state, { payload }) => {
    // 更新 num
    return state.merge({
      num: payload
    });
  }
};
```

这个地方我的写法和taro的教程略微不一样，我是把`action handler`放 在了`action`中。在`action handler` 里。

接下来再`reducers`中创建`counter.js`，写如下代码

```javascript
import { createReducer } from "redux-immutablejs";
import { ACTION_HANDLERS } from "../actions/counter"; // 上面提到的action hander
import initState from "../store/initStore";

export default createReducer(initState.counter, ACTION_HANDLERS);
```

接下来再`reducers`中创建`index.js`，写如下代码

```javascript
import { combineReducers } from "redux";
import counter from "./counter";

export default combineReducers({
  counter
});

```

接下来再`store`中创建`index.js`，写如下代码

```javascript
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/index";

const middlewares = [thunkMiddleware, createLogger()];

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}

```

接下来再`store`中创建`initStore.js`，写如下代码

```javascript
/**
 * 直观呈现 整个应用状态结构树 及其 初始值
 */
export default {
  counter: {
    num: 0 //计数器 的初始值
  }
};

```

最后，我们可以在页面（或者组件）中进行使用，我们将通过 `tarojs/redux` 提供的 `connect` 方法将 `redux` 与我们的页面进行连接。

```javascript
import { connect } from "@tarojs/redux";
function mapStateToProps(state) {
  return {
    counter: state.counter.toJS()
  };
}

// 连接
@connect(
  mapStateToProps,
  dispatch => ({
    updateCountFunc(num) {
      dispatch(updateCountFunc(num));
    }
  })
)

// 使用
 const { counter, updateCountFunc } = this.props;
 updateCountFunc(counter.num + 1);

```

#### 开发的过程中的注意点

* 所有的组件均需使用taro的ui 组件库。 
* 样式要有类名，不要直接组件名。因为如果你使用了组件名的话，多端统一
* dist文件夹中有内容的时候，编译会经常报错，解决方案，编译之前把dist删除，配置`package`中做如下配置` "dev:weapp": "rimraf dist && npm run build:weapp -- --watch",`
* less 不支持import，现在只能把全局样式写在app.less中。 

当然，还有一些taro直接给出的开发建议，查看请戳 [戳我戳我](https://nervjs.github.io/taro/best-practice.html)







