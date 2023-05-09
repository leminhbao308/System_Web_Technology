//--------------------------------- Header
const toggle_down = document.getElementById("toggle-arrow")
const toggle_account = document.getElementById("account")
//-------------------Contact
let count = 0;
toggle_down.addEventListener('click', () => {
    const show_info = document.getElementById("show-info")
    const togle_up = document.getElementById("up")
    const show_account = document.getElementById("show-account")
    const content_contact = document.getElementById("content-contact")
    const toggle_showAccount = document.getElementById("account")

    if (count % 2 === 0) {
        toggle_down.innerHTML = '<i id="up" class="bx bx-chevron-up"></i>'
        show_info.style.display = "flex";
        content_contact.style.height = "130px"
        toggle_showAccount.style.display = "flex";
        show_info.style.transition = ".5s"

    } else {
        show_account.style.display = "none";
        show_info.style.display = "none";
        content_contact.style.height = "auto"
        toggle_account.innerHTML = '<i id="show-menu" class="bx bx-menu"></i>';
        toggle_account.style.display = "none";
        toggle_down.innerHTML = '<i id="down" class="bx bx-chevron-down" ></i>'
    }
    count++;
})

let countMenu = 0;
toggle_account.addEventListener('click', () => {

    const show_account = document.getElementById("show-account")
    const content_contact = document.getElementById("content-contact")
    if (countMenu % 2 === 0) {
        show_account.style.display = "flex";
        content_contact.style.height = "300px"
        toggle_account.innerHTML = '<i class="bx bx-x" ></i>'
    } else {
        // var i = document.createElement()
        toggle_account.innerHTML = '<i id="show-menu" class="bx bx-menu"></i>';
        show_account.style.display = "none";
        content_contact.style.height = "130px"
        console.log(toggle_account.innerHTML)
    }
    countMenu++;
})
//------------------- nav

const show_menu = document.getElementById("showMenu")
let countNavMenu = 0;
show_menu.addEventListener('click', () => {
    const navMenu = document.getElementById("navMenu")

    if (countNavMenu % 2 === 0) {
        navMenu.style.display = "block"
        show_menu.innerHTML = '<i class="bx bx-x" ></i>'
    } else {
        navMenu.style.display = "none"
        show_menu.innerHTML = '<i class="bx bx-menu" ></i>'
    }
    countNavMenu++;
})

const showFormSearch = document.getElementById("showFormSearch")
showFormSearch.addEventListener("click", () => {
    var form = document.getElementById("formSearch")
    form.style.display = "flex"
})

const closeSearch = document.getElementById("closeSearch")
closeSearch.addEventListener('click', () => {
    var form = document.getElementById("formSearch")
    form.style.display = "none"
    console.log(form)
})

