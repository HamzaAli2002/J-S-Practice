//=========CHAPTER 6-9==========
//QUESTION NO.01
// var a = 10;         
// document.write(`Result:<br/>The Value of a is: ${a}<br/><hr/><br/>`)
// document.write(`The value of ++a is: ${++a}<br/>Now The Value of a is: ${a}<br/><br/><br/>`)
// document.write(`The value of a++ is: ${a++}<br/>Now The Value of a is: ${a}<br/><br/><br/>`)
// document.write(`The value of --a is: ${--a}<br/>Now The Value of a is: ${a}<br/><br/><br/>`)
// document.write(`The value of a-- is: ${a--}<br/>Now The Value of a is: ${a}`)

//QUESTION NO.02

// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// --a; ==> 1
// --a  ==> 1 - --b; ==> 0
// --a  ==> 1 - --b ==> 0 + ++b ==> 1;
// --a  ==> 1 - --b ==> 0 + ++b ==> 1 + b-- ==> 1;
// 1 - 0 + 1 + 1
// 3 is answer
// document .write(`a is ${a}<br/>b is ${b}<br/>Result is ${result}`)

//QUESTION NO.03

// var name = prompt("What's Your Name ?")
// alert(`Welcome ${name}`)

//QUESTION NO.04

// var value = +prompt("type a number")
// var result;

//QUESTION NO.05


// if(value !== 0){
//         document.write(`<h1>Table of:${value}</h1>`)
//         for(a = 1;a <= 10; a++){    
//                 result = value * a;
//                 document.write(`${value}x${a}=${result}<br/>`)
//             }
// }else{
//         document.write(`<h1>Table of:${5}</h1>`)
//         for(a = 1;a <= 10; a++){     
//                 result = 5 * a;
//                 document.write(`${5}x${a}=${result}<br/>`)
//             } 
// }
        
//QUESTION NO.06

// var subjectName1 = prompt("What is your first subject");
// var subjectName2 = prompt("What is your second subject");

// var subjectName3 = prompt("What is your third subject");

// var totalMarksSubject = 100;


// var obtsubj1 = +prompt("obtain marks of subject one")
// var obtsubj2 = +prompt("obtain marks of subject two")

// var obtsubj3 = +prompt("obtain marks of subject three")


// var totalObjectMarks = totalMarksSubject * 3;
// var totalObt = obtsubj1 + obtsubj2 + obtsubj3;

// document.write(`<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>${subjectName1}</td><td>${totalMarksSubject}</td><td>${obtsubj1}</td><td>${obtsubj1 / totalMarksSubject * 100}%</td></tr>
// <tr><td>${subjectName2}</td><td>${totalMarksSubject}</td><td>${obtsubj2}</td><td>${obtsubj2 / totalMarksSubject * 100}%</td></tr>
// <tr><td>${subjectName3}</td><td>${totalMarksSubject}</td><td>${obtsubj3}</td><td>${obtsubj3 / totalMarksSubject * 100}%</td></tr>
// <tfoot><tr><th></th><th>${totalObjectMarks}</th><th>${totalObt}</th><th>${(totalObt / totalObjectMarks) * 100}%</th></tr></tfoot></table>`)




// 
