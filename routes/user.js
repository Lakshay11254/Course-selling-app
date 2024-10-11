const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);

    if (decoded) {
        req.userId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }

}

module.exports = {
    userMiddleware: userMiddleware
}
// const {Router} = require("express");

// const userRouter = Router();    

//     userRouter.post("/signup", function (req, res) {
//         res.json({
//             message: "signup endpoint"
//         })
//     })

//     userRouter.post("/signin", function (req, res) {
//         res.json({
//             message: "signin endpoint"
//         })
//     })

//     userRouter.get("/purchases", function (req, res) {
//         res.json({
//             message: "purchases endpoint"
//         })
//     })

//     module.exports = {
//         userRouter: userRouter
//     }   