const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;
const { Actions } = require('selenium-webdriver/lib/input');

async function runScript() {
  const driver = new webdriver.Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://humanmade.jp/products/hm25te0718');
    await driver.wait(until.elementLocated(By.className('recommendation-modal__button')));
    await driver.findElement(By.className('recommendation-modal__button')).click();

    const label = await driver.findElement(By.css('label[for="template--14627344875556__main-1-2"]'));
    const input = await driver.findElement(By.id('template--14627344875556__main-1-2'));

    await label.click();
    await input.click();

    const label2 = await driver.findElement(By.css('label[for="Option-template--14627344875556__main-1"]'));
    const input2 = await driver.findElement(By.id('Option-template--14627344875556__main-1'));

    await label2.click();
    await input2.click();


  } catch (error) {
    console.error(error);
  } finally {
    //await driver.quit();
  }
}

runScript();