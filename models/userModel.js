import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    root: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/recode/image/upload/v1612621735/avatar_hcaail.png'
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model ('user', userSchema)
export default Dataset