const clock = document.getElementById("clock");

setInterval(() => {
    clock.innerText = new Date().toLocaleString('en-us', { hour: "2-digit", minute: "2-digit" });
}, 1000);