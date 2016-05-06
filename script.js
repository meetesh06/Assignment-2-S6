for (var i = 0; i <= 100; i++) {
	var div = document.getElementById('number');
	var number = document.createElement('p');
	number.innerHTML = i ;
	if (i % 3 == 0 && i % 5 == 0) {
		number.innerHTML = "FizzBuzz" ;
	}
	else if (i % 3 == 0) {
		number.innerHTML = "Fizz" ;
	} else if (i % 5 == 0) {
		number.innerHTML = "Buzz" ;
	}
	div.appendChild(number);
}