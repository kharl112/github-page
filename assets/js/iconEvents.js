
var main = document.getElementById("main");
const iconClick = ({ target }) => {
    const children = Array.prototype.slice.call(main.children)

    children.forEach(element => {
        element.style.backgroundColor = "";
    });

    target.style.backgroundColor = "#316ccaaf";
}