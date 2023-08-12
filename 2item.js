const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

(async function myFunction() {
  // 创建一个driver实例
  const driver = new webdriver.Builder().forBrowser('chrome').build();
  const startTime = Date.now(); // 记录开始时间

  try {
    // 跳转到页面
    await driver.get('https://humanmade.jp/products/hm25cs046?variant=40710204555300');

    // 点击
    await driver.wait(until.elementLocated(By.className('recommendation-modal__button')));
    await driver.findElement(By.className('recommendation-modal__button')).click();

    // 选择颜色和尺码
    const label = await driver.findElement(By.css('label[for="template--14627344875556__main-1-2"]'));
    await label.click();

    let selectSize = await driver.findElement(By.id('Option-template--14627344875556__main-1'));
    let optionSize = await selectSize.findElement(By.css('option[value="L"]'));
    await selectSize.click();
    await optionSize.click();

    // 等待普通购买按钮加载完成并点击
    await new Promise(res => setTimeout(res, 1300));
    await driver.wait(until.elementLocated(By.id('nomalbtn')));
    await driver.findElement(By.id('nomalbtn')).click();
    await new Promise(res => setTimeout(res, 1300));

    // 跳转到页面2
    await driver.get('https://humanmade.jp/products/hm26gd004');
    await new Promise(res => setTimeout(res, 1300));

    // 点击2
    //await driver.wait(until.elementLocated(By.className('recommendation-modal__button')));
    //await driver.findElement(By.className('recommendation-modal__button')).click();

    // 选择颜色和尺码2
    const label1 = await driver.findElement(By.css('label[for="template--14627344875556__main-1-0"]'));
    await label1.click();

    let selectSize1 = await driver.findElement(By.id('Option-template--14627344875556__main-1'));
    let optionSize1 = await selectSize1.findElement(By.css('option[value="L"]'));
    await selectSize1.click();
    await optionSize1.click();

    // 等待普通购买按钮加载完成并点击2
    await new Promise(res => setTimeout(res, 1300));
    await driver.wait(until.elementLocated(By.id('nomalbtn')));
    await driver.findElement(By.id('nomalbtn')).click();
    await new Promise(res => setTimeout(res, 1300));


    // 等待加入购物车的按钮加载完成并点击
    await driver.wait(until.elementLocated(By.className('button button--primary button--full-width')));
    const button = await driver.findElement(By.className('button button--primary button--full-width'));
    await new Promise(res => setTimeout(res, 1250));
    await button.click();

    // 等待并填写邮箱和密码
    await driver.wait(until.elementLocated(By.id('CustomerEmail')));
    const emailField = await driver.findElement(By.id('CustomerEmail'));
    //await emailField.sendKeys('anthonyissey@hotmail.com');
    await emailField.sendKeys('lawrencehei@hotmail.com');

    await driver.wait(until.elementLocated(By.id('CustomerPassword')));
    const passwordField = await driver.findElement(By.id('CustomerPassword'));
    //await passwordField.sendKeys('Anthony6@');
    await passwordField.sendKeys('QWEasd123');
    await new Promise(res => setTimeout(res, 1000));

    // 点击登录按钮
    await driver.findElement(By.css('#customer_login button')).click();
    console.log('登录成功！');

    // 选择地址选项
    await driver.wait(until.elementLocated(By.id('checkout_shipping_address_id')));
    let selectElement = await driver.findElement(By.id('checkout_shipping_address_id'));
    let optionElement = await selectElement.findElement(By.css('option[value="7632364109860"]'));
    await selectElement.click();
    await optionElement.click();

    await new Promise(res => setTimeout(res, 1000));
    let paymentElement = await driver.findElement(By.id('continue_button_1'))
    await paymentElement.click();
    console.log('進入付款畫面！');

    // 繼續付款
    await new Promise(res => setTimeout(res, 1250));
    let paymentElement1 = await driver.findElement(By.id('continue_button'))
    await paymentElement1.click();



  } catch (error) {
    console.error('发生错误：', error);
    //await driver.navigate().refresh();
  } finally {

    const endTime = Date.now(); // 记录结束时间
    const totalTime = (endTime - startTime) / 1000; // 计算总时间，单位为
    console.log(`测试总共用时：${totalTime}秒`);

    // 关闭浏览器
    //await driver.quit();
  }
})();