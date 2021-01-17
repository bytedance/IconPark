# IconPark 图标
> IconPark图标体系

## 介绍

### 新特性
* 提供超过2000图标
* 支持4种主题:
    * 线性
    * 填充
    * 双色
    * 四色

### 更多图标
请访问[IconPark图标网站](http://iconpark.bytedance.com), 提供更多便捷的操作：
* 复制SVG源文件
* 复制React图标组件
* 复制Vue图标组件
* 下载PNG
* 下载SVG

## 快速上手
### 安装

```
npm install @icon-park/svg --save
```

### 引用图标
引用`@icon-park/svg`，并渲染函数对应的图标:

```
import {Home} from '@icon-park/svg';

// examples

const svg = Home({theme: 'outline'});

console.log(svg);
```

### 全局

你可以使用 `@icon-park/svg` 中的 `setConfig`方法来设置全局配置。

```typescript
import {setConfig} from '@icon-park/svg'

setConfig({
    theme: 'outline',
    size: '1em',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    outStrokeColor: '#000',
    outFillColor: '#2F88FF',
    innerStrokeColor: '#FFF',
    innerFillColor: '#43CCF8'
})
```

### 按需加载

可以使用[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)来按需加载图标

配置如下:
```json
{
    "plugins": [
        [
            "import",
            {
                "libraryName": "@icon-park/svg",
                 "libraryDirectory": "es/icons",
                 "camel2DashComponentName": false 
            }
        ]
    ]
}
```
### 将IconPark嵌入到你的项目中
如果你的项目中需要使用到图标名称，作者，分类，标签以及创建时间等额外的信息，你可以使用位于每个NPM根目录的`icons.json`文件。

## 属性
|    属性名称	 | 介绍  | 类型  | 默认值 | 注释 |
| ---------- | --- | --- | --- | --- |
| theme |  图标主题 | 'outline' &#124; 'filled' &#124; 'two-tone' &#124; 'multi-color' | 'outline'  |
| size | 图标的大小，宽高相同 | number &#124; string |  '1em' |
| spin |  给图标加旋转效果 | boolean | false |
| fill |  图标的颜色，不超过4个颜色，默认为当前颜色 | string &#124; string[]|  'currentColor' |
| strokeLinecap |  svg元素的stroke-linecap属性 | 'butt' &#124; 'round' &#124; 'square' |  'round' |
| strokeLinejoin |  svg元素的stroke-linejoin属性 | 'miter' &#124; 'round' &#124; 'bevel' |  'round' |
| strokeWidth |  svg元素的stroke-width属性 | number |  4 |
