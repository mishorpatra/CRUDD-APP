import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    mobile: Number
})

const postUser = mongoose.model('user', userSchema)
export default postUser