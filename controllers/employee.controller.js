const { Employee: EmployeeModel } = require("../models/employee")

const EmployeeController = {
    create: async (req, res) => {
        try {
            const employee = {
                name: req.body.employee,
                charge: req.body.employee,
                department: req.body.department,
                actions: req.body.actions
            }

            const response = await EmployeeModel.create(employee)

            res.status(201).json({ message: "Created employedd", employee: employee })
        } catch (error) {
            res.status(400).json({
                message: error
            })
        }
    }
}

module.exports = EmployeeController