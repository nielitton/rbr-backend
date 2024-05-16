const router = require("express").Router()

const employeeController = require("../controllers/employee.controller")

router.route("/employees").post((req, res) => employeeController.create(req, res))

module.exports = router