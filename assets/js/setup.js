var menu_right = document.getElementById("menu-right");
var menu_right_children = Array.from(menu_right.children).filter((item) => item.classList.contains("menu__item"));

// throw error onclicking unused buttons 
menu_right_children.forEach((node) => {
    node.onclick = () => {
        hideWindows(true);
        hideAlert(false);
    }
})
