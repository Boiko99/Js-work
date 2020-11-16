var block = document.getElementById('one');
// block.onclick = function () {
// 	this.style.background = 'green';
//  };
// block.ondblclick = function (){
// 	this.style.background = 'orange';
// }
block.oncontextmenu = function(){
	this.style.background = 'black';
	return false;
}
// block.onmouseenter = function (){
// 	console.log('in!!!');
// 	this.style.background = 'gold';
// }
// block.onmouseleave = function(){
// 	this.style.background = 'red';
// }
var a = 0;
// block.onmousemove = function () {
// 	a++;
// 	this.style.width = 300 +a+'px';
// }
block.onmousedown = function(event){
	this.style.background = 'cyan';
	console.log('button: ' +event.button);
	console.log('which: ' +event.which);
}
block.onmouseup = function(){
	this.style.background = 'pink';
}