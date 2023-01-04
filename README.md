# [IconPark](http://iconpark.bytedance.com/official)

<div align="center">
  <a href="http://iconpark.bytedance.com/official">
    <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/logo.svg" alt="IconPark Logo" width="384" height="96">
  </a>
</div>

English | [简体中文](README.zh-CN.md)

## Introduction

IconPark gives access to more than 2000 high-quality icons, and introduces an interface for customizing your icons.
Instead of using various SVG source files to achieve different themes, we implement a technology transforming attributes of a single SVG source file into multiple themes. Besides, we provide cross-platform components, including [`react-icons`](./packages/react/README.md), [`vue-icons`](./packages/vue/README.md) and [`svg-icons`](./packages/vue/README.md).
So whether you are a designer or a developer, you can use them in your designs or your projects for free.


<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/icon-dance.gif"></img>

### Packages
#### Generate Cross-platform Components

Find packages in `packages` folder. NPM packages make it painless to import icon components to your project.

| Name | Github link | NPM link |
| ------- | --- | --- |
| React Icons | [React Component](./packages/react/README.md)  | [@icon-park/react](https://www.npmjs.com/package/@icon-park/react) |
| Vue2 Icons | [Vue Component for old Vue2.0](./packages/vue/README.md) | [@icon-park/vue](https://www.npmjs.com/package/@icon-park/vue) |
| Vue3 Icons | [Vue Component for Vue3.0](./packages/vue-next/README.md) | [@icon-park/vue-next](https://www.npmjs.com/package/@icon-park/vue-next) |
| SVG Icons | [Pure SVG String](./packages/svg/README.md)| [@icon-park/svg](https://www.npmjs.com/package/@icon-park/svg) |
#### Multiple themes

Basic coloring can be done by setting two attributes on the node: fill and stroke. Fill sets the color inside the object while stroke sets the color of the line drawn around the object. By changing this two attributes, you can transform a single SVG icon into different themes, including: `outline`, `filled`, `two-tone`, `multi-color`. Take the icon named `camera` for example:

Source file: ![](https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera.svg)

After Transforming:

| React icons | Preview | Theme |
| ---- | --- | --- |
| ```<Camera theme="outline" size="32" fill="#000000"/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_outline.png" width="100"></img> | Outline theme |
| ```<Camera theme="filled" size="32" fill="#333"/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_filled.png" width="100"></img> | Filled theme |
| ```<Camera theme="two-tone" size="32" fill={['#333' ,'#2F88FF']}/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_two-tone.png" width="100"></img> | Two-tone theme |
| ```<Camera theme="multi-color" size="32" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']}/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_multi-color.png" width="100"></img> | Multi-color theme |

#### Embed IconPark in your project 
If you need to use additional information such as icon name, author, category, label and creation time, you can use the `icons.json` file located in the root directory of each NPM.

### Website
#### Customization
Here is the website of [IconPark](http://iconpark.bytedance.com/official). Each icon is hand-coded within a 48x48 grid, using SVG stroke giving the maximum flexibility on styling. You can adjust the color, size, `stroke-width`, `stroke-linejoin`, `stroke-linecap` and other attributes to meet your needs.

<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/screenshot.png" alt="Screenshot of customization"></img>


#### Convenient Online Tools

> You can use them in Figma, Sketch, Photoshop, PPT, etc.

  - Copy SVG
  - Copy React Icon Component
  - Copy Vue Icon Component
  - Download PNG
  - Download SVG
    
<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/icon-tool.png" alt="Icon Tools" width="200px"></img>   

### Changelog
[CHANGELOG.en-US](CHANGELOG.en-US.md) | [CHANGELOG.简体中文](CHANGELOG.zh-CN.md)

### Contact Us
#### Lark
<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/lark.png"></img>
