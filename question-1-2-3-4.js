
//❓❓ LAB QUESTION 1:
//Below this line, fill in the array named "assignments" with the string values
//from question one in the lab.

let assignments = ["Lab1","Lab 2","MidTerm","Lab 3","Project","Final Exam"];


//❓❓ LAB QUESTION 2:
//Below this line, declare an array named "grades" with the numeric values
//from question one in the lab.

let grades = [90, 80, 78, 81, 91, 89];


//❓❓ LAB QUESTION 3:
//Below this line, declare an array named "grades" with the numeric values
//from question one in the lab.
console.log("Grades:");
for ( let i = 0; i < assignments.length; i++ ){
    console.log(assignments[i], grades [i]);
}


//❓❓ LAB QUESTION 4:
//Calculate the average grade and print it out:


let sum = 0;
for (let j = 0; j < grades.length; j++){
  sum = sum + grades[j]
}
console.log ("average grade:", sum/grades.length);

