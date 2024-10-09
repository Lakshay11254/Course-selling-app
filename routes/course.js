app.post("/course/purchase", function (req, res) {
    req.json({
        message: "purchase endpoint"
    })
})

app.get("/courses", function (req, res) {
    req.json({
        message: "courses endpoint"
    })
})