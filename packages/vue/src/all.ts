/**
 * @file all
 */

import * as IconMap from './index';
import {IIconInstance, IIconProps} from './runtime';
import Vue, {VNode, ComponentOptions, VueConstructor} from 'vue';

export type IconType = keyof typeof IconMap;

export interface IIconParkInstance extends IIconInstance {
    type: IconType
}

export interface IIconAllProps extends Vue, IIconProps {
    type: IconType
}

const options: ComponentOptions<IIconParkInstance> = {
    name: 'icon-park',
    props: ['type', 'theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth'],
    inheritAttrs: true,
    render(this: IIconParkInstance, h): VNode {

        const {
            type,
            theme,
            size,
            fill,
            strokeLinecap,
            strokeLinejoin,
            strokeWidth,
            spin
        } = this;

        if (!(type in IconMap)) {
            throw new Error(`${type} is not a valid icon type name`);
        }

        return h(IconMap[type], {
            props: {
                theme,
                size,
                fill,
                strokeLinecap,
                strokeLinejoin,
                strokeWidth,
                spin
            }
        });
    }
};

export const IconPark: VueConstructor<IIconAllProps> = options as VueConstructor<IIconAllProps>;
