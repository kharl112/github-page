document.getElementById("startbutton").addEventListener("click", () => {
    if (windows_start.classList.contains("hidden")) return hideWindows(false);
    return hideWindows(true);
});