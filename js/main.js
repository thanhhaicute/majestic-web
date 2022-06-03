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

    document.getElementById("freedom-title").innerHTML = "TỰ DO LỰA CHỌN";
    document.getElementById("independent-title").innerHTML = "SỰ ĐỘC LẬP";
    document.getElementById("quality-title").innerHTML = "CHẤT LƯỢNG TRÒ CHƠI";

    document.getElementById("freedom-box").innerHTML = "TỰ DO LỰA CHỌN";
    document.getElementById("independent-box").innerHTML = "SỰ ĐỘC LẬP";
    document.getElementById("quality-box").innerHTML = "CHẤT LƯỢNG TRÒ CHƠI";

    document.getElementById("freedom").innerHTML = `Thực hiện các quy tắc của bạn, trở thành người chơi có ảnh hưởng nhất trên máy chủ GTA 5 RP. Tập
    hợp
    một băng đảng hoặc một tổ chức tội phạm lại với nhau. Bắt đầu đóng vai kẻ xấu: bắt cóc người,
    tống
    tiền, hoàn thành nhiệm vụ, đột kích và cướp của.
    Nhưng bất cứ lúc nào bạn có thể đi về phía tươi sáng. Là người đứng đầu an ninh, giữ gìn trật tự
    trong tiểu bang. Tổ chức các cuộc đột kích vào các khu vực tội phạm, mở các băng nhóm và tiến
    hành
    các cuộc truy bắt RP cao cấp của những người có ảnh hưởng lớn nhất trong bang.`;
    document.getElementById("independent").innerHTML = `Mệt mỏi với những cuộc tranh giành tội phạm và sự quấy rối liên tục của cảnh sát, nhưng bạn
    không
    thích tuân theo luật và tìm hiểu điều lệ? Bắt đầu làm việc cho chính mình! Kiếm tiền trên xe bán
    tải, xe tải hoặc máy kéo của riêng bạn. Trở thành người vận chuyển hàng hóa độc lập, nhận mức
    lương
    xứng đáng cho công việc của bạn.
    Nhưng đó không phải là tất cả. Bạn có thể mua doanh nghiệp của riêng mình trong thế giới GTA và
    ngừng hoạt động, tiền sẽ tự đến tài khoản của bạn. Điều chính là kiểm soát số lượng hàng hóa
    trong
    kho và để mắt đến đối thủ cạnh tranh.`;
    document.getElementById("quality").innerHTML = ` Majestic V - một mod trò chơi độc đáo được viết từ đầu. Bao gồm các giải pháp kỹ thuật tốt nhất,
    trình bày trực quan dễ chịu và quan trọng nhất - nhiều lựa chọn cơ hội.
    Mục tiêu của chúng tôi là cung cấp cho người chơi một máy chủ GTA 5 RP duy nhất để có một trò
    chơi
    thoải mái và một thú tiêu khiển thú vị với bạn bè`;

    document.getElementById("btn-play").innerHTML = "CHƠI NGAY";

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

    document.getElementById("freedom-title").innerHTML = "FREEDOM OF CHOICE";
    document.getElementById("independent-title").innerHTML = "INDEPENDENCE";
    document.getElementById("quality-title").innerHTML = "GAME QUALITY";


    document.getElementById("freedom-box").innerHTML = "FREEDOM OF CHOICE";
    document.getElementById("independent-box").innerHTML = "INDEPENDENCE";
    document.getElementById("quality-box").innerHTML = "GAME QUALITY";


    document.getElementById("freedom").innerHTML = `Dictate your rules, become the most influential player on the GTA 5 RP server. Bring a gang or a criminal organization together. Start playing the bad guy: kidnap people, engage in extortion, complete tasks, raid and robbery.

    But at any moment you can go to the bright side. Be the head of security, keep order in the state. Organize raids into criminal areas, open gangs and conduct high-profile RP arrests of the most influential people in the state.`;
    document.getElementById("independent").innerHTML = `Tired of criminal squabbles and constant police harassment, but you don't like to follow the laws and learn the charter? Start working for yourself! Earn on your own pickup truck, truck or tractor. Become an independent cargo carrier, get a decent salary for your work.

    But that's not all. You can buy your own business in the GTA world and stop working, the money will come to your account by itself. The main thing is to control the quantity of goods in stock and keep an eye on competitors.`;
    document.getElementById("quality").innerHTML = `Majestic V — a unique game mod written from scratch. Includes the best technical solutions, pleasant visual presentation, and most importantly – a wide selection of opportunities.

    Our goal is to provide players with a unique GTA 5 RP server for a comfortable game and a pleasant pastime with friends`;

    document.getElementById("btn-play").innerHTML = "PLAY NOW";


}
function gotohome() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
function howtoplay() {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth',
    });
}
function gotoinfo() {
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