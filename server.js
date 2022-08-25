// const express = require('express')
const webdriver = require('selenium-webdriver')
// const webdriver = require('selenium-webdriver');

// const PORT=3000
// const LINK=`http://localhost:${PORT}/`
// const app = express()
 
// app.get('/', function (req, res) {
//   res.status(200).send(`<h1 style='color:blue'>hello dosto</h1>`)
// })
 
// app.listen(PORT,()=>{
//     console.log(`server connected successfully on ${LINK} `);
// })
// https://www.cutebabyvote.com/august-2022/?contest=photo-detail&photo_id=95365
let voteCount = 0;
let voterMachine = () =>{
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    By= webdriver.By

    driver.get('https://www.cutebabyvote.com/august-2022/?contest=photo-detail&photo_id=95365').then(data=>{
        console.log("loaded successfully");
    driver.findElement(By.className('pc-image-info-box-button')).then(button=>{
        console.log("Button loaded", );
        button.click().then(success=>{
            voteCount +=1
            console.log("Total Votes given", voteCount);
            driver.quit()
        })
    })
    .catch(err=>{
        console.log("not find");
    }
    )

    }).catch(err=>{
        console.log("not loaded");
    })
}

setInterval(() => {
 voterMachine()   
}, 1800000);