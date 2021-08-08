enum Shoes {
    Nike = '나이키',
    Adida = '아디다스',
}

let myShoes = Shoes.Nike;


enum Answer {
    Yes = 'Yes',
    No = 'No',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);
// askQuestion('Yes');