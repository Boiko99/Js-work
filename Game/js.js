var number = Math.floor(10*Math.random())+1;
console.log(number);
var count = 2;

document.getElementById('check').onclick = function(){
	if (count>0) {
		var usernum = document.getElementById('mynum').value;
		usernum = parseInt(usernum);
		var out = document.getElementById('out');
		if (usernum == number) {
			out.innerHTML = 'You Winner';
				}
		else if (usernum < number) {
			out.innerHTML = 'Your numb is small';
		}
		else if (usernum > number) {
			out.innerHTML = 'Your numb is big';
			}
		document.getElementById('count').innerHTML = "Кількість спроб "+count;
		count = count -1;
	}
	else{
		alert('You loos page is reload');
		location.reload();
	}
}