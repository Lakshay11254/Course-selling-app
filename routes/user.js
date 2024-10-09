const {Router} = require("express");

const userRouter = Router();    

    userRouter.post("/signup", function (req, res) {
        req.json({
            message: "signup endpoint"
        })
    })

    userRouter.post("/signin", function (req, res) {
        req.json({
            message: "signin endpoint"
        })
    })

    userRouter.get("/purchases", function (req, res) {
        req.json({
            message: "purchases endpoint"
        })
    })

    module.exports = {
        userRouter: userRouter
    }