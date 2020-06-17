const path = require('path');

exports.onCreateWebpackConfig = ({ state, loaders, actions}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@configs': path.resolve(__dirname, 'src/configs'),
                '@styles': path.resolve(__dirname, 'src/styles')
            }
        }
    })
}