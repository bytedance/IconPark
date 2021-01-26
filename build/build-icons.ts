/**
 * @file build-icons
 */

import parse from 'csv-parse/lib/sync';
import csv from 'csv-stringify/lib/sync';
import fs from 'fs';
import path from 'path';

interface IIconProps {
    id: number;
    title: string;
    name: string;
    svg?: string;
    tag: string[];
    category: string;
    categoryCN: string;
    author: string;
    rtl: boolean;
}

const ICON_CSV = path.resolve(__dirname, '../source/db.csv');
const content = fs.readFileSync(ICON_CSV, 'utf8');
const arr: string[][] = parse(content);
const map: {[key: string]: boolean} = {};
let count = 0;
let errors: {[key: string]: boolean} = {};

const ALL_ICON_MAP: Record<string, [string, string]> = {};

const NEW_CSV: string[][] = arr.slice(0, 1);

fs.readdirSync(path.join(__dirname, '../source')).forEach(dir => {

    const dirPath = path.join(__dirname, '../source', dir);

    if (fs.statSync(dirPath).isDirectory()) {

        fs.readdirSync(dirPath).forEach(file => {

            const filePath = path.join(dirPath, file);
            const key = path.basename(filePath, '.svg').toLowerCase();

            if (ALL_ICON_MAP[key]) {
                console.log('图标名字重复：', key);
            }

            ALL_ICON_MAP[key] = [dir, fs.readFileSync(filePath, 'utf8')];
        });
    }
});
const data: IIconProps[] = [];
const categoryMap: Record<string, string> = {};

arr.slice(1).forEach((item: string[]) => {
    categoryMap[item[3]] = item[2];
});

arr.slice(1).forEach((item: string[], i) => {

    const name = item[1];
    let category = item[3];
    const filePath = path.resolve(__dirname, '../source', category, name + '.svg');
    const result = category + '/' + name;
    const printErrorMsg = (msg: string, data = result) => {
        console.log(msg, data);
        errors[result] = true;
    };

    let svg = '';

    // 校验
    if (!fs.existsSync(filePath)) {

        if (ALL_ICON_MAP[name]) {
            svg = ALL_ICON_MAP[name][1];
            printErrorMsg('svg分类错误: 请检查图标分类, 真实分类 = ' + ALL_ICON_MAP[name][0]);
            const newItem = [...item];
            newItem[3] = ALL_ICON_MAP[name][0];
            newItem[2] = categoryMap[ALL_ICON_MAP[name][0]];
            NEW_CSV.push(newItem);
        } else {
            printErrorMsg('svg路径不存在: 请检查是否缺失svg或者拼写错误');
            return;
        }
    } else {
        svg = fs.readFileSync(filePath, 'utf8');
        NEW_CSV.push(item);
    }

    delete ALL_ICON_MAP[name];

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

    data.push({
        id: i,
        title: item[0],
        name,
        category,
        categoryCN: item[2],
        author: item[8].replace(/[,， ]+/g, ''),
        tag: item[7].split(/[,， ]+/).filter(item => item.trim()),
        rtl: item[6].trim() === '是',
        svg
    });
});

console.log('总图标数', count);
console.log('错误图标数', Object.keys(errors).length);

if (Object.keys(ALL_ICON_MAP).length) {
    console.log('没使用图标');
    Object.keys(ALL_ICON_MAP).forEach(key => {
        console.log('Category = ' + ALL_ICON_MAP[key][0] + ' Name = ' + key);
    });
}

fs.writeFileSync(path.resolve(__dirname, '../source/icons.json'), JSON.stringify(data, null, 4), 'utf8');

data.forEach(item => delete item.svg);

fs.writeFileSync(path.resolve(__dirname, '../source/icons-config.json'), JSON.stringify(data, null, 4), 'utf8');

fs.writeFileSync(path.resolve(__dirname, '../source/db-fixed.csv'), csv(NEW_CSV), 'utf8');

