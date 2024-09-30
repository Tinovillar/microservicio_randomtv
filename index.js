const express = require('express');
const bodyParser = require('body-parser')
//const routes = require('./routes')

const app = express()
const port = 3000

app.use(bodyParser.json())
// Añadimos las rutas
//app.use(routes)

app.get('/random_top_tv', async (req, res) => {
    let text = '';
    // let randomTopTv = getRandomTopTv();
    let randomTopTv = "cars";
    try {
        let randomPrice = await getRandomPrice(); // Espera el resultado de la promesa
        text = `${randomTopTv} es una de las series más vistas y puedes comprarla por ${randomPrice}`;
        res.send({"texto": text});
    } catch (error) {
        // Manejo de errores si la promesa falla
        res.status(500).send({"error": "Hubo un problema al obtener el precio."});
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function getRandomTopTv() {
    let randomTopTv;
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        randomTopTv = await response.json();
      } catch (error) {
        console.error(error.message);
      }
    return randomTopTv;
}

async function getRandomPrice(){
    let randomPrice;
    try {
        const response = await fetch("https://preciotawd.onrender.com");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        randomPrice = await response.json();
      } catch (error) {
        console.error(error.message);
      }
    return `$${randomPrice.precio} ${randomPrice.moneda}`;
}