tsconfig.json

include 自动编译路径下的文件

npm i @types/koa
npm install koa-controllers --save
npm install reflect-metadata --save

## 初始化
安装 sequelize
npm i sequelize -S
npm i sequelize-cli -D
安装数据库依赖
npm i mysql2
sequelize init (.\node_modules\.bin\sequelize init)

初始化完成之后生成的目录
config: 配置目录
migrations：迁移文件（数据库表结构）
seeders： 种子文件（生成测试数据）
models： 模型文件

## 创建数据库
sequelize:db create (.\node_modules\.bin\sequelize db:create)

## 构建数据库的迁移结构
.\node_modules\.bin\sequelize migration:create --name user // 创建一张user表

## 数据库结构
- user: 用户表
用来存放用户的基本信息(用户名， 密码等)

- user-profile: 用户的扩展信息
用来存放用户不常用的信息(性别， 生日， 个人简介。。。不常用的数据)

- login-log: 用户的登陆日志
存放用户的登录日志(用户每一次登陆的时间， IP信息存放在这里)

- categoty: 美食分类表
用来存放美食分类信息(热菜， 凉菜。。。)

- cookbook: 存放美食信息
用来存放美食信息(标题， 图片等)

- step: 每一道美食的烹饪步骤
用来存放美食烹饪步骤， 在每一步骤又一个字段与cookbook表的id进行关联

- commit: 评论表
用来存放用户对某个具体的cookbook的评论

- favorite: 收藏夹
用来存放用户收藏的美食

## 数据库中创建表
- .\node_modules\.bin\sequelize db:migrate 生成表
- .\node_modules\.bin\sequelize db:migrate:undo:all 删除所有表

## 创建种子文件
- seeders 文件夹下创建假数据
- .\node_modules\.bin\sequelize seed:generate --name user // 创建假数据文件

## 导入种子文件的数据
.\node_modules\.bin\sequelize db:seed:all // 导入种子文件