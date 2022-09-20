const device_width = window.innerWidth > 0 ? window.innerWidth : screen.width;
const hideAndShow = (container, target) => {
  if (container.classList.toString().includes("hidden")) {
    container.classList.remove("hidden");
    if (device_width < 580) target.style = "max-width: 200px";
    else target.style = "max-width: 300px";
  } else {
    container.classList.add("hidden");
    if (device_width < 580) target.style = "max-width: 100px";
    target.style = "max-width: 200px";
  }
};

const showInfo = ({ target }) => {
  const [placeholder_id] = target.id.split("-");
  const lang_info = document.getElementById(placeholder_id + "-info");
  ["js", "py", "php"]
    .filter((item) => item !== placeholder_id)
    .forEach((item) => {
      document.getElementById(item + "-img").style =
        device_width > 580 ? "max-width: 200px" : "max-width: 100px";
      document.getElementById(item + "-info").classList.add("hidden");
    });
  hideAndShow(lang_info, target);
};

document.getElementById("js-img").addEventListener("click", showInfo);

document.getElementById("php-img").addEventListener("click", showInfo);

document.getElementById("py-img").addEventListener("click", showInfo);
document.getElementById("js-img").click();
