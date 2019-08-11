('use strict');

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = '新闻页面';

    let msg = 'ejs';
    let list = ['1111', '2222', '3333'];
    await this.ctx.render('news', {
      msg: msg,
      list
    });
  }

  async content() {
    // 获取 get 传值
    // koa 中如何获取 get 传值： ctx.query

    // egg.js 中获取 get 传值
    let query = this.ctx.query;
    console.log(query);

    this.ctx.body = '新闻详情';
  }

  async newslist() {
    // koa 获取动态路由传值 ctx.params

    // egg.js 中获取动态路由传值

    let params = this.ctx.params;
    console.log(params);
    this.ctx.body = '新闻列表';
  }
}

module.exports = NewsController;
