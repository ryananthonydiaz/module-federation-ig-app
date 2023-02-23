const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = function override(config) {
    config.output.publicPath = 'auto';

    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.unshift(
        new ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                // We add ourselves as a remote because we want the 'host' and 'story'
                // applications to look at the same instance of the story-store module
                // and importing both through the remote ensures that we will.
                host: process.env.REACT_APP_HOST_URL, 
                story: process.env.REACT_APP_STORY_URL,
            },
            exposes: {
                './story-store': './src/hooks/createStoryStore'
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