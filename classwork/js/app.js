
//#4
var text1 = "sometext";
document.getElementById('textdiv').innerHTML = "<p>" + text1 + "</p>";

var headerstr = "string for my header tag";
document.getElementById('header').textContent = headerstr;


//#5
function aFunc(){
	var input = document.getElementById('userinput').value;
 	console.log(input);
};

//#6
var pooArray = ["poop", "feces", "shit", "caca", "poo"];

for(var i = 0; i<=pooArray.length; i++){
	console.log(pooArray[i])
};

//#7
var object = {
	texture: "lumpy",
	size: "big",
	shine: "supersparkle"
};

console.log(object.texture);
console.log(object.size);
console.log(object.shine);

//#8
var animal1 = {
	ears: "cat ears",
	nose: "cat nose",
	feet: "kitten paws",
	skin: "fuzzy fur"
};
var animal2 = {
	ears: "dog ears",
	nose: "dog nose",
	feet: "dog paws",
	skin: "woof fur"
};
var animal3 = {
	ears: "none",
	nose: "gills",
	feet: "fins",
	skin: "scaly scales"
};

var animalArray = [animal1, animal2, animal3];

for(i=0; i<animalArray.length; i++){
	console.log(animalArray[i].ears);
	console.log(animalArray[i].nose);
	console.log(animalArray[i].feet);
	console.log(animalArray[i].skin);
};





