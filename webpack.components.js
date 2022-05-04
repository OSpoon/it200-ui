const glob = require("glob");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

let entrys = {};

async function makrList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  }
}

makrList("components/lib", entrys);

module.exports = {
  mode: "development",
  entry: entrys,
  output: {
    filename: "[name].umd.js",
    path: path.resolve(__dirname, "dist"),
    library: "it200",
    libraryTarget: "umd",
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};
