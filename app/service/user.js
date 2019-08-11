'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserInfo() {
    let name = { name: 'zhangsan', age: 25 };
    return name;
  }
}

module.exports = UserService;
