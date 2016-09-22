import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'


export default {
    entry: 'js/ts/bootstrap.aot.js',
    dest: 'dist/app.aot.js',
    sourceMap: false,
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
        }),
        uglify()
    ]
}