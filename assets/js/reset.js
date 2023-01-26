var main = document.getElementById("main");
var windows_start = document.getElementById("windows-start");
var alert_error = document.getElementById("alert-error-container");
var paint_container = document.getElementById("paint-container");
var myCom_container = document.getElementById("my-com-container");

// change bg from each main items
var changeBG = () => {
    const children = Array.prototype.slice.call(main.children)

    children.forEach(element => {
        element.style.backgroundColor = "";
    });
}

// windows
var hideWindows = (hide) => hide ? windows_start.classList.add("hidden") : windows_start.classList.remove("hidden");

//error alert
var hideAlert = (hide) => {
    alert_error.firstChild.nextSibling.style.top = 0;
    alert_error.firstChild.nextSibling.style.right = "calc(50vw - 50px)";

    hide ? alert_error.classList.add("hidden") : alert_error.classList.remove("hidden");
}

// paint
var hidePaint = (hide) => {
    paint_container.firstChild.nextSibling.style.top = 0;
    paint_container.firstChild.nextSibling.style.right = "calc(50vw - 50px)";
    const paint_item = document.getElementById("item-paint");

    if (!hide) {

        // if called on windows start
        hideWindows(true)

        paint_item.classList.remove("hidden")
    }

    if (hide) paint_item.classList.add("hidden")
    hide ? paint_container.classList.add("hidden") : paint_container.classList.remove("hidden");
}


var hidePaintTask = () => {
    hideWindows(true)
    !paint_container.classList.contains("hidden") ? paint_container.classList.add("hidden") : paint_container.classList.remove("hidden");
}


// my computer
var hideMyCom = (hide) => {
    // myCom_container.firstChild.nextSibling.style.top = 0;
    // myCom_container.firstChild.nextSibling.style.right = "calc(50vw - 50px)";
    const myCom_item = document.getElementById("item-my-com");

    if (!hide) {

        // if called on windows start
        hideWindows(true)

        myCom_item.classList.remove("hidden")
    }

    if (hide) myCom_item.classList.add("hidden")
    hide ? myCom_container.classList.add("hidden") : myCom_container.classList.remove("hidden");
}


var hideMyComTask = () => {
    hideWindows(true)
    !myCom_container.classList.contains("hidden") ? myCom_container.classList.add("hidden") : myCom_container.classList.remove("hidden");
}

var reset = () => {
    changeBG();
    hideWindows(true);
}