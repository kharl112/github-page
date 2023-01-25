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
var isDown = false;

//vars for events
var divOverlay = alert_error.firstChild.nextSibling;
var paint = paint_container.firstChild.nextSibling;

var onMouseDown = (e, _var = divOverlay) => {
    isDown = true;
    offset = [
        _var.offsetLeft - e.clientX,
        _var.offsetTop - e.clientY
    ];
}

var onMouseUp = () => {
    isDown = false;
}

var onMouseMove = (e, _var = divOverlay) => {
    e.preventDefault();
    if (isDown) {
        _var.style.left = (e.clientX + offset[0]) + 'px';
        _var.style.top = (e.clientY + offset[1]) + 'px';
    }
}

document.addEventListener('mouseup', onMouseUp, true);

// alert
divOverlay.addEventListener('mousedown', onMouseDown, true);
divOverlay.addEventListener('mousemove', onMouseMove, true);


// paint
paint.addEventListener('mousedown', (event) => onMouseDown(event, paint), true);
paint.addEventListener('mousemove', () => onMouseMove(event, paint), true);