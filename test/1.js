let xml = new XMLHttpRequest();
xml.open("GET", 'http://localhost:3000', true);
xml.send();
let test = JSON.parse(xhr.responseText);
xml.open("POST", 'http://localhost:3000/test', true);
xml.send();