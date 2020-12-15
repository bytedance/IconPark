# IconPark

<div align="center">
 <a href="http://iconpark.bytedance.com/official">
    <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/logo.svg" width="384" height="96">
</a>
</div>

[English](README.md) | 简体中文

## 介绍
IconPark提供了超过1400个高质量图标，并且提供了一个界面来帮你定制图标。与使用各种SVG源文件来达到换肤效果的方案不同的是，我们实现了一种创新性的技术，
通过改变一个SVG文件的属性来变换出多种主题。并且支持跨平台导出多种图标代码库，方便您在代码中以组件的形式按需引用，比如 [`react-icons`](./packages/react/README.md), [`vue-icons`](./packages/vue/README.md) and [`svg-icons`](./packages/vue/README.md).
所以不管您是设计师还是开发者，都可以在您的项目中去使用IconPark.

<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/icon-dance.gif"></ifram>

### 代码库
#### 多种代码包
> 可以在`packages`文件夹下面找到，你可以应用在你的React、Vue、小程序等不同类型项目中使用
  - [React component](./packages/react/README.md) 
  - [Vue Component for Vue3.0](./packages/vue-next/README.md) 
  - [Vue Component for old Vue2.0](./packages/vue/README.md) 
  - [Pure SVG string](./packages/svg/README.md)

#### 多种主题
基本的换肤可以通过在元素上设置两个属性来搞定：fill属性和stroke属性。fill属性设置对象内部的颜色，stroke属性设置绘制对象的线条的颜色。通过改变不同path的这2个属性，
你可以把一个SVG图标源文件变换出不同的主题。包括：`线框`、`填充`、`双色`、`多色`。拿一个叫"照相机"的图标来举个例子：

源文件效果: ![](https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera.svg)

变换之后效果，以React版图标库为例：
| React版图标库 | 预览效果 | 对应主题 |
| ---- | --- | --- |
| ```<Camera theme="outline" size="32" fill="#000000"/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_outline.png" width="100"></img> | 线框主题 |
| ```<Camera theme="filled" size="32" fill="#333"/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_filled.png" width="100"></img> | 填充主题 |
| ```<Camera theme="two-tone" size="32" fill={['#333' ,'#2F88FF']}/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_two-tone.png" width="100"></img> | 双色主题 |
| ```<Camera theme="multi-color" size="32" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']}/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_multi-color.png" width="100"></img> | 多色主题| 
### 网站
#### 定制化 
> 这里是网站[IconPark](http://iconpark.bytedance.com/official)，每一个图标都被手绘在一个48*48的格子里，通过使用SVG 边框属性确保了最大范围的样式灵活性。
你可以在线去更改颜色、大小、线框宽度、端点类型、拐点类型等属性

<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/screenshot.png"></img>


#### 便捷的工具
> 你可以应用在 Figma, Sketch, Photoshop, PPT等等场景里，这里有一些快捷操作：
  - 复制SVG源码
  - 复制React图标代码组件
  - 复制Vue图标代码组件
  - 下载PNG
  - 下载SVG
    
<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/icon-tool.png" width="200px"></img>    

### 变更记录
- 2020.12.15 发布v1.2.0版本
- 2020.11.26 npm 发布 v1.1.1, 丰富图标数量
- 2020.11.13 npm 发布 v1.0.14
- 2020.11.05 npm 发布 v1.0.13
- 2020.10.29 丰富icon数量，增加 `Sport`分类, 更新部分icon源文件
- 2020.09.30 支持vue3.0, [vue-next icons](https://github.com/bytedance/IconPark/tree/master/packages/vue-next)

### 联系
<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/lark.png"></img>
