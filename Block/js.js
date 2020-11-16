document.onwheel = function (event) {
	console.log(event);
	if (event.deltaY>0){
		document.getElementById('line').innerHTML = 'вниз';}
		else {
			document.getElementById('line').innerHTML = 'верх';
		}
		var speed = event.deltaY;
		speed = Math.abs(speed);
	if (speed < 50)	{
		document.getElementById('speed').innerHTML = 'низька';
	}
	else if (speed < 100)	{
		document.getElementById('speed').innerHTML = 'середня';
	}
	else {
		document.getElementById('speed').innerHTML = 'висока';
	}
}
	var left =290;
document.getElementById('test').onwheel = function (event) {
	var line = event.deltaY;
	left=left + line;
	document.getElementById('test2').style.left = left +'px';
	return false; 
}