import express from 'express'
const app = express()
const PORT = 3003;
import fs from 'fs'

app.get('/',(req,res)=>{
  const html = fs.readFileSync('index.html', 'utf8')
  res.send(html)
})
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})