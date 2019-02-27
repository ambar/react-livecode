import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: './src/LiveCode.js',
  output: [{format: 'cjs', file: pkg.main}, {format: 'esm', file: pkg.module}],
  plugins: [babel()],
}
