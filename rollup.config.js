import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './src',
  output: {
    name: 'sdk',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    sourcemap: true
  },
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    process.env.NODE_ENV === 'production' && terser()
  ]
}
