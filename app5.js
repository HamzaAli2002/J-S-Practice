//=========CHAPTER N0.14-16============
//***************ARRAYS****************

//1. Declare an empty array using JS literal notation to store student names in future.
// let stdName = [];
// const stdName1 = [];
// var stdName2 = [];

//2. Declare an empty array using JS objest notation to store student names in future.
// var unknown = {
//     wacantArray : []
// }

//3,4,5,6. Declare and initialize a strings,numbers,boolean,mixed array.
// var array = [];
// var stringArray = ["Hamza"];
// var numberArray = [20];
// var booleanArray = [true,false];
// var mixArray = ["Hamza",20,true];

//7. Declare and Initialize an array and store available education qualifications in Pakistan
//   (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// var qualifications = ["1)SSC <br/>  2)HSC <br/>  3)BCS <br/>  4)BS <br/>  5)BCOM <br/> 6)MS <br/> 7)M. Phil. <br/> 8)PhD <br/>"];
// document.write(`<h1>Qualifications:</h1> <br/> ${(qualifications)}`);

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
//  Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var stdNames = ["Michael","John","Tony"];
// var stdScores = [320,230,480];
// var ttlScores = 500;
// document.write(`Score of ${stdNames[0]} is ${stdScores[0]}.Percentage:${stdScores[0]/ttlScores*100}% <br/>`);
// document.write(`Score of ${stdNames[1]} is ${stdScores[1]}.Percentage:${stdScores[1]/ttlScores*100}% <br/>`);
// document.write(`Score of ${stdNames[2]} is ${stdScores[2]}.Percentage:${stdScores[2]/ttlScores*100}% <br/>`);

//9. Initialize an array with color names. Display the array elements in your browser.
// var colorName = ["red","blue","green","yellow","orange","indigo","violet"];
// document.write(`${colorName} <br>`);
// console.log(colorName);
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
//   Display the updated array in your browser.
// var user = prompt("What color do you wants to add at the beginning?");
// colorName.unshift(user);
// document.write(`${colorName} <br>`);
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
//   Display the updated array in your browser.
// var user = prompt("What color do you wants to add at the end?");
// colorName.push(user);
// document.write(`${colorName} <br>`);
//c. Add two more color to the beginning of the array. 
//   Display the updated array in your browser.
// var user = prompt("Which two colors do you want to add at the beginning?");
// colorName.unshift(user);
// document.write(`${colorName} <br>`);
//d. Delete the first color in the array. 
//   Display the updated array in your browser.
// colorName.shift(0);
// document.write(`${colorName} <br>`);
//e. Delete the last color in the array. 
//   Display the updated array in your browser.
// colorName.pop(6);
// document.write(`${colorName} <br>`);
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
//   Display the updated array in your browser.
// var userIndex = +prompt("In which point do you wants to add a color?");
// var userColor = prompt("Which color name do you wants to add?");
// colorName.splice(userIndex,0,userColor);
// document.write(`${colorName} <br>`);
//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
//   Then remove the same number of color(s) from user-defined position/index. 
//   Display the updated array in your browser.
// var userIndex = +prompt("In which point do you wants to delete the colors?");
// var userColor = +prompt("How many colors do you wants to delete?");
// colorName.slice(userIndex,userColor);
// document.write(`${colorName} <br>`);

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var stdScore = [320,230,480,120];
// document.write(`Scores of Students: ${(stdScore)}`);
// stdScore.sort();
// document.write(`<br/>Ordered Scores of Students: ${(stdScore)}`);

//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selectedCities = cities.slice(2);
// document.write(`Cities List: ${(cities)} <br/>`);
// document.write("Selected Cities List: " , selectedCities);

//12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// var arr = ["This","is","my","cat"]; 
// document.write(`Array: <br> ${(arr)}<br><br>`);
// var string = arr.join(" -- "); 
// document.write(`String:<br> ${string}`);

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
//    (FIFO-First In First Out)
// var devices = ["keyboard","mouse","printer","monitor"];
// document.write(`<h2>Devices: <br> ${devices}</h2> <br>`);
// var devices02 = devices.sort();
// document.write(`<h2>Devices Sort: <br> ${devices}</h2><br>`);
// document.write(`<h3>Out:</h3><br>${devices[0]}`);
// document.write(`<h3>Out:</h3><br>${devices[1]}`);
// document.write(`<h3>Out:</h3><br>${devices[2]}`);
// document.write(`<h3>Out:</h3><br>${devices[3]}`);

//15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//    Display the following dropdown/select menu in your browser using document.write() method:
// var models = ["APPLE","SAMSUNG","MOTROLLA","NOKIA","SONY","HAIER"];
// document.write(`<select name="phoneModels" id="jazz">
// <option value="model[0]">${models[0]}</option>
// <option value="02"selected >${models[1]}</option>
// <option value="03" >${models[2]}</option>
// <option value="04">${models[3]}</option>
// <option value="05">${models[4]}</option>
// <option value="06">${models[5]}</option>
// </select> <br>
// <input type="submit" name="subscribe" 
//  value="Subscribe" />`);







