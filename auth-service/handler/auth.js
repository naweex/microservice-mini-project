const authRouter = require("express").Router();
authRouter.post('/register' , async(req , res , next) => {
    try {
        const {name , email , password} = req.body
    } catch (error) {
        next(error)
    }
})
module.exports = {
    authRouter
}