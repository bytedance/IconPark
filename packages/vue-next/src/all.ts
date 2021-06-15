/**
 * @file all
 */

import { createVNode, App, DefineComponent, ComponentOptions } from '@vue/runtime-dom';
import * as IconMap from './map';
import { IIconProps } from './runtime';

export type IconType = keyof typeof IconMap;

export interface IIconAllProps extends IIconProps {
    /** FIXME just use string to prevent type error. */
    type: IconType | string;
}

export type IIconAllOptions = ComponentOptions<IIconAllProps>;

/** 包裹后的图标 */
export type AllIcon = DefineComponent<IIconAllProps>;

function toPascalCase(val: string): string {
    return val.replace(/(^\w|-\w)/g, c => c.slice(-1).toUpperCase());
}

const IconParkOptions: IIconAllOptions = {
    name: 'icon-park',
    props: ['size', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'theme', 'fill', 'spin', 'type'],
    setup: (props => {

        const type = toPascalCase(props.type);
        const {
            theme,
            size,
            fill,
            strokeLinecap,
            strokeLinejoin,
            strokeWidth,
            spin
        } = props;

        if (!(type in IconMap)) {
            throw new Error(`${type} is not a valid icon type name`);
        }

        return () => {
            return createVNode(IconMap[type as IconType], {
                theme,
                size,
                fill,
                strokeLinecap,
                strokeLinejoin,
                strokeWidth,
                spin
            });
        };
    })
};

export const IconPark: AllIcon = IconParkOptions as AllIcon;

export function install(Vue: App, prefix?: string): void {
    Object.values(IconMap).forEach(icon => {
        Vue.component(prefix ? prefix + '-' + icon.name.slice(5) : icon.name, icon);
    });
}
