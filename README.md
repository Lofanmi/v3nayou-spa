# v3nayou-spa

微信哪有服务号, 做最好用的校园服务平台!

广州大学与中山大学的工具类应用, 支持广州大学教务成绩课表, 校历, 图书, 实时公交, 四六级, 公选课查询.

欢迎添砖加瓦~ 本项目为公众号自定义菜单的Go后端接口, 具体实现包含`首屏界面`, `微信授权`和`教务系统`.

对应的后端项目(Go): [https://github.com/Lofanmi/v3nayou](https://github.com/Lofanmi/v3nayou)

## Requirements

- Node 6+
- Nginx

## Deploy

```bash
# 克隆前端项目到本地
cd /home/wwwroot/
git clone https://github.com/Lofanmi/v3nayou-spa.git
# 安装依赖
npm i
# 开发模式
npm run dev
# 项目构建
npm run build
# 构建项目并查看包的使用报告
npm run build --report
```

## License

Apache-2.0
