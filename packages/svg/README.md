# IconPark Icons
> Pure SVG Icons for IconPark

## Introduction

### Features
* Provide more than 2000 icons
* Provide 4 themes:
    * outline
    * filled
    * two-tone
    * multi-color

### More
Please visit [IconPark Website](http://iconpark.bytedance.com)
* Copy SVG
* Copy React Icon component
* Copy Vue Icon component
* Download PNG
* Download SVG

## Getting Started
### Install

```
npm install @icon-park/svg --save
```

### Include Component
Import an icon from `@icon-park/svg`  and then call it:

```
import {Home} from '@icon-park/svg';

// examples

const svg = Home({theme: 'outline'});

console.log(svg);
```

### Global Config
You can use the static methods `setConfig` in `@icon-park/svg` to set the default config globally:

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

### Import on Demand

You can use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import icons on demand.

Set config like this:
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
### Embed IconPark in your project 
If you need to use additional information such as icon name, author, category, label and creation time, you can use the `icons.json` file located in the root directory of each NPM.

## Props
|    prop	 | description  | type  | default | note |
| ---------- | --- | --- | --- | --- |
| theme |  Theme of the icons.  | 'outline' &#124; 'filled' &#124; 'two-tone' &#124; 'multi-color' | 'outline'  |
| size |  The width/height of the icon | number &#124; string |  '1em' |
| spin |  Rotate icon with animation | boolean | false |
| fill |  Colors of theme | string  &#124; string[] |  'currentColor' |
| strokeLinecap |  the stroke-linecap prop of svg element | 'butt' &#124; 'round' &#124; 'square' |  'round' |
| strokeLinejoin |  the stroke-linejoin prop of svg element | 'miter' &#124; 'round' &#124; 'bevel' |  'round' |
| strokeWidth |  the stroke-width prop of svg element | number |  4 |
