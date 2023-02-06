// XMLHttpRequest
// GET, POST, PUT, DELETE

const xml = new XMLHttpRequest();
xml.open('GET', 'request/fileA.json');
xml.send();
// console.log(xml);
// let parse = response => JSON.parse(response);

xml.addEventListener('readystatechange', () => {
    const  response = parse(xml.response);
    console.log(xml.readyStage)
    console.log(response);
});

//  console.log(parse(xml.responseText));

console.log('Move!');
for (let i = 0; i  < 10; i++) {
    console.log(i);
}