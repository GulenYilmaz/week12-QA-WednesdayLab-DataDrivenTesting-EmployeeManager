const { Builder, Capabilities, By,until } = require("selenium-webdriver") 

const chromedriver= require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()



const clickEmployee= require('./testAssets/clickEmployee')
const verifyEmployee= require('./testAssets/verifying')
const oldEmployees= require('./testAssets/oldEmployees')
const changeEmployee=require('./testAssets/changeEmployee')
const newEmployees = require("././testAssets/newEmployees")


beforeEach(async() =>{
    await driver.get('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')

    await driver.wait(until.elementLocated(By.css('#noEmployee')))
})
afterAll(async() => {
    await driver.quit()
})



describe("Data Driven Employee Manager Tests", () =>{
//Data Driven test
it("Can verify the old employee", async ()=>{

//for each loop
for (let i=0; i<oldEmployees.length; i++){
    await clickEmployee(driver, oldEmployees[i].name)
    await verifyEmployee(driver, oldEmployees[i].name,oldEmployees[i].phone,oldEmployees[i].title)
}
})
//other Data Driven test
it("Can change all 10 employees", async()=>{
   for(let i=0; i<newEmployees.length; i++){
    await clickEmployee(driver, oldEmployees[i].name)
    await verifyEmployee(driver, oldEmployees[i].name,oldEmployees[i].phone,oldEmployees[i].title) 
    await changeEmployee(driver, oldEmployees[i].name,oldEmployees[i].phone,oldEmployees[i].title)
    await verifyEmployee(driver, newEmployees[i].name,oldEmployees[i].phone,oldEmployees[i].title)

   }


    //second way
    // await clickEmployee(driver,oldEmployees[0].name)
    // await changeEmployee(driver, 'Snoop Dogg', '123456789', 'Big Dogg')
    // await verifyEmployee(driver, 'Snoop Dogg', '123456789', 'Big Dogg')
})

})












// test("Employee Test",async ()=>{
//     await driver.get('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')

//     await clickEmployee(driver,'Bernice Ortiz')
//     await verifyEmployee(driver,'Bernice Ortiz',"4824931093","CEO")
// })