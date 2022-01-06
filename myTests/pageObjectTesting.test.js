const { Builder, Capabilities, By,until } = require("selenium-webdriver") 

const chromedriver= require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const EmployeeePage=require('./pageObjects/employeePage')

const MyPage= new EmployeeePage(driver,'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')

// test("page Object Practice",async ()=>{
//     await MyPage.nawToHome()
//     await MyPage.clickEmployee("Bernice Ortiz")
//     await MyPage.verifyEmployee("Bernice Ortiz","4824334222","CEO")
//     await MyPage.changeEmployee("Geralt","123456789","Of Rivia")
// })

//for each

const oldEmployees=require('./testAssets/oldEmployees')
const newEmployees=require('./testAssets/newEmployees')
const { decorator } = require("babel-types")


beforeEach(async()=>{
    await MyPage.navToHome()
})
afterAll(async()=>{
    await MyPage.driver.quit()
})


describe("Data Driven With Page Objects", ()=>{
     test("Can verify the old employees", async ()=>{

for(let i=0; i<oldEmployees.lenght;i++){
await MyPage.clickEmployee(oldEmployees[i].name)
await MyPage.verifyEmployee(oldEmployees[i].name,oldEmployees[i].phone,oldEmployees[i].title)
}
})

test("Can change all the old employees to the new emloyyes", async ()=>{

    for(let i=0; i<newEmployees.lenght;i++){
    await MyPage.clickEmployee(oldEmployees[i].name)
    await MyPage.verifyEmployee(oldEmployees[i].name,oldEmployees[i].phone,oldEmployees[i].title)
    await MyPage.changeEmployee(newEmployees[i].name,newEmployees[i].phone,newEmployees[i].title)
    await MyPage.verifyEmployee(newEmployees[i].name,newEmployees[i].phone,newEmployees[i].title)
    }
    
  })


})