// remix.config.js
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildDirectory: "build",
  publicPath: "/build/",
  output: "static",  // Enable static output
};
