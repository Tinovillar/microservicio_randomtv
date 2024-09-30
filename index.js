const express = require('express');
const bodyParser = require('body-parser')
//const routes = require('./routes')

const app = express()
const port = 3000

app.use(bodyParser.json())
// Añadimos las rutas
//app.use(routes)

app.get('/random_top_tv', (req, res) => {
    let text = '';
    // let randomTopTv = getRandomTopTv();
    // let randomPrice = getRandomPrice();
    // text = `${randomTopTv} es una de la series mas vistas y podes comprarla por ${randomPrice}`;
    res.send({"text":text});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function getRandomTopTv() {
    let randomTopTv;
    const response = await fetch(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        randomTopTv = await response.json();
        console.log(randomTopTv);
      } catch (error) {
        console.error(error.message);
      }
    return randomTopTv;
}

async function getRandomPrice(){
    let randomPrice;
    const response = await fetch(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        randomPrice = await response.json();
        console.log(randomPrice);
      } catch (error) {
        console.error(error.message);
      }
    return randomPrice;
}