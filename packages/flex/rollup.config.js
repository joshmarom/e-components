/**
 * @license
 * Copyright 2021 Elementor LTD
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import summary from 'rollup-plugin-summary';
 import {terser} from 'rollup-plugin-terser';
 import resolve from '@rollup/plugin-node-resolve';
 import replace from '@rollup/plugin-replace';
 
 export default {
   input: 'flex.js',
   output: {
     file: 'flex.bundled.js',
     format: 'esm',
   },
   onwarn(warning) {
     if (warning.code !== 'THIS_IS_UNDEFINED') {
       console.error(`(!) ${warning.message}`);
     }
   },
   plugins: [
     replace({'Reflect.decorate': 'undefined'}),
     resolve(),
     terser({
       ecma: 2020,
       module: true,
       warnings: true,
       mangle: {
         properties: {
           regex: /^__/,
         },
       },
     }),
     summary(),
   ],
 };
 