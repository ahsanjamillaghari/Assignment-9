// chapter 21-25
// task1
// let fname = prompt('First Name');
// let lname = prompt('Last Name');
// var fullname = fname+" "+lname;
// alert('greetings ' + fullname);


// task2
// let mobilemodel = prompt('your favourite mobile phone?');
// alert('My favourite mobile is '+ mobilemodel + " length of string is " + mobilemodel.length);

/*task3*/
// var string = 'pakistan';
// document.write(string.indexOf('n'));

// task4
// var string = 'Hello World';
// document.write(string.lastIndexOf('l'));

// task5
// var sting = 'pakistan';
// document.write(sting.charAt(3));

// // task6
// let fname = prompt('First Name');
// let lname = prompt(' Last Name');
// let full_name = fname.concat(lname);
// alert('Good Morning: ' + full_name);

// task7
// let city = 'Hyderabad';
// let change = city.replace('Hyder' , 'Islam');
// document.write(change);

// task8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var change = message.replaceAll('and' , '&')
// document.write(change);

// task9
// var value = 472;
// var name = value.toString();
// console.log(typeof 'name');

// task10
// var name = 'peanuts';
// document.write(name.toUpperCase())

// task11
// var name = 'javascript';
// document.write(name.charAt(0).toUpperCase() + name.slice(1));

// task12
// var num = 35.44;
// let final = num.toString();
// document.write(final.slice(0,2) + 44);

// task13
// let name = prompt('Enter your name');

// if (name.includes('@')) {
// 	alert('Enter valid USERname');
// }else if (name.includes('.')) {
// 	alert('Enter valid USERname');
// }else if (name.includes(',')) {
// 	alert('Enter valid USERname');
// }else if (name.includes('!')) {
// 	alert('Enter valid USERname');
// }

// task14
// var a=["cake","apple pie","cookie","chips","patties"];
// var user_input= prompt("enter the item you want");
// var iterations = a.length;
// for (var i=0; i<a.length; i++){
//     iterations--;
//     if(a[i].toUpperCase()===user_input.toUpperCase()){
//         document.write(a[i]+ " is available at index "+ i +" at our bakery \n");
//         break;}
//     if(iterations===0)
//         document.write("we are sorry. " + user_input + " is not available at our bakery");
// }

//task15
// var name = prompt('Enter password');
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;
// document.write(name.includes('lowerCaseLetters'))

// task16
// var university = 'University of Karachi.';
// let arr = university.split('')
// console.log(arr);

// task17
// let input = prompt('INPUt');
// document.write(input.charAt(input.length - 1));


// task18
// let name = 'the quick brown fox jumps over the lazy dog';
// document.write(name + ' <br>' + " in this the Occurrence of the is " + name.includes('the').length);

