function handleClickLaugues() {
    document.getElementById("laugues").style.display = "block";
    document.getElementById("text_diendan").style.color = "gray";
    document.getElementById("text_cuahang").style.color = "gray";
}
function handleClickForum() {
    document.getElementById("laugues").style.display = "none";
    document.getElementById("text_diendan").style.color = "white";
    document.getElementById("text_cuahang").style.color = "gray";
}
function handleClickShop() {
    document.getElementById("laugues").style.display = "none";
    document.getElementById("text_cuahang").style.color = "white";
    document.getElementById("text_diendan").style.color = "gray";
}
function lauguesvn() {
    document.getElementById("text_cuahang").innerHTML = "CỬA HÀNG";
    document.getElementById("text_diendan").innerHTML = "DIỄN ĐÀN";
    document.getElementById("text_laugues").innerHTML = "VIETNAM";
    document.getElementById("flag").src = './images/lauguges/vn.png';
    document.title = "Majestic V | Máy chủ RolePlay độc nhất Việt Nam";
    document.getElementById("laugues").style.display = "none";

    document.getElementById("btn-down").innerHTML = "TẢI RAGEMP";
    document.getElementById("btn-res").innerHTML = "ĐĂNG KÝ";
}
function lauguesus() {
    document.getElementById("text_cuahang").innerHTML = "STORE";
    document.getElementById("text_diendan").innerHTML = "FORUM";
    document.getElementById("text_laugues").innerHTML = "ENGLISH";
    document.getElementById("flag").src = './images/lauguges/en.svg';
    document.title = "Majestic V | The largest GTA 5 RP project on RAGE MP";
    document.getElementById("laugues").style.display = "none";

    document.getElementById("btn-down").innerHTML = "DOWNLOAD RAGEMP";
    document.getElementById("btn-res").innerHTML = "RESIGTER";
}
function gotohome() {
    document.getElementById("gotohome").style.backgroundColor = "#df005b";
    document.getElementById("gotoinfo").style.backgroundColor = "white";
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
function gotoinfo() {
    document.getElementById("gotoinfo").style.backgroundColor = "#df005b";
    document.getElementById("gotohome").style.backgroundColor = "white";

    window.scrollTo({
        top: 1000,
        behavior: 'smooth',
    });
}
function freedom() {
    document.getElementById("freedom").style.display = "block";
    document.getElementById("independent").style.display = "none";
    document.getElementById("quality").style.display = "none";
    document.getElementById("freedom-title").style.display = "block";
    document.getElementById("independent-title").style.display = "none";
    document.getElementById("quality-title").style.display = "none";

    document.getElementById("freedom-box").style.backgroundColor = "#df005b";
    document.getElementById("independent-box").style.backgroundColor = "white";
    document.getElementById("quality-box").style.backgroundColor = "white";
}
function independent() {
    document.getElementById("freedom").style.display = "none";
    document.getElementById("independent").style.display = "block";
    document.getElementById("quality").style.display = "none";
    document.getElementById("freedom-title").style.display = "none";
    document.getElementById("independent-title").style.display = "block";
    document.getElementById("quality-title").style.display = "none";

    document.getElementById("freedom-box").style.backgroundColor = "white";
    document.getElementById("independent-box").style.backgroundColor = "#df005b";
    document.getElementById("quality-box").style.backgroundColor = "white";
}
function quality() {
    document.getElementById("freedom").style.display = "none";
    document.getElementById("independent").style.display = "none";
    document.getElementById("quality").style.display = "block";
    document.getElementById("freedom-title").style.display = "none";
    document.getElementById("independent-title").style.display = "none";
    document.getElementById("quality-title").style.display = "block";

    document.getElementById("freedom-box").style.backgroundColor = "white";
    document.getElementById("independent-box").style.backgroundColor = "white";
    document.getElementById("quality-box").style.backgroundColor = "#df005b";

}