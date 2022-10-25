
const fs = require("fs")

class Employee {

    constructor() {

        this.path = "employees.json"

        const content = fs.readFileSync(this.path, {
            encoding: 'utf-8'
        })

        this.data = JSON.parse(content)
    }

    saveData() {

        const content = JSON.stringify(this.data, null, 2)

        fs.writeFileSync(this.path, content, {
            encoding: 'utf-8'
        })
    }

    addEmployee(info) {
        // info = { name: "Umakant Vashishta", age: 30, role: "Software Developer", email: "abc@company.com" }
        
        // Create an Employee Id
        let id = 1
        const employees = this.data.employees

        employees.forEach(employee => {
            
            if (id <= employee.id) {
                id = employee.id + 1
            }
        })

        info.id = id

        employees.push(info)

        this.saveData()
    }

    getAll() {
        const employees = this.data.employees

        return employees
    }

    getById(id) {
        const employees = this.data.employees

        const employee = employees.find(item => item.id === id)

        return employee
    }

    updateInfo(info,id) {
        const employees = this.data.employees

        let index = null
    
        employees.find((item, idx) => {
            if (item.id === id) {
                index = idx
            }

            return item.id === id
        })
    
        if (index === null) {
            throw new Error('Employee does not exist')
        }
    
        employees[index] = info
    
        this.saveData()
    }

    deleteEmployee(id) {
        
        let index = null
        
        const employees = this.data.employees

        employees.find((item, idx) => {
            if (item.id === id) {
                index = idx
            }

            return item.id === id
        })

        if (index === null) {
            throw new Error('Employee does not exist')
        }

        employees.splice(index, 1)

        this.data.employees = employees
        
        this.saveData()

    }
}

module.exports = Employee