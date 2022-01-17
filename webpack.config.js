const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}