const path = require('path');

const srcDirName = 'src';
const destDirName = 'dist';
const srcDir = path.join(__dirname, srcDirName);
const destDir = path.join(__dirname, destDirName);

module.exports = {
  srcDirName,
  destDirName,
  srcDir,
  destDir,
  development: {
    host: 'localhost',
    port: 3001,
    env: 'development'
  },
  production: {
    host: 'localhost',
    port: 3001,
    env: 'production'
  }
};
