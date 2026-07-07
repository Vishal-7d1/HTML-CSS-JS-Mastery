class employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    work() {
        console.log("Employee is working in Parent Class")
    }
    showDetails() {
        console.log(this.name);
        console.log(this.id);
    }
}
class Developer extends employee {
    constructor(id, name, language) {
        super(id, name);
        this.language = language;
    }
    writeCode() {
        console.log("Developer class is working");
    }
    work() {
        console.log("working Dev class inheriting employee");
    }
}
class FrontendDeveloper extends Developer {
    constructor(id, name, language, framework) {
        super(id, name, language);
        this.framework = framework;
    }
    buildUI() {
        console.log("Frontend Developer class is creating UI");
    }
    work() {
        console.log("Frontend Developer class is working and inherites developer class");
    }
}
class Manager extends employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    }
    conductMeeting() {
        console.log("Manager class is conducting meeting");
    }
    work() {
        console.log("Manager is conducting a meeting ");
    }
}
const employees = new employee(25303, "Vishal Yadav");
const frontendDev = new FrontendDeveloper(25305, "Akash Yadav", "JavaScript", "React");
const manager = new Manager(54663, "Vidit", 10);

console.log(employees);
console.log(frontendDev);
console.log(manager );

employees.work(employee);
employees.showDetails();

frontendDev.work();
frontendDev.writeCode();
frontendDev.buildUI();

manager.work();
manager.conductMeeting();