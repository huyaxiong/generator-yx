module.exports = {
    plugins: [
        require('autoprefixer')({browsers: ['last 10 versions']}),
        // require('postcss-px2viewport')({
        //     viewportWidth: 750,
        //     viewportHeight: 1334,
        //     unitPrecision: 5,
        //     viewportUnit: 'vw',
        //     selectorBlackList: [],
        //     minPixelValue: 1,
        //     mediaQuery: false
        // })
    ]
};