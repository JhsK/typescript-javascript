// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');

function logMessage(value: string | number) {
    console.log(value);
}

logMessage('hello');
logMessage(100);