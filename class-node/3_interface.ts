interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
    age: 33,
    name: '세호',
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

getUser({
    age: 22,
    name: 'gww',
});

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var are: StringArray = ['a', 'b', 'c'];

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

let obje: StringRegexDictionary = {
    //sth: /abc/,
}

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var johi: Developer = {
    name: 'johi',
    age: 20,
    language: 'sss'
}