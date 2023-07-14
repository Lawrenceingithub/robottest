const { Builder, By, until } = require('selenium-webdriver');

(async function myFunction() {
  // 创建一个driver实例
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 跳转到页面
    await driver.get('https://humanmade.jp/products/hm25te0714');
    await new Promise(res => setTimeout(res, 1000));

    //定位到購買按钮, 并点击
    await driver.findElement(By.className('recommendation-modal__button')).click();
    await driver.findElement(By.id('nomalbtn')).click();
    await new Promise(res => setTimeout(res, 2000));

    await driver.wait(until.elementLocated(By.className('button button--primary button--full-width')));
    const button = await driver.findElement(By.className('button button--primary button--full-width'));
    await button.click();

    await new Promise(res => setTimeout(res, 1000));
    // 等待并填写邮箱和密码
    await driver.wait(until.elementLocated(By.id('CustomerEmail')));
    const emailField = await driver.findElement(By.id('CustomerEmail'));
    await emailField.sendKeys('lawrencehei@Hotmail.com');

    await driver.wait(until.elementLocated(By.id('CustomerPassword')));
    const passwordField = await driver.findElement(By.id('CustomerPassword'));
    await passwordField.sendKeys('QWEasd123');

    // 点击登录按钮
    await driver.findElement(By.css('#customer_login button')).click();


    console.log('登录成功！');
  } catch (error) {
    console.error('登录失败：', error);
  }  finally {
    // 关闭浏览器
    //await driver.quit();
  }
})();