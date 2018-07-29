var NUMBER = 4125673;
//track current state of number
var currnum = NUMBER.toString().split('');

function box(number) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.innerHTML = "<h3>" + number + "</h3>";
    return box;
}

function hidebox(e, b){
    b.setAttribute("class", "box hidden");
    setTimeout(function(){b.remove()}, 500);
}

function winning(e, b){
    var p = Number(b.getAttribute("pos"));
    currnum[p] = "_";
    checknum = "";
    for (var i = 0; i < currnum.length; i++) {
	if (currnum[i] != "_"){
	    checknum += currnum[i];
	}
    }
    checknum = Number(checknum);
    if (!isPrime()){
	console.log("You lost!");
	return;
    }
    if (checknum.toString().length == 1){
	console.log("You win!");
    }
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

function numbers(number) {
    var snum = number.toString();
    var numbox = document.createElement("div");
    for (var i = 0; i < snum.length; i++) {
	var b = box(snum[i]);
	b.setAttribute("pos", i);
	numbox.appendChild(b);
	b.onmousedown = function(e){
	    hidebox(e, this);
	    winning(e, this);
	};
    }
    return numbox;
}

function main() {
    var main = document.getElementById('main');    
    main.appendChild(numbers(NUMBER));
}

main();
