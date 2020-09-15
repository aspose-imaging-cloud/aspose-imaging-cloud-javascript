const path = require('path');

module.exports = {
    mode: "development",
    entry: './test/api/ImagingApi.spec.js',
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js",
        library: 'ImagingApiTests',
        libraryTarget: "window"
    },
    resolve: {
        extensions: ['.js'],
        modules: ["AsposeimagingCloudApiReference", path.resolve(__dirname, 'src'), path.resolve(__dirname, 'test'), path.resolve(__dirname, 'node_modules')]
    },
    target: "web"
};
