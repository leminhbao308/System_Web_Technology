// Pagination
let perPage = 12; // só dòng dữ liệu
let idPage = 1;
let start = 0;
let end = perPage;

const product = [
    { id: 1, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 2, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 3, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 4, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 5, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 6, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 7, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 8, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 9, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 10, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 11, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 12, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 13, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 14, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 15, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 16, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 17, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 18, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 19, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 20, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 21, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 22, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 23, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 24, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 25, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 26, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 27, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
    { id: 28, first: "Le Hoang", last: "Nam", phone: 0858484522, product: "Apple Macbook" },
]

let productArr = [];
let showAdd = false;

productArr = product;


const countTotalPage = document.querySelector('.total-page');
const countTotalProduct = document.querySelector('.total-item');

let totalPages = Math.ceil(productArr.length / perPage);


function initRender(productAr, totalPage) {
    renderProduct(productAr);
    renderListPage(totalPage);
}

initRender(productArr, totalPages);

// Hiển thị số page và số lượng file data
function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
}

getCurrentPage(1);

// Xuất dữ liệu ra màn hình
function renderProduct(product) {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<tr>'
            html += '<th class="stt" scope="row">' + item.id + '</th>'
            html += '<td>' + item.first + '</td>'
            html += '<td>' + item.last + '</td>'
            html += '<td>' + item.phone + '</td>'
            html += '<td>' + item.product + '</td>'
            html += '</tr>'
            return html;
        }
    });
    document.getElementById('product').innerHTML = html;
}
// list page (pagination)
function renderListPage(totalPages) {
    let html = '';
    html += `<li class="page-item current-page active"><a class="page-link">${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li class="page-item "><a class="page-link">${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}
// xử lý khi click vào số trang thì thay đổi dữ liệu trên table
function changePage() {
    const idPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.classList.add('active');
            if (value > 1 && value < idPages.length) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                $('.btn-next').addClass('btn-active');
                $('.btn-prev').removeClass('btn-active');
            }
            idPage = value;
            getCurrentPage(idPage);
            renderProduct(productArr);
        };
    }
}

changePage();

$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});


