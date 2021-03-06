const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = webpackEnv => {
    // const mode = webpackEnv.WEBPACK_SERVE ? 'development' : 'production'
    // const isEnvDevelopment = mode === 'development'
    // const isEnvProduction = mode === 'production'
    return {
        entry: './src',
        output: {
            path: path.join(__dirname, '/dist'),
            //filename: 'index_bundle.js',
            // filename: '[name].js',
            chunkFilename: '[name].chunk.js',
            // path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        //devtool: 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                {
                    test: /\.css/,
                    // exclude: /node_modules/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]?[hash]',
                            }
                        },
                    ],
                }
            ]
        },
        optimization: {
            mangleWasmImports: true,
            mergeDuplicateChunks: true,
            minimize: true,

            // splitChunks: {
            //     chunks: 'all',
            //     //maxSize: 0,
            //     cacheGroups: {
            //         defaultVendors: {
            //             test: /[\\/]node_modules[\\/]/,
            //             name: 'vendors',
            //             priority: 1,
            //         },
            //         reactBundle: {
            //             test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            //             name: 'react.bundle',
            //             priority: 2,
            //             minSize: 1000,
            //         }
            //     },
            //     name: 'vendor',
            // }
        },
        plugins: [
            new Dotenv(), //.env??? ?????? ????????? ???????????? Plugin
            new CleanWebpackPlugin(), //??????????????? ?????? ?????? ??? ??? webpack??? output.path??? ?????? ?????? ?????? ????????? ?????? ??? ??????
            new HtmlWebpackPlugin({ template: './public/index.html' }), //????????? ???????????? HTML ????????? ??????????????? Plugin           
        ],
        mode: 'production',
        //mode: 'development',
        // externals: {
        //     react: 'react',
        //     'react-dom': 'ReactDOM',
        // },
        performance: { hints: false }
    }
}