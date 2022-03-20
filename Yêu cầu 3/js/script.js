function MyTime()
{
    var d = new Date();

    // Lấy giờ hiện tại
    var h = d.getHours();

    // Lấy phút hiện tại
    var m = d.getMinutes();

    // Lấy giây hiện tại
    var s = d.getSeconds();

    // Kiểm tra giờ
    h = checkTime(h);

    // Kiểm tra phút
    m = checkTime(m);

    // Kiểm tra phút
    s = checkTime(s);

    // In ra thời gian
    document.getElementById("time-banner").innerHTML = h + ":" + m + ":" + s;

    if (h >= 0 && h < 12)
    {
      document.getElementById("banner").textContent = "Chào buổi sáng";
      banner.style.fontSize = "38px";
      document.getElementById("banner").style.fontfamily = Arial, Helvetica, sans-serif;
    }

    else if (h >= 12 && h < 17)
    {
      document.getElementById("banner").textContent = "Chào buổi chiều";
      banner.style.fontSize = "52px";
      banner.style.fontfamily = Arial, Helvetica, sans-serif;
    }

    if (h >= 17 && h < 24)
    {
      document.getElementById("banner").textContent = "Chào buổi tối";
      banner.style.fontSize = "65px";
      banner.style.fontfamily = Arial, Helvetica, sans-serif;
    }

}

function checkTime(i)
{
    if (i < 10)
    {
        i = "0" + i;
    }
    return i;
}

function changecolor()
{
    var d = new Date();
    var s = d.getSeconds();
    col = ["red", "black"];
    var b = document.getElementById("banner");
    b.style.color = col[s % 2];
}

setInterval(changecolor, 1000);
setInterval(MyTime, 1000);