const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = webpackEnv => {
    // const mode = webpackEnv.WEBPACK_SERVE ? 'development' : 'production'
    // const isEnvDevelopment = mode === 'development'
    // const isEnvProduction = mode === 'production'
    return {
        mode: 'none',
        entry: './src',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index_bundle.js',
            publicPath: '/',
        },
        devtool: 'inline-source-map',
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
        plugins: [
            new Dotenv(), //.env에 있는 변수를 가져오는 Plugin
            new CleanWebpackPlugin(), //성공적으로 다시 빌드 한 후 webpack의 output.path에 있는 모든 빌드 폴더를 제거 및 정리
            new HtmlWebpackPlugin({ template: './public/index.html' }), //빌드한 결과물을 HTML 파일로 생성해주는 Plugin           
        ],
    }
}