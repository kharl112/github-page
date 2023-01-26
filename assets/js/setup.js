var menu_right = document.getElementById("menu-right");
var menu_right_children = Array.from(menu_right.children).filter((item) => item.classList.contains("menu__item"));

// throw error onclicking unused buttons 
menu_right_children.forEach((node) => {
    node.onclick = () => {
        hideWindows(true);
        hideAlert(false);
    }
})

class Links {
    constructor(container_name, items) {
        this.container = document.getElementById(container_name);
        this.items = items;
    }

    render() {
        this.items.forEach((node) => {
            this.container.innerHTML += ` 
            <div class="com__content__left__card__row">
                <a
                    href="#${node.id}"
                    class="com__content__left__card__text link"
                >
                ${node.label}
                </a>
            </div>
        `
        })
    }
}


var jump_links_container = "jump-links-container";
var jump_links = [
    { id: "about", label: "About" },
    { id: "pl-container", label: "Programming Languages" },
    { id: "tsf-container", label: "Tech Stack - Frontend" },
    { id: "tsb-container", label: "Tech Stack - Backend" },
    { id: "td-container", label: "Development Tools" },
    { id: "tdp-container", label: "Deployment Tools" },
];

var jl_rows = new Links(jump_links_container, jump_links);
jl_rows.render()

class Card {
    constructor(container_name, items) {
        this.container = document.getElementById(container_name);
        this.items = items;
    }

    render() {
        this.items.forEach((node) => {
            this.container.innerHTML += ` 
            <div class="com__content__right__card__item">
                <img
                    src="assets/images/${node.image_name}"
                    alt="python"
                    class="com__content__right__card__img"
                />
                <div class="com__content__right__card__img-container">
                    <div class="com__content__right__card__text">
                    ${node.label}
                    </div>
                </div>
            </div>
        `
        })
    }
}


//programming languages cards
var pl_container = "pl-container";
var pl_items = [{ image_name: "python.png", label: "Python" }, { image_name: "js.png", label: "Javascript" }, { image_name: "c.png", label: "C" }, { image_name: "php.png", label: "PHP" }]

var pl_cards = new Card(pl_container, pl_items);
pl_cards.render()


//tech stacks languages cards
// frontend
var tsf_container = "tsf-container";
var tsf_items = [
    { image_name: "vue.png", label: "Vue JS" },
    { image_name: "angular.png", label: "Angular JS" },
    { image_name: "react.png", label: "React JS" },
];

var tsf_cards = new Card(tsf_container, tsf_items);
tsf_cards.render();

// backend
var tsb_container = "tsb-container";
var tsb_items = [
    { image_name: "nodejs.webp", label: "NodeJS" },
    { image_name: "laravel.png", label: "Laravel" },
];

var tsb_cards = new Card(tsb_container, tsb_items);
tsb_cards.render();


// Tools
// Development
var td_container = "td-container";
var td_items = [
    { image_name: "linux.png", label: "Linux OS" },
    { image_name: "vim.png", label: "Vim Text Editor" },
    { image_name: "git.png", label: "Git Version Control" },
    { image_name: "vscode.png", label: "VS Code" },
    { image_name: "figma.png", label: "Figma" },
    { image_name: "notion.png", label: "Notion" },
];

var td_cards = new Card(td_container, td_items);
td_cards.render();


// Deployment
var tdp_container = "tdp-container";
var tdp_items = [
    { image_name: "docker.png", label: "Docker" },
    { image_name: "nginx.png", label: "Nginx" },
    { image_name: "fastlane.png", label: "Fastlane" },
];

var tdp_cards = new Card(tdp_container, tdp_items);
tdp_cards.render();
