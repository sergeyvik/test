let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const header = document.querySelectorAll('h3');
const par = document.querySelectorAll('p');
const bar = document.querySelectorAll('div');

var i=0; 
for (head of header) {	
	head.innerHTML = crypto[i].name;	
	i++; 
}
var i=0; 
for (p of par) {	
	p.innerHTML = crypto[i].price;	
	i++; 
}

var i=0; 
for (b of bar) {	
	b.style.width = Math.floor(crypto[i].price)+'px';		
	i++; 
}


//	menu.style.left = '-50vw';


console.log(header);
console.log(par); 
console.log(bar); 