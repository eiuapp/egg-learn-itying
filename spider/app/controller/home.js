'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, 首页';

    // 注意异步
    await ctx.render('index');
  }
}

module.exports = HomeController;
