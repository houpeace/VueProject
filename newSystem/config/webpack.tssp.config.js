const path = require('path');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');
const atImport = require('postcss-import');
const cssvariables = require('postcss-css-variables');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devSrc = 'http://localhost:8099/static/';
const devOutputPath = '../dist/static';
const prodSrc = '/assets/dist/static/';
const prodOutputPath = '../dist/static';

const Util = require('./util')

const PATH_DIST = {
    font: 'font/',
    img: 'image/',
    css: 'css/',
    js: 'js/'
};
const isProduction = process.env.NODE_ENV === 'production';   //环境，dev、production

const host = isProduction ? prodSrc : devSrc;
const outputPath = isProduction ? prodOutputPath : devOutputPath;
const extractElementUI = new ExtractTextPlugin(PATH_DIST.css + 'element.css' + (isProduction ? '?[contenthash:8]' : ''));
const extractCSS = new ExtractTextPlugin(PATH_DIST.css + 'app.css' + (isProduction ? '?[contenthash:8]' : ''));

module.exports = function (env) {
    let Config = {
        entry: {
            element: ['element-ui'],
            vue: ['vue', 'axios', 'vue-router', 'vuex'],
            app: './src/main.js'
        },
        output: {
            path: path.resolve(__dirname, outputPath),
            publicPath: host,
            filename: PATH_DIST.js + '[name].js' + (isProduction ? '?[chunkhash:8]' : '')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            // scss: extractCSS.extract({
                            //     use: 'css-loader!postcss-loader!sass-loader',
                            //     fallback: 'vue-style-loader'
                            // }),
                            // sass: extractCSS.extract({
                            //     use: 'css-loader!postcss-loader!sass-loader?indentedSyntax',
                            //     fallback: 'vue-style-loader'
                            // }),
                            scss:Util.generateSassResourceLoader(),
                            sass:Util.generateSassResourceLoader(),
                            css: extractCSS.extract({
                                use: 'css-loader!postcss-loader',
                                fallback: 'vue-style-loader'
                            })
                        }
                    }
                },
                {
                    test: function (path) {
                        if (/\.css$/.test(path) && (/element-ui/).test(path)) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    loader: extractElementUI.extract({
                        use: 'css-loader!postcss-loader'
                    })
                },
                {
                    test: function (path) {
                        if (/\.css$/.test(path) && !(/element-ui/).test(path)) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    loader: extractCSS.extract({
                        use: 'css-loader!postcss-loader'
                    })
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(woff|svg|eot|ttf)\??.*$/,  //字体文件
                    loader: 'file-loader',
                    options: {
                        publicPath:'../font/',
                        outputPath:PATH_DIST.font,
                        name: '[name].[ext]'
                    }
                },
                {
                    test: /\.(gif|jpg|png)\??.*$/,  //图片
                    loader: 'file-loader',
                    options: {
                        name: PATH_DIST.img + '[name].[ext]'
                    }
                },
                // {
                //     test: /\.scss$/,
                //     loader: ExtractTextPlugin.extract({
                //         use: 'css-loader!postcss-loader!sass-loader'
                //     })
                // },
                {
                    test: /\.scss$/,
                    use: Util.generateSassResourceLoader()
                },
                {
                    test: /\.sass/,
                    use: Util.generateSassResourceLoader()
                },

            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['element', 'vue']
            }),
            extractElementUI,
            extractCSS,
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: function () {
                        return [atImport({
                            path: [path.resolve(__dirname, '../src')]
                        }), cssnext, cssvariables];
                    }
                },
                minimize: isProduction
            }),
            new HtmlWebpackPlugin({
                title: '个性化规则管理平台',
                template: 'index.html',
                filename: '../index.html',
                inject: false,
                chunks: ['element', 'vue', 'app']
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isProduction ? '"production"' : '"development"'
            })
        ],
        performance: {
            hints: isProduction ? 'warning' : false
        },
        devtool: isProduction ? false : '#eval-source-map',
        resolve: {
            alias: {
                'src': path.resolve(__dirname, '../src'),
                '@': path.resolve(__dirname, '../src'),
                'scss':path.resolve(__dirname,'../src/scss/')
            }
        }
    };

    if (isProduction) {
        Config.plugins = Config.plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            })
        ]);
    } else {
        Config.devServer = {
            historyApiFallback: true,
            publicPath: '/static/',
            disableHostCheck: true,
            noInfo: true,
            hot: true,
            host: 'localhost',
            port: 8099,
            watchOptions: {
                poll: false,
                ignored: ['node_modules/**', 'config/**', 'common/**', 'dist/**']
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
    }
    return Config;
};
