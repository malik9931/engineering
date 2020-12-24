alert('Hello User :)');
var userName = prompt('Can U till me ur name, pls?');

while(userName === '' || userName === null){

    userName = prompt('Can U till me ur name again, pls?');
}

alert('Nice to meet U '+ userName);