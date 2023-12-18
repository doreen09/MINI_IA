const express= require ('express')
const mongoose = require ('mongoose')

const app= express()

app.listen(3000,()=>{
    console.log("Node api")
})
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('hello NODE API')
}
)

mongoose.connect('mongodb+srv://doreen_09:Doreenn1810.@cluster0.8jvubnd.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB')

    app.listen(3000,()=>{
        console.log('Node api is running on a port 3000')
    })
}).catch((error)=>{
    console.log(error)
})