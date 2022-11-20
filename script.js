firstQuestion = prompt("How much will 2+2?");
secondQuestion = prompt("The sun rises in the east?");
thirdQuestion = prompt("How much will 5 / 0 be?");
fourthQuestion = prompt("What color is the sky?")
fifthQuestion = prompt("Who is David Beckham??")               // My varsion + have mistakes

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
