// XMLHttpRequest
// GET, POST, PUT, DELETE

const xml = new XMLHttpRequest();
xml.open('GET', 'request/fileA.json');
xml.send();
console.log(xml);
let parse = response => JSON.parse(response);

