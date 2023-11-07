const ts_config = require('./tsconfig.json')
const { baseUrl, paths } = ts_config.compilerOptions

const getAliases = () => {
  return Object.entries(paths).reduce((aliases, alias) => {
    const key = alias[0].replace('/*', '')
    const value = baseUrl + alias[1][0].replace('*', '')
    return {
      ...aliases,
      [key]: value,
    }
  }, {})
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root:["."],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
          '.svg',
          '.jpg',
          '.json'
        ],
        alias: getAliases()
        // alias:{
        //   '@components': './src/components/',
        //   '@rtk': './src/redux/',
        //   '@utils': './src/utils/'
        // }
      }
    ]
  ]
};