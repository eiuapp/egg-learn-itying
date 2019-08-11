'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    let list = await this.service.news.getNewsList();
    console.log(list);
    // ctx.body = '新闻';
    ctx.body = list;
  }
}

module.exports = NewsController;
