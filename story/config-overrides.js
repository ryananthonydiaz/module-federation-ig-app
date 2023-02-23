const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = function override(config) {
    config.output.publicPath = 'auto';

    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.unshift(
        new ModuleFederationPlugin({
            name: 'story',
            filename: 'remoteEntry.js',
            remotes: {
                host: 'host@http://localhost3000/remoteEntry.js',
            },
            exposes: {
                './StoryCarousel': './src/StoryCarousel'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                }
            }
        })
    );

    return config;
}