const toggleDown = document.getElementById("toggle-down")

console.log(toggleDown)
let countlv1 = 0;
toggleDown.addEventListener('click', () => {
    const showInfo = document.getElementById('show-info')
    const showToggleMenu = document.getElementById('login')
    const showAccount = document.getElementById('show-account')
    if (countlv1 % 2 === 0) {
        showInfo.style.display = "flex"
        showToggleMenu.style.display = "flex"
        toggleDown.innerHTML = '<i id="up" class="bx bx-chevron-up"></i>'
    } else {
        showInfo.style.display = "none"
        showToggleMenu.style.display = "none"
        toggleDown.innerHTML = '<i id="down" class="bx bx-chevron-down" ></i>'
        showAccount.style.display = "none"

    }
    countlv1++;


})

const showToggleMenu = document.getElementById('login')
let countlv2 = 0;
showToggleMenu.addEventListener('click', () => {
    const showAccount = document.getElementById('show-account')

    if (countlv2 % 2 === 0) {
        showAccount.style.display = "flex"
    } else {
        showAccount.style.display = "none"
    }
    countlv2++;
})

const showSearch = document.getElementById('toggleSearch')
showSearch.addEventListener('click', () => {
    const formSearch = document.getElementById("formSearch")
    formSearch.style.display = "flex";
    const closeSearch = document.getElementById("closeSearch")
    closeSearch.addEventListener('click', () => {
        const formSearch = document.getElementById("formSearch")
        formSearch.style.display = "none";
    })
})

const navMenu = document.getElementById('navMenu')
const showMenuMain = document.getElementById('showMenu')

let countlv3 = 0;
showMenuMain.addEventListener('click', () => {
    if (countlv3 % 2 === 0) {
        navMenu.style.display = "flex"

    } else {
        navMenu.style.display = "none"
    }
    countlv3++;
})
