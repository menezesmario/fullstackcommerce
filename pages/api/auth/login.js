import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'


connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await llgin(req, res)
            break;
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body

        const user = await Users.findOne({ email })
        if(!user) return res.status(400).json({err: 'This user does not exists.'})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({err: 'Incorrect password.'})

        res.json({msg: "Register Success!"})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}