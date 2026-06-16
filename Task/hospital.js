let patients = [];
const doctors=[
    {id:1,name:"Dr.Vishal Yadav", specialization:"Cardiology"},
    {id:1,name:"Dr.Akash Yadav", specialization:"Neurology"},
    {id:1,name:"Dr.Ashish Yadav", specialization:"Heart Surgeon"},
    {id:1,name:"Dr.Nikhil", specialization:"Dentist"},
];
const appointments=[];
function addPatient(name, age, disease) {
    let patient = {
        name: name,
        age: age,
        disease: disease
    };
    patients.push(patient);
    console.log("Patient Added Successfully");
}
function showPatients() {
    console.log("\nPatients List:");   
    for (let i = 0; i < patients.length; i++) {
        // console.log("Patient " + (i + 1));
        // console.log("Name: " + patients[i].name);
        // console.log("Age: " + patients[i].age);
        // console.log("Disease: " + patients[i].disease);
         console.log(`Patient  ${(i + 1)} , Name:  ${patients[i].name} , Age: ${patients[i].age} , Disease: ${patients[i].disease}`);
    }
}
function showDoctors() {
    console.log("\nDoctors List:");   
    for (let i = 0; i < Doctors.length; i++) {
        // console.log("Patient " + (i + 1));
        // console.log("Name: " + patients[i].name);
        // console.log("Age: " + patients[i].age);
        // console.log("Disease: " + patients[i].disease);
        console.log(`Doctors  ${(i )} , Name:  ${Doctors[i].name} , Age: ${Doctors[i].age} , Disease: ${Doctors[i].disease}`);
    }
}
function bookAppointment(patientId,doctorId,date){
    const appointment={
        patientId,
        doctorId,
        date
    }
    appointments.push(appointment);
    console.log("Appointment Booked:", appointment);
}
function showAppointments(patientId,doctorId,date) {
    const appointment={
        patientId,
        doctorId,
        date
    };
    appointments.push(appointment);
    console.log("Appointment Booked:",appointment);
}
function generateBill(doctorFee,medicinecost){
    const total=doctorFee+medicinecost;
    console.log("Total Bill=",total);
}
addPatient("Vishal", 21, "Fever");
addPatient("Rahul", 22, "Cold");
addPatient("Akash",21,"Fever")
showPatients();




bookAppointment(1,2,"15-06-2026");
bookAppointment(2,3,"16-06-2026");
bookAppointment(3,1,"16-06-2026");
showAppointments();

// generateBill(500,300);