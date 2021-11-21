var express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000

var corsOptions = {
  origin: "http://localhost:5000"
}

app.use(express.json())

app.use(cors(corsOptions))


app.get("/catch", (req, res, next) => {
    let randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber < 5) res.json({ "data": true })
    else res.json({ "data": false })
})

app.get("/release", (req, res, next) => {
    let randomNumber = Math.floor(Math.random() * 50)

    function test_prime(n){
      if (n===1) return false
      if(n === 2) return true
      else {
        for(let x = 2; x < n; x++){
          if(n % x === 0) return false
        }
        return true;  
      }
    }

    if (test_prime(randomNumber)) res.json({ "data": true })
    else res.json({ "data": false })
})

app.post('/rename',  (req, res, next) => {
    const { prevNum, curNum }= req.body
    res.json({ "data": prevNum + curNum})
}) 

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
})