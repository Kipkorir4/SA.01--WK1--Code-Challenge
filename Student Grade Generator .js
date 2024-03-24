// Prompting the user to input the marks
let marks = parseFloat(prompt('Enter student marks (between 0 and 100):'));

// Verifying that the input is within the valid range
if (marks >= 0 && marks <= 100) {
    // Determining the grade based on the input marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Outputting the grade to the user
    console.log(`The grade is ${grade}`);
} else {
    // Outputting an error message for invalid input and/or format
    console.log('Invalid input. Marks should be numbers between 0 and 100.');
}



