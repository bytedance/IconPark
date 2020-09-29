/**
 * @file gulpfile 编译文件
 */

import path from 'path';
import gulp from 'gulp';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';
import merge from 'merge2';
import less from 'gulp-less';
import minifyCss from 'gulp-minify-css';
import configVue from './packages/vue/tsconfig.json';
import configVueNext from './packages/vue-next/tsconfig.json';
import configSVG from './packages/svg/tsconfig.json';
import configReact from './packages/react/tsconfig.json';

const TS_CONFIG_MAP = {
    react: configReact,
    vue: configVue,
    svg: configSVG,
    'vue-next': configVueNext
};

const BABEL_CONFIG_MAP = {
    react: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: [
                            '> 1%',
                            'last 2 versions',
                            'not ie <= 8'
                        ]
                    }
                }
            ],
            '@babel/preset-react'
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false
                }
            ]
        ]
    },
    vue: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: [
                            '> 1%',
                            'last 2 versions',
                            'not ie <= 8'
                        ]
                    }
                }
            ],
            '@vue/babel-preset-jsx'
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false
                }
            ]
        ]
    },
    'vue-next': {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: [
                            '> 1%',
                            'last 2 versions',
                            'not ie <= 8'
                        ]
                    }
                }
            ]
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false
                }
            ],
            '@vue/babel-plugin-jsx'
        ]
    },
    svg: {
        presets: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                    targets: {
                        browsers: [
                            '> 1%',
                            'last 2 versions',
                            'not ie <= 8'
                        ]
                    }
                }
            ]
        ],
        plugins: [
            [
                '@babel/plugin-proposal-class-properties',
                {
                    loose: false
                }
            ]
        ]
    }
};

function resolve(p: string): string {
    return path.resolve(process.cwd(), p);
}

function createBuildTask(name: 'react' | 'vue' | 'svg' | 'vue-next'): string {

    const cwd = resolve('packages/' + name);

    gulp.task('build-script-' + name, () => {

        const result = gulp
            .src(['src/*.ts', 'src/*.tsx', 'src/**/*.ts', 'src/**/*.tsx'], {cwd})
            .pipe(ts(TS_CONFIG_MAP[name].compilerOptions));

        return merge([
            result
                .js
                .pipe(babel(BABEL_CONFIG_MAP[name]))
                .pipe(gulp.dest(cwd + '/es'))
                .pipe(babel({plugins: ['@babel/plugin-transform-modules-commonjs']}))
                .pipe(gulp.dest(cwd + '/lib')),
            result.dts.pipe(gulp.dest(cwd + '/es')).pipe(gulp.dest(cwd + '/lib'))
        ]);
    });

    const tasks = ['build-script-' + name];

    if (name !== 'svg') {

        gulp.task('build-css-' + name, () => {

            return gulp
                .src('src/runtime/index.less', {cwd})
                .pipe(less())
                .pipe(minifyCss())
                .pipe(gulp.dest(cwd + '/styles'));
        });

        gulp.task('build-less-' + name, () => {

            return gulp
                .src('src/runtime/index.less', {cwd})
                .pipe(gulp.dest(cwd + '/styles'));
        });

        tasks.push('build-css-' + name, 'build-less-' + name);
    }

    gulp.task('build-' + name, gulp.parallel(tasks));

    return 'build-' + name;
}

gulp.task('default', gulp.series([
    // createBuildTask('react'),
    // createBuildTask('vue'),
    createBuildTask('vue-next'),
    // createBuildTask('svg')
]));
