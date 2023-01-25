function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    changeBG();
    hideWindows(true);
    ev.target.style.backgroundColor = "#316ccaaf";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    const dm = document.getElementById(data);
    if (!dm) return;

    dm.style.left = ev.clientX - 100 + "px";
    dm.style.top = ev.clientY + "px";
}


// for alert 
var offset = [0, 0];
var divOverlay = alert_error.firstChild.nextSibling;
var isDown = false;

divOverlay.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        divOverlay.offsetLeft - e.clientX,
        divOverlay.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
    console.log("up")
}, true);

divOverlay.addEventListener('mousemove', function (e) {
    event.preventDefault();
    if (isDown) {
        divOverlay.style.left = (e.clientX + offset[0]) + 'px';
        divOverlay.style.top = (e.clientY + offset[1]) + 'px';
    }
}, true);