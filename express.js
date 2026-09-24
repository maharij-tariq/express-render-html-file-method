import express from 'express'
const  app =  express()
const PORT = 3001;
import path from 'path'
const pathFile = path.resolve()

app.get('/',(req,res)=>{
 res.sendFile(path.join(pathFile,'index.html'));
})

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})