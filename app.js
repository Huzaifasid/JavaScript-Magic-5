// Question 1 


// function todayDate() {
//     var todayDate = new Date();
//     document.write("<br><h1>Today's Date:</h1>");
//     document.write( todayDate);
// }
// todayDate();


// Question 2

// function userName() {
//     var userFirstname = prompt("Enter Your First Name ").toUpperCase();
//     var userLastname = prompt("Enter Your Last Name ").toUpperCase();
//     document.write("<br><h1>Your Name:</h1>");
//     document.write(userFirstname + " " + userLastname);
// }
// userName();

// Question 3

// var num1 = Number(prompt("Enter First Number"));
// var num2 = Number(prompt("Enter Second Number"));
// function add(num1, num2) {
//     return document.write("<h1>Number Addition</h1>"),
//      document.write(num1 + num2);
// }
// add(num1, num2);

// Question 4

// var number1 = Number(prompt("Enter First Number"));
// var operator = prompt("Enter Operator for action");
// var number2 = Number(prompt("Enter Second Number"));
// function calculator(number1,operator,number2) {
//     document.write("<h1>Calculator</h1>" );
//     if (operator == "+") {
//         return document.write("<h4>Additon</h4>"),
//          document.write(number1 + number2 +"<br>");
//     } 
//     else if (operator == "-") {
//         return document.write("<h4>Subtraction</h4>"),
//         document.write(number1 - number2+"<br>");
//     }
//     else if (operator == "*"){
//         return document.write("<h4>Multiplication</h4>"),
//          document.write(number1 * number2+"<br>");
//     }
//     else if (operator == "/"){
//         return document.write("<h4>Division</h4>"),
//         document.write(number1 / number2+"<br>");
//     }
//     else if (operator == "%"){
//         return document.write("<h4>Percentage</h4>"),
//          document.write(number1 % number2+"<br>");
//     }
//     else{
//         return document.write("Error! Please Enter Correct Operator");
//     }
// }
//  calculator(number1,operator,number2);

// Question 5

// var argSquare = Number(prompt("Enter The Number You Want to Square"));
// function Square(argSquare) {
//    return document.write("<h1>Square Of Number</h1>"),
//     document.write(argSquare*argSquare);
// }
// Square(argSquare);


// Question 6

// var numb = Number(prompt("Enter Number for Factorize"));
// function fact(numb) {
//     if (numb == 0) {
//         return 1;
//     }
//     else if (numb < 0) {
//         return -1;
//     }
//     else {
//         return (numb * fact(numb - 1));
//     }
// }
// document.write("<h1>Factorial of Number</h1>");
// document.write("Factorial Number is: " + fact(numb));

// Question 7


// var startNum = Number(prompt("Enter Start Number"));
// var lastNum = Number(prompt("Enter Last Number"));
// function count(startNum,lastNum) {
//     for (var i=startNum; i<=lastNum; i++){
//         document.write(i+"<br>");
//     }
// }
// document.write("<h1>Forward Counting</h1>");
// count(startNum,lastNum) ;


// Question 8

// var base = Number(prompt("Enter Base"));
// var perp = Number(prompt("Enter Perpendicular"));
// function calculateHypotenuse(base, perp) {
//     function calculateSquare() {
//         var baseSquare = base * base;
//         var perpSquare = perp * perp;
//         var squareSum = baseSquare + perpSquare;
//         var hypo = squareSum;
//         return hypo;
//     }
//     return calculateSquare();
// }
// document.write("<h1>Hypotenuse </h1> ");
// document.write("Hypotenuse is: ");
// document.write(calculateHypotenuse(base, perp));


// Question 9

// var width = Number(prompt("Enter Width"));
// var height = Number(prompt("Enter Hight"));
// function areaoftriangle(width,height) {
//     var area = width*height;
//     return area;
// }
// document.write("<h1>Area Of Triangle</h1> ");
// document.write("Area Of Triangle is: ");
// document.write(areaoftriangle(width,height));



// Question 14

// var radius = Number(prompt("Enter radius Number"));
// function calcCircumference(radius) {
//     var cirFer = (2*3.14)*radius;
//     return cirFer;
// }
// document.write("<h1>Circumference Of A Circle </h1>");
// document.write("Circumference is:  ");
// document.write(calcCircumference(radius));


// function calcArea(radius) {
//     var area = 3.14*(radius*radius);
//     return area;
// }
// document.write("<h1>Area Of  Circle </h1>");
// document.write("Area is:  ");
// document.write(calcArea(radius));
