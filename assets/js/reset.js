var main = document.getElementById("main");
var windows_start = document.getElementById("windows-start");
var alert_error = document.getElementById("alert-error-container");

var changeBG = () => {
    const children = Array.prototype.slice.call(main.children)

    children.forEach(element => {
        element.style.backgroundColor = "";
    });
}

var hideWindows = (hide) => hide ? windows_start.classList.add("hidden") : windows_start.classList.remove("hidden");
var hideAlert = (hide) => {
    alert_error.firstChild.nextSibling.style.top = 0;
    alert_error.firstChild.nextSibling.style.right = "calc(50vw - 50px)";

    hide ? alert_error.classList.add("hidden") : alert_error.classList.remove("hidden");
}

var reset = () => {
    changeBG();
    hideWindows(true);
}