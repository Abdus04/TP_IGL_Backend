const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  // puis :
  try {
    await driver.get("http://localhost:3000/");
    const promo2Cp = await driver.findElement(
      By.xpath('//*[@id="root"]/div/div[1]/div/button[2]')
    );
    promo2Cp.click();

    const promo1Cs = await driver.findElement(
      By.xpath('//*[@id="root"]/div/div[1]/div/button[3]')
    );
    promo1Cs.click();

    const promo2Cs = await driver.findElement(
      By.xpath('//*[@id="root"]/div/div[1]/div/button[4]')
    );
    promo2Cs.click();

    const promo3Cs = await driver.findElement(
      By.xpath('//*[@id="root"]/div/div[1]/div/button[5]')
    );
    promo3Cs.click();

    const promo1Cp = await driver.findElement(
      By.xpath('//*[@id="root"]/div/div[1]/div/button[1]')
    );
    promo1Cp.click();

    const add = await driver.findElement(
      By.xpath('//*[@id="root"]/div/div[2]/div[3]/div/div[1]/div[2]/button[1]')
    );
    add.click();

    await driver
      .findElement(By.xpath('//*[@id="popup"]/form/div[1]/input[1]'))
      .sendKeys("HAMID");
    await driver
      .findElement(By.xpath('//*[@id="popup"]/form/div[1]/input[2]'))
      .sendKeys("imad pir");
    await driver
      .findElement(By.xpath('//*[@id="popup"]/form/div[1]/input[3]'))
      .sendKeys(3);
    const Valider = await driver.findElement(
      By.xpath('//*[@id="popup"]/form/div[2]/button[2]')
    );
    Valider.click();
    const Supprimer = await driver.findElement(
      By.xpath(
        '//*[@id="root"]/div/div[2]/div[3]/div/div[2]/div/div[2]/button[2]'
      )
    );
    Supprimer.click();
    promo3Cs.click();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Success");
    try {
      //await driver.quit();
    } catch (error) {
      console.log(`error quitting selenium`);
    }
  }
})();
