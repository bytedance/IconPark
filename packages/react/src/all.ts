/**
 * @file all
 */

import * as IconMap from './map';
import { IIconProps } from './runtime';
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
    /** FIXME just use string to prevent type error. */
    type: IconType | string;
}

function toPascalCase(val: string): string {
    return val.replace(/(^\w|-\w)/g, c => c.slice(-1).toUpperCase());
}

export default function Icon(props: IIconAllProps) {

    const { type, ...extra } = props;

    const realType = toPascalCase(type);

    if (!(realType in IconMap)) {
        throw new Error(`${type} is not a valid icon type name`);
    }

    return React.createElement(IconMap[realType as IconType], extra);
}

export * from './runtime';
