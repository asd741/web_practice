var portfolioBtns = document.querySelectorAll("#portfolio .checkbar ul li"),
    btnAll = portfolioBtns[0],
    btnWeb = portfolioBtns[1],
    btnPhotography = portfolioBtns[2],
    btnMoblie = portfolioBtns[3],
    btnBranding = portfolioBtns[4],
    portfolioImgs = document.querySelectorAll("#portfolio .row img");
btnAll.classList.add("checkbarCk");
btnAll.onclick = function () {
    for (i = 0; i < portfolioBtns.length; i++) {
        portfolioBtns[i].classList.remove("checkbarCk");
    }
    this.classList.add("checkbarCk");
    filter("all");
}
btnWeb.onclick = function () {
    for (i = 0; i < portfolioBtns.length; i++) {
        portfolioBtns[i].classList.remove("checkbarCk");
    }
    this.classList.add("checkbarCk");
    filter("web");
}
btnPhotography.onclick = function () {
    for (i = 0; i < portfolioBtns.length; i++) {
        portfolioBtns[i].classList.remove("checkbarCk");
    }
    this.classList.add("checkbarCk");
    filter("photography");
}
btnMoblie.onclick = function () {
    for (i = 0; i < portfolioBtns.length; i++) {
        portfolioBtns[i].classList.remove("checkbarCk");
    }
    this.classList.add("checkbarCk");
    filter("moblie");
}
btnBranding.onclick = function () {
    for (i = 0; i < portfolioBtns.length; i++) {
        portfolioBtns[i].classList.remove("checkbarCk");
    }
    this.classList.add("checkbarCk");
    filter("branding");
}
function filter(tag) {
    for (i = 0; i < portfolioImgs.length; i++) {
        portfolioImgs[i].classList.add("imgHide");
        portfolioImgs[i].classList.remove("order1");
        if (portfolioImgs[i].getAttribute("tag").indexOf(tag) !== -1) {
            portfolioImgs[i].classList.add("order1");
            portfolioImgs[i].classList.remove("imgHide");
        }
    }
}