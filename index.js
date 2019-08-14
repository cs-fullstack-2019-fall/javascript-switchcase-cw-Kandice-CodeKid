// alert("Hello");

//
// ### Problem 1:
// Put the start of your program in a main function. Ask the user to enter a number to print. Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.
//

let chooseNum =prompt("Enter number to print");
switch (chooseNum) {
    case "1":
        console.log(1);
        break;
    case "2":
        console.log(2);
        break;
    case "3":
        console.log(3);
        break;
    case "4":
        console.log("4");
        break;
    case "5":
        console.log("5");
        break;
    default:
        alert("Number outside of number scope. Trya a number 1 - 5");

}




// ### Problem 2:
//     Put the start of your program in a main function. Ask the user to enter a 3 digit binary number. Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.
//


let binNum =prompt("Enter a 3 digit binary number");
switch (binNum) {
    case "1":
        console.log("1");
        break;
    case "10":
        console.log("2");
        break;
    case "11":
        console.log("3");
        break;
    case "100":
        console.log("4");
        break;
    case "101":
        console.log("5");
        break;
    default:
        alert("Not a Binary Number")

}



// ### Problem 3:
// Put the start of your program in a main function. Create an attendance array. Ask the user if a teacher, student, or parent is checking in. Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose. Repeat this five times.
//
// <strong>Challenge</strong>: Do the above program until the user enter's 'q'. Also, print and add to the array via a function call to the appropriate teacher/student/parent function.

let 