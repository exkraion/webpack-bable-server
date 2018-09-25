const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: "source-map", //для того щоб в консолі зсилалось на основний файл до компіляції
    entry: ['./src/index.js' ], //звідки взяти
    output: { //куди положити
        path: path.join(__dirname, 'build'), //адрес директорії куди ложити
        filename: 'app.js', // назва файлу
        publicPath: '/build/' // публічні файли (стлі, картинки...)
    },
    module: {
        rules: [
            {
                test: '/\.js/', //розширення файла (регулярка)
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                    }),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '/css/style.css'
        })
    ]
};