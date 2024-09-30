const express = require('express')

const router = express.Router()

// Lo que se solicita de la carpeta public, se envía directamente
router.get('/public',(req,res) => {
  res.sendFile(__dirname + "/public");
})

// Obtener las peliculas solicitadas
// router.get('/peliculas/:titulo', (req, res) => {
//   getPelis(req.params.titulo)
//     .then((items) => {
//       items = items.map((item) => ({
//         title: item.title,
//         year: item.year
//       }))
//       res.json(items)
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).end()
//     })
// })

// // Postear una pelicula
// router.post('/peliculas', (req, res) => {
//   const item = req.body
//   console.log(req.body)
//   const result = itemSchema.validate(item)
//   if (result.error) {
//     console.log(result.error)
//     res.status(400).end()
//     return
//   }
//   insertItem(item)
//     .then(() => {
//       res.status(200).end()
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).end()
//     })
// })


module.exports = router
