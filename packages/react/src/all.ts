/**
 * @file all
 */

import * as icons from './index';
import {IIconProps} from './runtime';
import React from 'react';

/**
 * 获取对象的属性名数组
 *
 * @param obj 要获取的对象
 */
function getKeys<T>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

export const ALL_ICON_KEYS = getKeys(icons);

export type IconType = typeof ALL_ICON_KEYS;

export default function Icon(props: {type: keyof typeof icons} & IIconProps) {

    const {type, ...extra} = props;

    if (!(type in icons)) {
        throw new Error(`${type} is not a valid icon type name`);
    }

    return React.createElement(icons[type], extra);
}

export * from './runtime';
