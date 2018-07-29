function box(number) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.innerHTML = "<h3>" + number + "</h3>";
    return box;
}

function numbers(number) {
    var snum = number.toString();
    var numbox = document.createElement("div");
    for (var i = 0; i < snum.length; i++) {
	numbox.appendChild(box(snum[i]));
    }
    return numbox;
}

function main() {
    var main = document.getElementById('main');
    main.appendChild(numbers(22315));
}

main();
