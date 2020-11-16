var question = prompt ('Яке офіційне імя Java script');
if (question == 'EcmaScript') {
	alert('Good');
} else {
	alert('bad');
}*/
var question = prompt ('Яке офіційне імя Java script');
var message = (question == 'EcmaScript') ? 'true' : 
(question != 'EcmaScript') ? 'Bad';


/*var numb = prompt('Введіть число');
if( numb > 1 ) {
	alert ( 'число більше 1');
}
else if (numb < -1){
	alert ( 'число menshe -1');
}
else if (numb == 0){
	alert ( 'numb = 0');
}


var question = prompt('Хто прийшов');
if (question == null) {
	alert('Вхід відмінено');
}

else if (question == 'Адмін') {
	var pass = prompt('Пароль');
	if (pass == null) {
		alert('Вхід відмінено');
	}
	else if (pass == 'sad') {
		alert('Good day');
	}
	else {
		alert('Password no corect');
	}
}
else   {
	alert('Я вас не знаю');
}
var age = prompt('Write your numb');
if ((age > 14) || (age < 90)) {
	alert('tru');
}
else {
	alert('heu' + age);
}
for (var i = 1; i < 10; i++) {
	if (i%2 ==0) {
		alert(i);
	}
}
var numb = prompt('Chek your numb');
if (numb < 100) {
	for (var numb ; numb < 100; numb++) {
		
	}
}
else {
	alert('hi');
}
function min() {
		var a = 7;
		var b = 5;
		if (a > b){
			alert(b);
		}
		else {
			alert(a);
		}
}
min();
/*function pow (x, n){
 	var result = x;
 	var n = 5;
 	for (var i = 1; i < n ; i++) {
 		result *= x
 	}
 	return result;
}
pow(x,n);*/