# IconPark 图标
> IconPark图标体系

## 介绍

### 新特性
* 提供超过1300图标
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
npm install @icon-park/vue --save
```

### 引用图标
在组件的上方引用`@icon-park/vue`，并在组件的模板函数中使用:

``` vue
<template>
<home theme="fill"/>
</template>
<script>
import {Home} from '@icon-park/vue';

export default {
    components: {
        Home
    }
}
</script>
```

如果你不想引用，那么你可以全局安装图标

```typescript
import * as icons from '@icon-park/vue';
import Vue from 'vue';

// Install
Object.values(icons).forEach(icon => {
    Vue.install(icon.name, icon);
});
```

### Style Sheet

引用预设样式

```typescript
import '@icon-park/vue/styles/index.css';
```

### 全局
你可以使用Vue提供的`provide`属性来设置全局配置。

```html
<template>
<div>
<home/>
</div>
</template>
<script lang="ts">
import {DEFAULT_ICON_CONFIGS} from '@icon-park/vue/es/runtime'
import {Home} from '@icon-park/vue';

const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'}

export default {
    name: 'App',
    provide () {
        return {
            ICON_CONFIGS: IconConfig
        }
    },
    components: {
        Home
    }
};
</script>

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
                "libraryName": "@icon-park/vue",
                "libraryDirectory": "es/icons",
                "camel2DashComponentName": false // default: true
            }
        ]
    ]
}
```


### 使用Icon组件
我们更推荐使用按需加载的方式来加载图标，因为这样可以大幅度缩减编译后代码体积，
但是在有些类似远程加载的菜单的场景下，直接引用全部图标可以缩减开发成本。

使用方式：

``` vue
<template>
<icon-park type="home" theme="fill"/>
</template>
<script>
import {IconPark} from '@icon-park/vue/all';

export default {
    components: {
        IconPark
    }
}
</script>
```

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
