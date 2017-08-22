const { resolve } = require('path');
const babelpolyfill = require("babel-polyfill");

module.exports = {
    context: __dirname,
    entry:  [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: resolve(__dirname, 'build'),//打包后的文件存放的地方
        filename: "bundle.js",//打包后输出文件的文件名
        publicPath: '/',
    },

    devServer: {
        contentBase: resolve(__dirname, 'build'),
        historyApiFallback: {
            index: "/index.html"
        },
        publicPath: '/',
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            /*  test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
                loader：loader的名称（必须）
                include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
                query：为loaders提供额外的设置选项（可选）*/
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" //将所有的计算后的样式加入页面中(必须先写style-loader)
                    },
                    {
                        loader: "css-loader", //使你能够使用类似@import 和 url(...)的方法实现 require()的功能
                        options: {
                            modules:true,    //这个参数是让css引入js的模块化思想，通过CSS模块，所有的类名，动画名默认都只作用于当前模块
                            localIdentName: '[path]__[name]__[local]'  //模块化后class的名称
                        }
                    },
                ]
            },
            {
                test:/\.scss$/,
                use:[
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: 'css-loader',
                            options:{
                                modules:true,
                                localIdentName: '[path]__[name]__[local]'
                            }
                        },
                        {
                            loader:'sass-loader'
                        },
                    ],

            },
            {

            }
        ],
    },

    devtool: "cheap-eval-source-map",

};
