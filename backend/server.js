import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'

const app = express()
const port = process.env.PORT || 9000


const connection_url = 'mongodb+srv://admin:ItwP3lVgKbHARPRM@cluster0.ki23j.mongodb.net/whatsapp?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
})

app.get('/messages/new', (req,res)=>{
    res.send('to')
})

app.post('/messages/new', (req,res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.listen(port,()=>{
    console.log('Listening on localhost:'+port)
})
