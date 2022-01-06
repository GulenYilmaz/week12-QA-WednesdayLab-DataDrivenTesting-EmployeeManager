const {By,until}=require ('selenium-webdriver')

module.exports=async (driver, name, phone, title)=>{

let empName= await driver.findElement(By.css('#employeeTitle')).getText()
expect(empName).toBe(name)

let phoneNumber= await driver.findElement(By.css('[name="phoneEntry"]')).getAttribute('value')
expect(phoneNumber).toBe(phone) 

let empTitle= await driver.findElement(By.css('[name="titleEntry"]')).getAttribute('value')
expect(empTitle).toBe(title) 

}