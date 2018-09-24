const path = require('path');

module.exports = {
    devtool: "source-map", //для того щоб в консолі зсилалось на основний файл до компіляції
    entry: './src/index.js', //звідки взяти
    output: { //куди положити
        path: path.join(__dirname, 'build'), //адрес директорії куди ложити
        filename: 'bundle.js', // назва файлу
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
            }
        ]
    }
};