const userName = document.querySelector(".form-signup form .signup-input-username #username");
const fullName = document.querySelector(".form-signup form .signup-input-fullname #fullname");
const dob = document.querySelector(".form-signup form .signup-input-dob #dob");
const address = document.querySelector(".form-signup form .signup-input-address #address");
const email = document.querySelector(".form-signup form .signup-input-email #email");
const phone = document.querySelector(".form-signup form .signup-input-phone #phone");
const password = document.querySelector(".form-signup form .signup-input-password #password");
const confirmPassword = document.querySelector(".form-signup form .signup-input-confirm-password #confirm-password");
const btnSignup = document.querySelector(".form-signup form .button-signup #signup");

// log bug
const usernameLog = document.querySelector(".username-log");
const fullnameLog = document.querySelector(".fullname-log");
const dobLog = document.querySelector(".dob-log");
const addressLog = document.querySelector(".address-log");
const emailLog = document.querySelector(".email-log");
const phoneLog = document.querySelector(".phone-log");
const passwordLog = document.querySelector(".password-log");
const confirmPasswordLog = document.querySelector(".confirm-password-log");

/** Xu ly data khi nguoi dung moveon ra khoi field input **/

/* Field username */
userName.addEventListener("blur", () => {
    // Chuan hoa
    clearAllSpace(userName)
    lowerCaseField(userName)
    // Kiem tra
    if (hasVietnameseDiacritics(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập không được chứa ký tự tiếng Việt có dấu");
        return;
    } else if (hasSpecialCharacters(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập không được chứa ký tự đặc biệt");
        return;
    } else if (!checkMinCharacter(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập phải có ít nhất 8 ký tự");
        return;
    } else if (!checkTheFirstCharacter(userName)) {
        loggingBug(true, usernameLog, "Tên đăng nhập phải bắt đầu bằng chữ cái");
        return;
    } else {
        loggingBug(false, usernameLog);
        return;
    }
});

fullName.addEventListener("blur", () => {
    var lower = lowerCaseField(fullName);

    /**
     * Logic Chuan hoa:
     * -- lowercase
     * -- split chuoi thanh cac tu
     * -- chuan hoa moi tu Viet In Hoa Chu Cai Dau cua moi tu
     * -- join lai thanh chuoi moi noi nhau bang dau cach
     */

    var words = lower.split(" ");
    var wordsResult = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i] != "") {
            wordsResult.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
        }
    }
    fullName.value = wordsResult.join(" ").trim();

    // Kiem tra

});

dob.addEventListener("click", (e) => {
    e.preventDefault();
    dob.showPicker();
});

address.addEventListener("blur", () => { });

email.addEventListener("blur", () => {
    // Chuan hoa
    clearAllSpace(email);
    lowerCaseField(email);

    // Kiem tra
    if (checkTheFirstCharacter(email)) {
        loggingBug(true, emailLog, "Email bat dau bang chu cai viet thuong");
        return;
    } else if (!checkFormatEmail(email)) {
        loggingBug(true, emailLog, "Email chi chua chu cai viet thuong, so va dau cham");
        return;
    } else {
        loggingBug(false, emailLog);
        return;
    }
});

phone.addEventListener("blur", () => { });

password.addEventListener("blur", () => { });

confirmPassword.addEventListener("blur", () => { });


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

/**
 * 
 * @param {element} element querySelector input
 * @returns {boolean} true neu gia tri cua field input co it nhat 8 ky tu, false neu gia tri cua field input khong co it nhat 8 ky tu
 */
function checkMinCharacter(element) {
    return element.value.length >= 8;
}

/**
 * 
 * @param {element} element querySelector input
 * @returns {boolean} true neu gia tri cua field input co it nhat 1 ky tu chu cai, false neu gia tri cua field input khong co it nhat 1 ky tu chu cai
 */
function checkTheFirstCharacter(element) {
    const firstCharacterRegex = /^[a-z]/;
    return firstCharacterRegex.test(element.value);
}

/**
 * 
 * @param {element} element querySelector input
 * @returns {boolean} true neu thoa dieu kien ten email bat dau bang chu cai viet thuong sau do la chu cai hoac so hoac dau cham, false neu khong thoa dieu kien
 */
function checkFormatEmail(element) {
    const emailRegex = /^[a-z]+[a-z0-9.]{4,}@gmail.com$/;
    return emailRegex.test(element.value);
}

function checkCharacter(element) {
    const characterRegex = /^[a-zA-Z]+$/;
    return characterRegex.test(element.value);
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