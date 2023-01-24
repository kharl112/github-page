function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    const dm = document.getElementById(data);

    dm.style.left = ev.clientX - 100 + "px";
    dm.style.top = ev.clientY   + "px";
}