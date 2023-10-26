const fs = require('fs');
const yaml = require('yaml');

function loadConfig() {
  try {
    const configPath = 'C:/Users/SANJAY/Documents/PROGRAMMING/PROJECTS/DBMS project/QuickPick/backend/config/config.yaml';
    const config = yaml.parse(fs.readFileSync(configPath, 'utf8'));
    return config;
  } catch (e) {
    throw new Error('Error loading configuration: ' + e);
  }
}

module.exports = loadConfig;
