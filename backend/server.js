import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'

const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1237823",
    key: "fd211887e7f50f7c5810",
    secret: "cc9f877c3558522ce993",
    cluster: "ap2",
    useTLS: true
  });

const connection_url = 'mongodb+srv://admin:ItwP3lVgKbHARPRM@cluster0.ki23j.mongodb.net/whatsapp?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json())


const db = mongoose.connection;
db.once('open',()=>{
    console.log('DB is connected')

    const msgCollection = db.collection('messagecontent')
    const changeStream = msgCollection.watch();
})


app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
})

app.get('/messages/sync', (req,res)=>{
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
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
