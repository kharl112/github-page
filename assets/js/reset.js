var main = document.getElementById("main");
var changeBG = () => {
    const children = Array.prototype.slice.call(main.children)

    children.forEach(element => {
        element.style.backgroundColor = "";
    });
}

