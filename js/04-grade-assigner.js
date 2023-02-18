let grade = prompt('Enter a number between 1 and 100');

if (grade < 1 || grade > 100) {
    alert("Sorry, the grade score must be between 1 and 100. Please try again.");
} else {
    if (grade >= 60 && grade <= 69) {
        console.log('You received a D');
    } else if (grade >= 70 && grade <= 79) {
        console.log('You received a C');
    } else if (grade >= 80 && grade <= 89) {
        console.log('You received a B');
    } else if (grade >= 90 && grade <= 100) {
        console.log('You received an A');
    } else if (grade < 60) {
        console.log('You received an F');
    }
}