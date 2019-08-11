'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 注意获取新闻数据

    let list = ['1111', '2222', '3333'];
    return list;
  }
}

module.exports = NewsService;
