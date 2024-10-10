const {Router} = require("express");

const adminRouter = Router();

// adminRouter.use(addMiddleware);
    adminRouter.post("/signup", function (req, res) {
        res.json({
            message: "courses endpoint"
        })
    })
    adminRouter.post("/signin", function (req, res) {
        res.json({
            message: "courses endpoint"
        })
    })
    adminRouter.post("/course", function (req, res) {
        res.json({
            message: "courses endpoint"
        })
    })

    module.exports = {
        adminRouter: adminRouter
}