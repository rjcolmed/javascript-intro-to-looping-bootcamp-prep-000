function forLoop(anArray){
	for (var i = 0; i <= 25; i++){
		if(i === 1){
			anArray.push("I am 1 strange loop.")
		} else if (i > 1) {
			anArray.push(`I am ${i} strange loops.`)
		}
	}
  return anArray
}
// var myArray = new Array();
// forLoop(myArray);
// console.log(myArray);

function whileLoop(num) {
	while(num > 0) {
		console.log(num);
		num--
	}
	return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(anArray){
	do {
		anArray.pop()
	} while (anArray.length > 0 && maybeTrue());
	return anArray
}
