import express from 'express'
const app = express()
const PORT= 3006;


app.use(express.static('public'))

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})