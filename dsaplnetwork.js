let studentsDSA = [];
let studentsPL = [];
let studentsNetworks = [];

let subjects = ["DSA", "PL", "Networks"];
let operations = ["Enroll", "Unenroll", "Select Another Subject", "Exit"];

function displaySubjects() {
  let subjectList = "Select a subject to enroll a student:\n";
  for (let i = 0; i < subjects.length; i++) {
    subjectList += `${i + 1}. ${subjects[i]}\n`;
  }
  return subjectList;
}

function displayOperations() {
  let operationList = "Select an operation:\n";
  for (let i = 0; i < operations.length; i++) {
    operationList += `${i + 1}. ${operations[i]}\n`;
  }
  return operationList;
}

function enrollStudent(subject, studentName) {
  if (subject === "DSA") {
    studentsDSA.push(studentName);
  } else if (subject === "PL") {
    studentsPL.push(studentName);
  } else if (subject === "Networks") {
    studentsNetworks.push(studentName);
  }
  alert(`${studentName} enrolled in ${subject}`);
}

function unenrollStudent(subject, studentName) {
  let studentArray;
  if (subject === "DSA") {
    studentArray = studentsDSA;
  } else if (subject === "PL") {
    studentArray = studentsPL;
  } else if (subject === "Networks") {
    studentArray = studentsNetworks;
  }

  if (studentArray.length === 0) {
    alert("No students enrolled in this subject.");
    return;
  }

  let enrolledStudents = displayEnrolledStudents(subject);
  alert(enrolledStudents);

  let nameToUnenroll = prompt(`Enter the name of the student to unenroll from ${subject}:`);

  let index = studentArray.indexOf(nameToUnenroll);
  if (index > -1) {
    studentArray.splice(index, 1);
    alert(`${nameToUnenroll} unenrolled from ${subject}`);
  } else {
    alert(`${nameToUnenroll} is not enrolled in ${subject}`);
  }
}

function displayEnrolledStudents(subject) {
  let studentList = `Enrolled students in ${subject}:\n`;
  let studentArray;
  
  if (subject === "DSA") {
    studentArray = studentsDSA;
  } else if (subject === "PL") {
    studentArray = studentsPL;
  } else if (subject === "Networks") {
    studentArray = studentsNetworks;
  }

  if (studentArray.length === 0) {
    studentList += "No students enrolled in this subject.";
  } else {
    for (let i = 0; i < studentArray.length; i++) {
      studentList += `${i + 1}. ${studentArray[i]}\n`;
    }
  }
  return studentList;
}

function startProgram() {
  while (true) {
    let subjectChoice = parseInt(prompt(displaySubjects())) - 1;

    if (subjectChoice < 0 || subjectChoice >= subjects.length) {
      alert("Invalid subject choice. Please try again.");
      continue;
    }

    let selectedSubject = subjects[subjectChoice];

    while (true) { // Inner loop for operations
      let operationChoice = parseInt(prompt(displayOperations())) - 1;

      if (operationChoice < 0 || operationChoice >= operations.length) {
        alert("Invalid operation choice. Please try again.");
        continue;
      }

      const selectedOperation = operations[operationChoice];

      if (selectedOperation === "Enroll") {
        let studentName = prompt(`Enter the student's name to enroll in ${selectedSubject}:`);
        enrollStudent(selectedSubject, studentName);
      } else if (selectedOperation === "Unenroll") {
        unenrollStudent(selectedSubject);
      } else if (selectedOperation === "Select Another Subject") {
        break; 
      } else if (selectedOperation === "Exit") {
        let finalEnrollment = "";
        for (let subject of subjects) {
          finalEnrollment += displayEnrolledStudents(subject) + "\n";
        }
        alert("Exiting the program.\n" + finalEnrollment);
        return; 
      }
    }
  }
}

startProgram();
