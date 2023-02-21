//      ДЗ 6. SIMPLE QUIZ

// You need to make simple quiz.

// Ask the users a few questions (>4), using prompt.
// If the answer is right add 10 points (for every right answers).
// If the answer is wrong or user clicked cancel - you don't add any points.
// When the user will answer all questions, show the result using alert (like: You have 30 points. You answered correctly for 3/10.).

// Some question for example:

// How much will 2+2?
// The sun rises in the east?
// How much will 5 / 0 be?
// What color is the sky?
// What is the correct answer to the ultimate question of life, the universe and all that. (42)

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let points = 0;
// let correctAnswers = 0;
// let questions = [
//     'How much will 2+2?',
//     'The sun rises in the east?',
//     'How much will 5 / 0 be?',
//     'What color is the sky?',
//     'What is the correct answer to the ultimate question of life, the universe and all that. (42)'
// ];
// let answers = [
//     '4',
//     'yes',
//     'null',
//     'blue',
//     '42'
// ];

// for (let i = 0; i < questions.length; i++) {
//     let answer = prompt(questions[i]);
//     if (answer === answers[i]) {
//         points += 10;
//         correctAnswers++;
//     }
// }
// alert(`You have ${points} points. You answered correctly for ${correctAnswers}/${questions.length}.`);

// //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

firstQuestion = prompt("How much will 2+2?");
secondQuestion = prompt("The sun rises in the east?");
thirdQuestion = prompt("How much will 5 / 0 be?");
fourthQuestion = prompt("What color is the sky?")
fifthQuestion = prompt("Who is David Beckham??")               // My varsion 

points = 0;
correct = 0;

if(+firstQuestion === 4) {
    points += 10;
    correct += 1;
}
if(secondQuestion?.toLowerCase() === "yes") {
    points += 10;
    correct += 1;
}
if(thirdQuestion?.toLowerCase() === "nan" || thirdQuestion?.toLowerCase() === "can't delay on 0") {
    points += 10;
    correct += 1;
}
if(fourthQuestion?.toLowerCase() === "blue" || fourthQuestion?.toLowerCase() === "can't delay on 0"  ) {
    points += 10;
    correct += 1;
}
if(fifthQuestion?.toLowerCase() === "footballer" || fourthQuestion?.toLowerCase() === "can't delay on 0" ) {
    points += 10;
    correct += 1;
}
alert(`You have ${points} points. You answered for ${correct}/5`);