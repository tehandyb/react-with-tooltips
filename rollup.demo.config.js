import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

// Bundle using an entry point as if it was a real app using the choropleth
export default {
  entry: 'demo/entry.js',
  dest: 'demo/demo-bundle.js',
  format: 'umd',
  plugins: [
    serve('demo'),
    livereload({
      watch: 'demo'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: ['node_modules/**', 'src/**', 'demo/**'],
      namedExports: {
        'node_modules/react/react.js': ['Component', 'PureComponent'],
        'node_modules/immutable/dist/immutable.js': ['fromJS']
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  sourceMap: true,
}
