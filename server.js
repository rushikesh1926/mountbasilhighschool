const exp=require('express')

const app=exp()

const path=require("path")

require('dotenv').config()


app.use(exp.static(path.join(__dirname,'./dist/cinebee/')))




const port=process.env.PORT ||8080 ;
app.listen(port,()=>console.log(`server is running on ${port}`))
