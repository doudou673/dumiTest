/*
 * @Author: Dong qi
 * @Date: 2022-08-22 19:50:59
 * @LastEditors: Dong qi
 * @LastEditTime: 2022-11-17 11:00:42
 * @Description:
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi-lib',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/dumiTest',
  publicPath: '/',
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {},
  // more config: https://d.umijs.org/config
});
