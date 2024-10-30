const formInputDOB = document.querySelector(".form-signup form .signup-input-dob #dob")

/* Xu ly show date picker khi click vafo field input date ma khong can phai click vao dung icon */
formInputDOB.addEventListener("click", (e) => {
    e.preventDefault();
    formInputDOB.showPicker();
});