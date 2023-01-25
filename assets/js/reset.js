var main = document.getElementById("main");
var windows_start = document.getElementById("windows-start");

var changeBG = () => {
    const children = Array.prototype.slice.call(main.children)

    children.forEach(element => {
        element.style.backgroundColor = "";
    });
}

var hideWindows = (hide) => hide ? windows_start.classList.add("hidden") : windows_start.classList.remove("hidden");

var reset = () => {
    changeBG();
    hideWindows(true);
}