const out = document.querySelector(".out");
const out2 = document.querySelector(".out2");
const inp = document.querySelector("input");

inp.onkeydown = function pr(event) {
    document.querySelector(`div[data=${event.code}]`)
        .classList.add("pressed");
    if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
        document.querySelector(".shell")
            .classList.add("changed");
        document.querySelector(".shellUpper")
            .classList.remove("changed");
    }
    if (event.code == "CapsLock") {
        document.querySelector(".shell")
            .classList.toggle("changed");
        document.querySelector(".shellUpper")
            .classList.toggle("changed");

    }
}
inp.onkeyup = function (event) {
    document.querySelector(`div[data=${event.code}]`)
        .classList.remove("pressed");
    if (event.code == "ShiftLeft" || event.code == "ShiftRight") {
        document.querySelector(".shell")
            .classList.remove("changed");
        document.querySelector(".shellUpper")
            .classList.add("changed");
    }
}

// let arr = [3, 18, 7, 76, 5, 55, 87, 8, 9, 76, 12, "88"];
// let arr2 = [];

// arr.sort(function name(a, b) {
//     return a - b;
// })

// function func() {
//     arr2 = arr.map(item => +item);
//     return arr2;
// }



