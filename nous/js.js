document.onmousemove = function (){
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="cat.png" id="cat">')
var cat = document.getElementById('cat');
cat.style.position = 'fixed';
document.onmousemove = function (event) {
	
	cat.style.left = event.clientX + 'px';
	cat.style.top = event.clientY + 'px';
}
}


