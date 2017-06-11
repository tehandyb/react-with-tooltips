import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/with-tooltips.js',
  dest: 'dist/with-tooltips.js',
  format: 'umd',
  moduleName: 'ReactWithTooltips',
  plugins: [
    babel({
      exclude: 'node-modules/**'
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/immutable/dist/immutable.js': ['fromJS']
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  // Don't bloat our bundle with React, the parent application will provide it
  external: ['react', 'react-dom']
}
