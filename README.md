# IconPark

<div align="center">
 <a href="http://iconpark.bytedance.com/official">
    <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/logo.svg" width="384" height="96">
</a>
</div>

English | [简体中文](README.zh-CN.md)

## Introduction
The  IconPark gives access to more than 1,300 high-quality icons, and introduces an interface for customizing your icons.
It is common practice to provide a variety of SVG source files to achieve different skin themes. However, We have discovered an innovative technology to transform attributes of an SVG source file into multiple themes. Besides, they can generate cross-platform codes automatically, like `react-icons`, `vue-icons`, `svg-icons`.

### Icons
<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/icon-dance.gif"></ifram>

### Packages
#### Generate cross-platform components
> Find packages in `packages` folder. 
  - [React component](./packages/react/README.en-US.md) 
  - [Vue component](./packages/vue/README.en-US.md) 
  - [Pure SVG string](./packages/vue/README.en-US.md) 

#### Multiple themes

Basic coloring can be done by setting two attributes on the node: fill and stroke.Using fill sets the color inside the object and stroke sets the color of the line drawn around the object. By changing this two attributes, you can transform only one SVG icon file into different themes, including:`outline`, `filled`, `two-tone`, `multi-color`.Take an icon named `camera` for an example:

Source file: ![](https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera.svg)

After Transforming:

| React icons | Preview | Theme |
| ---- | --- | --- |
| ```<Camera theme="outline" size="32" fill="#000000"/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_outline.png" width="100" height="100"></img> | Outline theme |
| ```<Camera theme="filled" size="32" fill="#333"/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_filled.png" width="100" height="100"></img> | Filled theme |
| ```<Camera theme="two-tone" size="32" fill={['#333' ,'#2F88FF']}/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_two-tone.png" width="100" height="100"></img> | Two-tone theme |
| ```<Camera theme="multi-color" size="32" fill={['#333' ,'#2F88FF' ,'#FFF' ,'#43CCF8']}/>``` | <img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/camera_multi-color.png" width="100" height="100"></img> | Multi-color theme |
    
### Website
#### Customize 
> Here is the website [IconPark](http://iconpark.bytedance.com/official). Each icon is hand-coded along a 48x48 grid, and uses SVG stroke allowing
for maximum style flexibility.You can adjust the color, size, `stroke-width`, `stroke-linejoin`,`stroke-linecap`and other attributes.

<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/screenshot.png"></img>


#### Convenient online tools
> You can use  in Figma, Sketch, Photoshop, PPT, etc.
    - Copy SVG
    - Copy React Icon component
    - Copy Vue Icon component
    - Download PNG
    - Download SVG
    
<img src="https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/lswwheh7nupwnuhog/icons/icon-tool.png" width="200px"></img>    
