const core = require('@actions/core');

const pass = core.getInput('pass', { required: true });

module.exports = {
  name: "王宝",
  subject: "测试提醒",
  user: "838181576@qq.com",
  pass,
  to: "339583983@qq.com"
}