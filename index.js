const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async () => {const { Builder, By, Key, until } = require('selenium-webdriver');

// 创建一个 Chrome WebDriver 实例
let driver = new Builder().forBrowser('chrome').build();

// 加载网页
driver.get('https://www.fsm.gov.mo/');

try {
  // 等待 id 为 cht 的元素可见
  let element = await driver.wait(until.elementLocated(By.id('cht')), 10000);
  // 点击 id 为 cht 的元素
  await element.click();
} finally {
  // 关闭浏览器
  await driver.quit();
}
})();