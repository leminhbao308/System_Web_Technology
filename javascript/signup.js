const userName = document.querySelector(".form-signup form .signup-input-username #username");
const fullName = document.querySelector(".form-signup form .signup-input-fullname #fullname");
const formInputDOB = document.querySelector(".form-signup form .signup-input-dob #dob");
const address = document.querySelector(".form-signup form .signup-input-address #address");
const email = document.querySelector(".form-signup form .signup-input-email #email");
const phone = document.querySelector(".form-signup form .signup-input-phone #phone");
const password = document.querySelector(".form-signup form .signup-input-password #password");
const confirmPassword = document.querySelector(".form-signup form .signup-input-confirm-password #confirm-password");
const btnSignup = document.querySelector(".form-signup form .button-signup #signup");

// log bug
const usernameLog = document.querySelector(".username-log");


/* Xu ly show date picker khi click vafo field input date ma khong can phai click vao dung icon */
formInputDOB.addEventListener("click", (e) => {
    e.preventDefault();
    formInputDOB.showPicker();
});

// Xu ly data khi nguoi dung moveon ra khoi field input
userName.addEventListener("blur", () => {
    if(clearAllSpace(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập không được để trống");
    } else {
        loggingBug(false, usernameLog);
    }

    if (lowerCaseField(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập không được chứa khoảng trắng");
    } else {
        loggingBug(false, usernameLog);
    }

    if (hasVietnameseDiacritics(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập không được chứa ký tự tiếng Việt có dấu");
    } else {
        loggingBug(false, usernameLog);
    }

    if (hasSpecialCharacters(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập không được chứa ký tự đặc biệt");
    } else {
        loggingBug(false, usernameLog);
    }
});


/**
 * @param {element} element querySelector input
 * @returns {string} tra ve gia tri cua field input sau khi da xoa bo khoang trang
 */
function clearAllSpace(element) {
    return element.value = element.value.replace(/\s+/g, "");
}

/**
 * 
 * @param {element} element querySelector input
 * @returns {string} tra ve gia tri cua field input sau khi da chuan hoa lower case
 */
function lowerCaseField(element) {
    return element.value = element.value.toLowerCase();
}

/**
 * Kiem tra gia tri cua field input co chua ky tu tieng viet co dau hay khong
 * 
 * @param {element} element querySelector input
 * @returns {boolean} true neu co ky tu tieng viet co dau, false neu khong co ky tu tieng viet co dau
 */
function hasVietnameseDiacritics(element, log, message) {
    const vietnameseRegex = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]/;
    return vietnameseRegex.test(element.value);
}

/**
 * Kiem tra gia tri cua field input co chua ky tu dac biet hay khong
 * @param {element} element querySelector input
 * @returns {boolean} true neu co ky tu dac biet, false neu khong co ky tu dac biet
 */
function hasSpecialCharacters(element) {
    const specialCharactersRegex = /[^a-zA-Z0-9]/;
    return specialCharactersRegex.test(element.value);
}

function loggingBug(result, log, message) {
    if (result) {
        log.innerHTML = message;
        log.style.color = "red";
    } else {
        log.innerHTML = "*";
        log.style.color = "#3350fe";
    }
}