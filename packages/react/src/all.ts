/**
 * @file all
 */

import * as IconMap from './map';
import {IIconProps} from './runtime';
import React from 'react';

export type IconType = keyof typeof IconMap

/**
 * 获取对象的属性名数组
 *
 * @param obj 要获取的对象
 */
function getKeys<T>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

export const ALL_ICON_KEYS = getKeys(IconMap);

export interface IIconAllProps extends IIconProps {
    type: IconType
}
export default function Icon(props: IIconAllProps) {

    const {type, ...extra} = props;

    if (!(type in IconMap)) {
        throw new Error(`${type} is not a valid icon type name`);
    }

    return React.createElement(IconMap[type], extra);
}

export * from './runtime';
