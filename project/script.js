var city = "Москва";
const id = "dccd5d8e212f89045d7cfd7f40c8e272";
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+id;
const form = document.querySelector('form');
const input = document.querySelectorAll('input');
class Person {
	constructor (name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return this.happiness++
	}
	hasRest() {
		return this.happiness++
	}
	hasMoney() {
		return this.happiness++
	}
	isSunny() {			
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		if (xhr.status != 200) {
			console.log(xhr.status +' '+ xhr.statusText);
		} else {
			let DATA = JSON.parse(xhr.responseText);
			if ((DATA.main.temp-273) > 15) 
				this.happiness++;		
		}
	return this.happiness
	}
}
input[7].addEventListener('click', () => {
	form.onsubmit = (e) => {
		e.preventDefault();
	}
	let name = input[0].value;
	let cat = input[1].checked;
	let relax = input[3].checked;
	let money = input[5].checked;
	temp = new Person(name);
	if (cat) {
		temp.hasCat();
	}
	if (relax) {
		temp.hasRest();
	}
	if (money) {
		temp.hasMoney();
	}
	temp.isSunny();
	let person = document.querySelector('.personName');
	let icon = document.querySelector('.icon');
	person.innerHTML = name;
	if (temp.happiness == 4) {
		icon.innerHTML = '😁';
	} else if (temp.happiness > 1) {
		icon.innerHTML = '😐';
	} else {
		icon.innerHTML = '☹️';
	}
});