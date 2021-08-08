// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('하이');


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false};

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    
    return text;
}

logTextLength<string>(['hi']);

interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

//logTextLength2(10);
logTextLength2({ length: 10})


interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption('name');