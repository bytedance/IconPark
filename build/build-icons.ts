/**
 * @file build-icons
 */

import parse from 'csv-parse/lib/sync';
import fs from 'fs';
import path from 'path';

interface IIconProps {
    id: number;
    title: string;
    name: string;
    svg: string;
    tag: string[];
    category: string;
    categoryCN: string;
    author: string;
    time: string;
}

const ICON_CSV = path.resolve(__dirname, '../source/db.csv');
const content = fs.readFileSync(ICON_CSV, 'utf8');
const arr: string[][] = parse(content);
const map: {[key: string]: boolean} = {};
let count = 0;
let errors: {[key: string]: boolean} = {};

const data: IIconProps[] = arr.slice(1).map((item: string[], i) => {

    const name = item[1];
    const category = item[3];
    const filePath = path.resolve(__dirname, '../source', category, name + '.svg');
    const result = category + '/' + name;
    const printErrorMsg = (msg: string, data = result) => {
        console.log(msg, data);
        errors[result] = true;
    };

    let svg = '';

    // 校验
    if (!fs.existsSync(filePath)) {
        printErrorMsg('svg路径不存在:请检查是否缺失svg或者拼写错误');
    } else {
        svg = fs.readFileSync(filePath, 'utf8');
    }

    // 非法字符
    if (/[^\da-z-]/.test(name)) {
        printErrorMsg('svg命名只允许小写字母/连字符/数字');
    }

    // 重复性
    if (!map[name]) {
        map[name] = true;
    } else {
        printErrorMsg('svg名字重复');
    }

    if (!/^h[1-6]$/.test(name) && /\d/g.test(name)) {
        printErrorMsg('svg命名出现数字（数字不表意，不推荐)');
    }

    count = count + 1;

    return {
        id: i,
        title: item[0],
        name,
        category,
        categoryCN: item[2],
        author: item[5].replace(/[,， ]+/g, ''),
        tag: item[4].split(/[,， ]+/),
        time: item[6],
        svg
    };
});

console.log('总图标数', count);
console.log('错误图标数', Object.keys(errors).length);

fs.writeFileSync(path.resolve(__dirname, '../source/icons.json'), JSON.stringify(data, null, 4), 'utf8');
