import User from "../models/User.js"

export const registerUser = async (req,res) => {
    try{
        const {name, email, password}=req.body;

        const existuser = await User.findOne({email});

        if (existuser) {
            return res.status(400).json({
                message: "Email already exist"
            });
        }

        const user = await User.create({
            name, email,password
        });

        res.status(201).json({
            message:"Registration successfull",
            user
        })
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const loginUser= async(req,res) => {
    try{
    const {email,password} = req.body;
    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({
            message: "user not found"
        })
    }

    res.status(200).json({
        message:"Login successful",
        user: {
                 id: user._id,
                name: user.name,
                email: user.email,
                role: user.role 
        }
    });
}
catch(err){
    res.json({
        message: err.message
    })
}
}

export default {
    registerUser,
    loginUser,
}