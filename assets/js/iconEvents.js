const iconClick = ({ target }, cb) => {
    changeBG();
    hideWindows(true);
    cb(false);
    target.style.backgroundColor = "#316ccaaf";
}