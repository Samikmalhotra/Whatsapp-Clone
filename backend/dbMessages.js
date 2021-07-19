import mongoose from 'mongoose'

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    recieved: Boolean
})

export default mongoose.model('messageContent', whatsappSchema)