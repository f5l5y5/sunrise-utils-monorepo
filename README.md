# sunrise-utils-monorepo

## 1.创建项目

1.1 pnpm init
创建 pnpm-workspace.yaml 文件

```js
packages: -'packages/*'

"build": "pnpm -r run build",//依次打包packages下的所有文件
"watch": "pnpm --parallel -r run watch"// 监视文件变化

```

根目录下安装包 pnpm i -wD xxx

## 2.使用 changeset 进行版本管理

pnpm i -wD @changesets/cli
