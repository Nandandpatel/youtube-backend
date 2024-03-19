import {asyncHandler} from "../utilis/asyncHandler.js"

const registerUser =asyncHandler(async (req,res) => {
    res.status(400).json({
        message:"ok"
    })
})

export{
    registerUser,
}