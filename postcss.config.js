module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      // 750*1334=375*667
      // 750*1624
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,// 保留的小数位数
      viewportUnit: 'vw',
      selectorBlackList: ['tab-bar', 'tar-bar-item', 'ignore'],// 不做转换的选择器
      minPixelValue: 1,// 小于等于 1px 不进行转化
      mediaQuery: false,// 允许媒体查询中转化
      exclude: [/NavBar/]
    }
  }
}