function box(number) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.innerHTML = "<h3>" + number + "</h3>";
    return box;
}

function handleMouseDown(e, b){
    b.setAttribute("class", "box hidden");
    setTimeout(function(){b.remove()}, 500);
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
	numbox.appendChild(b);
	b.onmousedown = function(e){
	    handleMouseDown(e, this);
	};
    }
    return numbox;
}

function main() {
    var main = document.getElementById('main');
    main.appendChild(numbers(22315));
}

main();
