const path = require("path");
const ArcGISPlugin = require("@arcgis/webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    mode: "development",
    plugins: [
        new ArcGISPlugin(),
    ]
}