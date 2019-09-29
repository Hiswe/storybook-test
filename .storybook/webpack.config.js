const path = require('path');

const componentsPath = path.resolve(__dirname, `../stories`);

// Support Scss and Pug
// https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
module.exports = async ({ config, mode }) => {
    // https://vue-loader.vuejs.org/guide/pre-processors.html#sass
    config.module.rules.push({
        test: /\.scss$/,
        loaders: [`style-loader`, `css-loader`, `sass-loader`],
        include: componentsPath,
    });

    // https://www.npmjs.com/package/storybook-addon-vue-info
    config.module.rules.push({
        test: /\.vue$/,
        loader: `storybook-addon-vue-info/loader`,
        enforce: `post`,
    });

    return config;
};
