var a = document.getElementsByClassName('person');
console.log(a);
// for (i=0; i<a.length; i++){
// 	a[i].onclick=f1;
// }
// function f1() {
// 	console.log(this);

// }
var men = {
	"name" : "Andry",
	"years" : 20,
	"state" : "male",
	"id" : "1"
};
console.log(men);
var man = {
	"name" : "Andry",
	"vik" : 20,
	"state" : "male",
	"id" : "1",
	"years" : function(){
		return 2019 - this.vik;
	}
};
console.log(man.years());
console.log(man);
var math = {
	"mas" : [5, 6, 34, 12, 45,25, 13],
	"sum" : function(){
		var sum = 0;
		for (var i = 0; i < this.mas.length; i++) {
			sum = sum + this.mas[i];
		}
		return sum;
	}
}
console.log(math.sum())
