
var ten = "Trần Lâm Huy";
var MSSV = "31241023748";
var level = 1;
var xp = 0;
var skillPoints = 5;
var phancap = "Chưa chọn";

level++;
xp = 150 * (level - 1) + 200;
skillPoints = skillPoints + xp / 10;

var strength = 0.6 * skillPoints + 0.1 * xp;
var agility = 0.2 * skillPoints + 0.2 * xp;
var intel = 0.2 * skillPoints + 10 * level;

var thongBao = ten + " sẽ là Anh Hùng Javascript<br>";
thongBao += "LEVEL UP! Chúc mừng bạn lên cấp 2!<br>";

level = 3;
xp = xp + 200;
thongBao += "LEVEL UP! Chúc mừng bạn lên cấp 3! XP +200<br>";

var health = 105;
var dragonHealth = 600;
var dragonStr = 100;
var dragonAgi = 15;
var dragonInt = 80;
var gameContinue = true;
var daChon = false;
var batDau = false;

function hienThi() {
    document.getElementById("thongTin").innerHTML =
        thongBao +
        "Phân cấp: " + phancap + "<br>" +
        "Level hiện tại: " + level + "<br>" +
        "XP hiện tại: " + xp + "<br>" +
        "Điểm kỹ năng: " + skillPoints + "<br>" +
        "Strength: " + strength + "<br>" +
        "Agility: " + agility + "<br>" +
        "Intel: " + intel + "<br>";
}

function ghi(noiDung) {
    document.getElementById("lichSu").innerHTML += noiDung + "<br>";
}

function chonVai() {
    if (daChon) {
        alert("Bạn đã chọn phân cấp rồi!");
        return;
    }

    var nhapTen = prompt("Nhập lại tên của bạn:");
    if (nhapTen === null) return;

    if (nhapTen === ten) {
        intel += 5;
        alert("Chính xác! Bạn có trí nhớ rất tốt! Intel +5");
    } else {
        intel -= 5;
        alert("Sai tên! Intel -5");
    }

    var chon = prompt("Chọn phân cấp: a - Chiến Binh, b - Sát Thủ, c - Thợ Săn");

    switch (chon) {
        case "a":
            phancap = "Chiến Binh";
            strength += 15;
            agility -= 10;
            intel -= 5;
            break;

        case "b":
            phancap = "Sát Thủ";
            strength -= 15;
            agility += 10;
            intel += 5;
            break;

        case "c":
            phancap = "Thợ Săn";
            strength -= 15;
            intel += 15;
            break;

        default:
            alert("Bạn chọn sai! Hãy chọn a, b hoặc c.");
            return;
    }

    level = 4;
    xp += 700;
    daChon = true;

    alert("LEVEL UP! Chúc mừng bạn lên cấp 4! XP +700");
    ghi("Bạn đã chọn phân cấp " + phancap);
    hienThi();
}

function neDon(chiSo) {
    return Math.random() * 100 < chiSo;
}

function truMau(mau, satThuong) {
    return mau - satThuong;
}

function capNhatMau() {
    document.getElementById("mauNguoi").innerText = Math.max(0, health);
    document.getElementById("mauRong").innerText = Math.max(0, dragonHealth);
}

function tanCong() {
    if (!gameContinue) {
        alert("Trận đấu đã kết thúc! Hãy bấm Chơi lại.");
        return;
    }

    if (!daChon) {
        alert("Hãy chọn phân cấp trước khi chiến đấu!");
        return;
    }

    if (!batDau) {
        level = 5;
        batDau = true;
        alert("BATTLE! Bạn chạm trán Rồng Già!");
        ghi("Bắt đầu chiến đấu với Rồng Già!");
    }

    if (neDon(dragonAgi)) {
        alert("XÍ HỤT! Rồng đã né được đòn tấn công!");
        ghi("Rồng đã né được đòn tấn công!");
    } else {
        dragonHealth = truMau(dragonHealth, strength);
        alert("TRẢM LONG! Bạn gây " + strength + " sát thương cho Rồng!");
        ghi("Anh Hùng gây " + strength + " sát thương!");

        if (Math.random() * 100 < intel) {
            dragonHealth = truMau(dragonHealth, strength * 2);
            alert("CHÍ MẠNG! Bạn gây thêm " + strength * 2 + " sát thương!");
            ghi("Anh Hùng gây CHÍ MẠNG!");
        }
    }

    if (dragonHealth <= 0) {
        gameContinue = false;
        level = 6;
        xp += 600;

        alert("BATTLE WON! Chúc mừng bạn đã chiến thắng Rồng Già!");
        alert("LEVEL UP! Chúc mừng bạn lên cấp 6! XP +600");

        ghi("BATTLE WON! Bạn đã chiến thắng!");
        ghi("Danh hiệu: Dũng sĩ diệt Rồng!");
        ghi("LEVEL UP! Chúc mừng bạn lên cấp 6! XP +600");
    } else {
        if (neDon(agility)) {
            alert("XÍ HỤT! Bạn đã né được đòn tấn công của Rồng!");
            ghi("Anh Hùng đã né được đòn của Rồng!");
        } else {
            health = truMau(health, dragonStr);
            alert("HỎA CẦU! Rồng gây " + dragonStr + " sát thương cho bạn!");
            ghi("Rồng gây " + dragonStr + " sát thương!");

            if (Math.random() * 100 < dragonInt) {
                health = truMau(health, dragonStr * 2);
                alert("CHÍ MẠNG! Rồng gây thêm " + dragonStr * 2 + " sát thương!");
                ghi("Rồng gây CHÍ MẠNG!");
            }
        }

        if (health <= 0) {
            gameContinue = false;
            alert("THẤT BẠI! Anh Hùng đã bị Rồng đánh bại!");
            ghi("THẤT BẠI! Anh Hùng đã bị Rồng đánh bại!");
        }
    }

    capNhatMau();
    hienThi();
}

function tuDong() {
    if (!daChon) {
        alert("Hãy chọn phân cấp trước!");
        return;
    }

    while (gameContinue) {
        tanCong();
    }
}

hienThi();
capNhatMau();
