// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.office = officeNumber;
    }
    getRole(){
        return "Manager" 
     }
}

module.exports = Manager; 