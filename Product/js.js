var goods = {
	"228" : {
		"name" : "Банан",
		"cost" : 30,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/yellow_banana_fruit_vegetable-128.png",
		"sklad" : "так"	
	},
	"229" : {
		"name" : "Помідор",
		"cost" : 40,
		"img" : "https://cdn1.iconfinder.com/data/icons/vegetables-55/50/Vegetables-06-128.png",
		"sklad" : "ні"	
	}
};
console.log(goods);
var out = "";
for (var key in goods){
	out += "Назва " +goods[key].name + "<br>";
	out += "Ціна " +goods[key].cost + "<br>";
	out += "На складі " +goods[key].sklad + "<br>";
	out+='<img src="'+goods[key].img+'">'; 
};
document.getElementById('out').innerHTML =out;