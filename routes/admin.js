const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

// function middleware(password) {
//     return function(req, res, next) {
//         const token = req.headers.token;
//         const decoded = jwt.verify(token, password);

//         if (decoded) {
//             req.userId = decoded.id;
//             next()
//         } else {
//             res.status(403).json({
//                 message: "You are not signed in"
//             })
//         }    
//     }
// }

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

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
    adminMiddleware: adminMiddleware
}
// const {Router} = require("express");

// const adminRouter = Router();

// // adminRouter.use(addMiddleware);
//     adminRouter.post("/signup", function (req, res) {
//         res.json({
//             message: "courses endpoint"
//         })
//     })
//     adminRouter.post("/signin", function (req, res) {
//         res.json({
//             message: "courses endpoint"
//         })
//     })
//     adminRouter.post("/course", function (req, res) {
//         res.json({
//             message: "courses endpoint"
//         })
//     })

//     module.exports = {
//         adminRouter: adminRouter
// }