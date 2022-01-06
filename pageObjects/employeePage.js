const { By, until } = require("selenium-webdriver");

module.exports=class MyPage{
    driver;
    url;
    construtor(myDriver,myUrl){
        this.driver=myDriver
        this.url=myUrl
    }

    /* Selectors */

    noEmployee=By.css('#noEmployee')
    employeeName=By.css('#employeeTitle')
    nameInput=By.css('[name="nameEntry]')
    phoneInput=By.css('[name="phoneEntry"]')
    titleInput=By.css('[name="ttleEntry"]')
    saveButton=By.css('#saveBtn')


    /* Methods */
    // go to the home page
    async nawToHome(){
     await this.driver.get(this.url)

     await this.driver.wait(until.elementLocated(this.noEmployee))
    }

    async clickEmployee(name){
        let emp= By.xpath(`//li[text()=${name}]`)
        let employeeClick= await this.driver.findElement(emp)
        await employeeClick.click()

        let empName=await this.driver.findElement(this.employeeName).getText()

        expect(empName).toBe(name)
    }
    async verifyEmployee(name,phone,title){
        let empName=await this.driver.findElement(this.employeeName).getText()
        expect(empNmae).toBe(name)
        let phoneNumber=await this.driver.findElement(this.phoneInput).getAttribute('value')
        expect(phoneNumber).toBe(phone)
        let empTitle=await this.driver.findElement(this.titleInput).getAttribute('value')
        expect(empTitle).toBe(title)

    }
    async changeEmployee(name,phone,title){
        let nameBox=await this.driver.findElement(this.nameInput)
        await nameBox.clar()
        await nameBox.sendKeys(name)

       
        let phoneBox=await this.driver.findElement(this.phoneInput)
        await phoneBox.clar()
        await phoneBox.sendKeys(phone)

        let titleBox=await this.driver.findElement(this.titleInput)
        await titleBox.clar()
        await titleBox.sendKeys(title)
        
        await this.driver.findElement(this.saveButton).click()
    let nameText= await this.driver.findElement(this.employeeName).getText()
    expect(nameText).toBe(name)



    }
}