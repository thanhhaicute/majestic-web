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

    document.getElementById("howto-h2").innerHTML = "LÀM THẾ NÀO ĐỂ CHƠI";
    document.getElementById("howto-p").innerHTML = `GTA 5 RP là một cấp độ mới của trò chơi trực tuyến. Vào vai một tên cướp hoặc một
    cảnh sát, một
    quan chức hoặc một bác sĩ, một tên mafia hoặc một nhân viên FBI. Trải nghiệm bầu không khí của
    thế giới game nhập vai tuyệt vời với thế giới thực tế của GTA 5 trên máy chủ Majestic Role Play!`;



    document.getElementById("b1-btn").innerHTML = "Mua GTA 5";
    document.getElementById("b2-btn").innerHTML = "Tải RAGEMP";
    document.getElementById("b3-btn").innerHTML = "Chơi ngay";

    document.getElementById("b1").innerHTML = "Bước 1";
    document.getElementById("b2").innerHTML = "Bước 1";
    document.getElementById("b3").innerHTML = "Bước 1";

    document.getElementById("b1-h3").innerHTML = "Cài đặt GTA 5 được cấp phép";
    document.getElementById("b2-h3").innerHTML = "Cài đặt Trình khởi chạy RAGEMP";
    document.getElementById("b3-h3").innerHTML = "Chọn Máy chủ GTA 5 RP";

    document.getElementById("b1-p").innerHTML = "Bất kỳ phiên bản nào của GTA 5 (Steam, Epic hoặc Social Club) đều phù hợp để chơi trên máy chủ";
    document.getElementById("b2-p").innerHTML = "Để kết nối ngay lập tức với máy chủ yêu thích của bạn";
    document.getElementById("b3-p").innerHTML = "Có một số máy chủ trò chơi trong dự án của chúng tôi. Chọn một trong những phù hợp với bạn";

    document.getElementById("howto1").innerHTML = "ROLEPLAY LÀ GÌ?";
    document.getElementById("howo-p1").innerHTML = `Các chế độ trò chơi. Những người chơi nhảy vào một trong các máy chủ RP của chúng
    tôi thậm chí
    còn đắm chìm hơn vào trò chơi khi họ ở dạng một NPC bình thường, có thể được tùy chỉnh theo một
    số cách khác nhau. Các hành động của người chơi tạo ra một tình huống nhập vai, hành động các
    nhân vật của chính họ, được hướng dẫn bởi bản chất của vai trò của họ trong thực tế trò chơi.
. `;
    document.getElementById("howto2").innerHTML = `MAJESTIC V LÀ....`;
    document.getElementById("howo-p2").innerHTML = `Máy chủ được phát triển trên nền tảng RAGE Multiplayer. Bạn có thể đóng vai được
    chọn trong vũ
    trụ ảo, tuân theo các quy tắc của cuộc sống thực. Trở thành chính trị gia, xã hội đen, doanh
    nhân, tài xế taxi, công nhân nhà máy, cảnh sát, nói chung - bất kỳ ai.</p>
.`;
    document.getElementById("License").innerHTML = "BẢN QUYỀN THUỘC VỀ";


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

    document.getElementById("howto-h2").innerHTML = "HOW TO START PLAYING ";
    document.getElementById("howto-p").innerHTML = `GTA 5 RP is a new level of online games. Play as a bandit or a policeman, an official or a medic, a mafia or an FBI employee. Experience the atmosphere of the amazing world of role-playing games with the realistic world of GTA 5 on the Majestic Role Play server!`;

    document.getElementById("b1-btn").innerHTML = "Buy GTA 5";
    document.getElementById("b2-btn").innerHTML = "Download RAGEMP";
    document.getElementById("b3-btn").innerHTML = "Play on the server";

    document.getElementById("b1").innerHTML = "Step 1";
    document.getElementById("b2").innerHTML = "Step 2";
    document.getElementById("b3").innerHTML = "Step 3";

    document.getElementById("b1-h3").innerHTML = "Install licensed GTA 5";
    document.getElementById("b2-h3").innerHTML = "Install the Majestic Launcher";
    document.getElementById("b3-h3").innerHTML = "Select GTA 5 RP Server";

    document.getElementById("b1-p").innerHTML = "Any version of GTA 5 (Steam, Epic or Social Club) is suitable for playing on the server";
    document.getElementById("b2-p").innerHTML = "To instantly connect to your favorite server";
    document.getElementById("b3-p").innerHTML = "There are several game servers on our project. Choose the one that is right for you";

    document.getElementById("howto1").innerHTML = "WHAT IS ROLE PLAY?";
    document.getElementById("howo-p1").innerHTML = `The game mode. Players who jump into one of our RP servers become even more immersed in the game as they take on the form of a normal NPC, which can be customized in a number of different ways. The actions of the players create a role-playing situation, act out their own characters, guided by the nature of their role within the game realities. `;
    document.getElementById("howto2").innerHTML = `MAJESTIC IS...`;
    document.getElementById("howo-p2").innerHTML = `The server is developed on the RAGE Multiplayer platform. You can play the chosen role in the virtual universe, obeying the rules of real life. Become a politician, a gangster, a businessman, a taxi driver, a factory worker, a policeman, in general - anyone.`;
    document.getElementById("License").innerHTML = "COPYRIGHT BELONG TO";

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
function footer() {
    window.scrollTo({
        top: 3300,
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
fetch("https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
    .then(response => response.json())
    .then(data => console.log(data))