var tag = document.getElementsByTagName("p");
var cls = document.getElementsByClassName("left-container");
var id = document.getElementById("header");

// console.log(tag[2].innerHTML);
// for (let t of tag) {
//     console.log(t);
// }

var elem = document.createElement("h3");
var content = document.createTextNode("I am currently viewing");
elem.appendChild(content);
setTimeout(() => {
    id.after(elem);
    id.remove();
}, 5000);