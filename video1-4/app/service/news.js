'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 注意获取新闻数据

    let list = ['1111', '2222', '3333'];

    // 调用 service 中的其它（user) 服务的数据
    let user = await this.service.user.getUserInfo();
    console.log(user);

    return list;
  }
}

module.exports = NewsService;
