var main = document.getElementById("main");
var windows_start = document.getElementById("windows-start");
var alert_error = document.getElementById("alert-error-container");
var sww_error = document.getElementById("sww-alert-container");
var paint_container = document.getElementById("paint-container");
var myCom_container = document.getElementById("my-com-container");
var logoff_container = document.getElementById("logoff-container");
var switch_user_container = document.getElementById("switch-user-container");
var notepad_container = document.getElementById("notepad-container");
var notepad_textarea = document.getElementById("notepad-textarea");
var notepad_title = document.getElementById("notepad-title");

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


//Projects
var goToProjects = () => {
    window.open("https://github.com/kharl112?tab=repositories", "__blank");
}


// notepad 
var notepad_item = document.getElementById("item-notepad");
var taskbar_notepad_text = document.getElementById("taskbar-notepad-text");

var resetNotepad = (text) => {
    notepad_title.innerHTML = text;
    notepad_textarea.value = ""
    taskbar_notepad_text.innerText = text;
}

var hideNotepad = (hide) => {
    // myCom_container.firstChild.nextSibling.style.top = 0;
    // myCom_container.firstChild.nextSibling.style.right = "calc(50vw - 50px)";

    if (!hide) {

        // if called on windows start
        hideWindows(true)
        resetNotepad("Untitled - Notepad");
        notepad_item.classList.remove("hidden")
    }

    if (hide) notepad_item.classList.add("hidden")
    hide ? notepad_container.classList.add("hidden") : notepad_container.classList.remove("hidden");
}


var hideNotepadTask = () => {
    resetNotepad(notepad_title.innerText);
    hideWindows(true)
    !notepad_container.classList.contains("hidden") ? notepad_container.classList.add("hidden") : notepad_container.classList.remove("hidden");
}

var codingExp = () => {
    hideNotepad(false);
    resetNotepad("Coding Experience - Notepad");
    notepad_textarea.value =
        `Coding Experience
 - 5 years making personal projects 
 - 3 years working on real jobs

 In those years of making and working on projects, I learned how vast the tech industry
 and how people working on tech valued by different employers.
`
}

var reset = () => {
    changeBG();
    hideWindows(true);
}


// Logoff
var hideLogOff = (hide) => {
    if (!hide) {
        logoff_container.classList.remove("hidden");
    }
    else
        logoff_container.classList.add("hidden");

    reset();
}

var hideSwitchUser = (hide) => {
    if (!hide) {
        switch_user_container.classList.remove("hidden");
    }
    else
        switch_user_container.classList.add("hidden");

    hideSww(true)
    reset();
}

var hideSww = (hide) => {
    if (!hide) {
        hideLogOff(true);
        sww_error.classList.remove("hidden");
    }
    else
        sww_error.classList.add("hidden");

    hideLogOff(true)
    reset();
}


