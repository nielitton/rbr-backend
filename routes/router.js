const router = require("express").Router()

const employeeRouter = require("./employee")

router.use("/", employeeRouter)

module.exports = router