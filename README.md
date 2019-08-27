# schoolLife

## 项目描述

校园生活小程序的后台，为[微信小程序](https://github.com/lz-allen/miniProgram)提供接口

## 安装

项目搭建需要依赖 node
我所使用的版本为

```js
~/Workspace/schoolLife(master⚡) » npm -v
6.9.0

~/Workspace/schoolLife(master⚡) » node -v
v10.16.0
```

- 克隆到本地：

```js
git clone git@github.com:lz-allen/schoolLife.git
```

- 项目部署

没有安装 yarn 的同学可以使用一下命令安装

```js
sudo npm -g install yarn
```

本项目使用的是 yarn 包管理，项目启动前要安装依赖，若依赖已存在请删除 node_modules 之后重新安装依赖

```js
yarn
```

- 项目启动

```js
yarn start
```

## 目录结构

```markdown
├── app.js
├── bin
│   └── www
├── config.js
├── controller
│   ├── chat.js
│   ├── express.js
│   ├── mine.js
│   ├── order.js
│   ├── publish.js
│   ├── user.js
│   └── websocket.js
├── middleware
│   ├── auth
│   │   └── index.js
│   ├── func
│   │   ├── db.js
│   │   ├── file.js
│   │   └── index.js
│   ├── index.js
│   ├── rule
│   │   └── index.js
│   └── send
│       └── index.js
├── models
│   ├── address.js
│   ├── chat.js
│   ├── chatImgList.js
│   ├── order.js
│   ├── publish.js
│   └── user.js
├── mongodb.js
├── package.json
├── public
│   └── images
│       └── Thumbs.db
├── routes
│   └── index.js
├── utils
│   └── fetch.js
└── yarn.lock
```

## 技术栈

- backend: nodejs （koa)
- database: mongodb
- fontend: 微信小程序

## 版权说明

该项目遵循了 MIT 授权许可
