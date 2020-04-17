// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name, email, id, githubUsername){
        super(name, email, id);
        this.github = githubUsername;

    }
    getRole(){
       return "Engineer" 
    }
}

module.exports = Engineer; 