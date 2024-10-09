const { Router } = require("express")

const courseRouter = Router();
    courseRouter.post("/purchase", function (req, res) {
        req.json({
            message: "purchase endpoint"
        })
    })

    courseRouter.get("/", function (req, res) {
        req.json({
            message: "courses endpoint"
        })
    })

        module.exports = {
            courseRouter: courseRouter
        }