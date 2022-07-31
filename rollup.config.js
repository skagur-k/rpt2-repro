// rollup.config.js

import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postCSS from 'rollup-plugin-postcss'
import pkg from './package.json'
import bundleSize from 'rollup-plugin-bundle-size'
import analyzer from 'rollup-plugin-visualizer'

const devMode = process.env.NODE_ENV === 'development'
console.log(`${devMode ? 'development' : 'production'} mode bundle`)

export default {
	input: './index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: devMode ? 'inline' : false,
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: devMode ? 'inline' : false,
		},
	],
	external: [...Object.keys(pkg.peerDependencies || {})],
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript({
			typescript: require('typescript'),
		}),
		postCSS({
			plugins: [require('autoprefixer')],
		}),
		bundleSize(),
		analyzer(),
	],
}
