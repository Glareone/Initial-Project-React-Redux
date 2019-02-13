module.exports = (api) => {
  const presets = [
    [
      "@babel/env", {
        useBuiltIns: "entry",
        modules: false
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "react-hot-loader/babel"
  ];

  api.cache(() => process.env.NODE_ENV);

  return {
    presets,
    plugins
  };
}