const path = require('path');

const env = (() => {
    const nodeEnv = (process.env.NODE_ENV || '').toLowerCase();
    if (-1 === ['production', 'development'].indexOf(nodeEnv)) return 'development';
    return nodeEnv;
})();


module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.mjs'),
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${env}.js`
    },
    devtool: 'nosources-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    envName: 'development'
                }
            }
        ]
    },
    optimization: {
        usedExports: true,
        minimize: env === 'production'
    }
};
