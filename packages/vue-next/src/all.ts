/**
 * @file all
 */

import {createVNode, DefineComponent, ComponentOptions} from '@vue/runtime-dom';
import * as IconMap from './index';
import {IIconProps} from './runtime';

export type IconType = keyof typeof IconMap;

export interface IIconAllProps extends IIconProps {
    type: IconType
}

export type IIconAllOptions = ComponentOptions<IIconAllProps>;

// 包裹后的图标
export type AllIcon = DefineComponent<IIconAllProps>;

const IconParkOptions: IIconAllOptions = {
    name: 'icon-park',
    props: ['size', 'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'theme', 'fill', 'spin', 'type'],
    setup: (props => {

        const {
            type,
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
            return createVNode(IconMap[type], {
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
