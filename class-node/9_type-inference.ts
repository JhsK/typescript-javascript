let a = 10;

function getB(b = 10) {
    let c = "hi";
    return b + c;
}

// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailDropdown<T> extends Dropdown<T> {
    description: string;
    tag: T;
}

let detailedItem: DetailDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'aa',
    tag: 'bb',
}

// Best Common Type 
let arr = [1, 2, true];