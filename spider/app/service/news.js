'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取接口返回数据
    // curl的方法获取远程的数据
    let api = this.config.api + 'appapi.php?a=getProtalList&catid=20&page=1';
    let response = await this.ctx.curl(api);
    // console.log(response);
    console.log(response.data); // 返回的是 Buffer

    let data = JSON.parse(response.data); // 把 Buffer 转成 对象

    console.log(data);

    return data;
  }
}

module.exports = NewsService;
