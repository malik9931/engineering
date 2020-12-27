
/*var userName = prompt('Can U till me ur name, pls?');

while(userName === '' || userName === null){

    userName = prompt('Can U till me ur name again, pls?');
}

alert('Nice to meet U '+ userName);



var age = prompt('Can U till me how old R U, pls?');

console.log(age);

while(age === '' || age === null){

    age = prompt('Can U till me how old R U, pls?');

}
console.log(age);

*/
// Functions Calling:
alert('Hello User :)');
var uName = takeUserInput('Can U till me ur name, pls?');
var userNameInput= getValidation(uName,'Can U till me ur name again, pls?');

var uAge = takeUserInput('Can U till me how old R U, pls?');
var userAgeInput= getValidation(uAge,'Can U till me ur age again, pls?');


displayCustomize(uName||userNameInput,uAge||userAgeInput);



// Function Declaration

function takeUserInput(massege){

    return prompt(massege);
}

function displayCustomize(uName,uAge){
    alert('Hello '+ uName +'. It is a good chance to meet U in our website. Ur age is '+ uAge);
}

function getValidation(userInput,message){

    while(userInput === undefined || userInput === '' || userInput === null){

        userInput = prompt('Can U write it again, pls?');
    }
    return userInput;
}