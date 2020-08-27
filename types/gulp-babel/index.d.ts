/**
 * @file index GulpBabel
 */

declare module 'gulp-babel' {

    import {TransformOptions} from '@babel/core';

    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

    function babel(options?: Omit<TransformOptions, 'sourceMap' | 'filename'>): NodeJS.ReadWriteStream;

    namespace babel {
    }

    export = babel;
}
