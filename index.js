let node = document.getElementById("main");
if (node.parentNode) {
  node.parentNode.removeChild(main);
}
let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "YOUR - NAME is the champion";
