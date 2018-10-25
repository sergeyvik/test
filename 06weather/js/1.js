var city = "Гомель";
const id = "dccd5d8e212f89045d7cfd7f40c8e272";
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+id;
const form = document.querySelector('form');
const text = document.querySelector('label input');
const button = document.querySelectorAll('input');
const textP = document.querySelectorAll('p');

form.onsubmit = (e) => {
	e.preventDefault();
}

button[1].addEventListener('click', () => {
	city = text.value;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if (xhr.status != 200) {
		console.log(xhr.status +' '+ xhr.statusText);
	} else {
		let DATA = JSON.parse(xhr.responseText);
		textP[0].innerHTML = 'Температура '+ (Math.round(DATA.main.temp)-273) +' градусов';
		textP[1].innerHTML = 'Скорость ветра '+ DATA.wind.speed +' метров в секунду';	
	}
	
});

console.log(button[1]);

/*

*/