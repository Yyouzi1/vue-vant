const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {

    //项目的入口文件,也就是代码执行从这里开始的

    entry: "./src/main.js",

    //项目的输出目录
    mode:'development',

    output: {

        //获取到当前根目录，在拼接一个dist目录

        path: path.resolve(__dirname, "dist"),

        //输出的文件名

        // filename: "bundel.js"
        filename:'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'

    },

    plugins: [

        //通过plugins实例化

        new CleanWebpackPlugin(),
        new HtmlwebpackPlugin({
            //可以实现热更新，类似与ajax
            hot: true,

            //可以指定文件当模板 让这个文件为入口 读取模板的入口文件

            template: "./index.html",

            //最会将index.html输出到dist文件夹中

            filename: 'index.html',

        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css",
        chunkFilename: "./css/[id].css"
        }),
         // copy custom static assets
        new CopyWebpackPlugin({
           
            patterns: [
                { 
                    from: path.resolve(__dirname,'./src/static'),
                    to:'./static'               
                }
            ],
        })
       

    ],

    devServer: {
        open: true,
        //实现热更新

        hot: true,

        //设置指定端口号

        port: 9999,

        //最后出书的路径

        contentBase: path.join(__dirname, 'dist')

    },
    module: {
        rules: [
            // {
            //     test: /\.css$/, use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader'],
            // },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
                ]
              },
            {
                test: /\.css$/,
                loader: 'px2vw-view-loader',
                options: {
                    viewportWidth: 375,
                    viewportUnit: 'vw',
                    minPixelValue: 1,
                    decimal: 3,
                    selectorBlackList:['van-button'],//指定不需要转换的类，或者在不需要转换的，写的时候后面多跟一个类名
                    exclude: /(\/|\\)(node_modules)(\/|\\)/, // 设置忽略文件，用正则做目录名匹配
                }
            },
            { test: /\.(jpg|jpeg|png|gif)$/, use: ['url-loader'] },
            { test: /.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.vue$/, loader: 'vue-loader' }

        ]
    },
   

}

module.exports = config