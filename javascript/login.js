
const submit = document.getElementById("login")


submit.addEventListener("click", (e) => {
    e.preventDefault();
    var username = "admin"
    var password = "admin"

    const dataUSN = document.getElementById("username")
    const dataPW = document.getElementById("password")

    if (dataUSN.value === username && dataPW.value === password) {
        const check = confirm("Bạn chắc chắn muốn chuyển qua trang admin?")
        if (check === true) {
            window.location.href = "/html/admin/admin.html"
        } else {
            window.location.href = "/html/index.html"
        }
        
    } else {
        alert("Có thể bạn chưa có tài khoản hoặc Sai username password.Vui lòng nhập lại!")
    }
})