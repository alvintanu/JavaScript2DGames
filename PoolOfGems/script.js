uangPool()

function uangPool() {
    const uangNow = document.getElementById("nbr").innerHTML;
    const rand = Math.floor(Math.random() * 18000) + 2000;
    const randTime = Math.floor(Math.random() * 18000) + 6000;
    const formatIDR = new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(uangNow)
    document.getElementById("nbr").innerHTML = +uangNow + rand;
    document.getElementById("nbr-visible").innerHTML = formatIDR;
    setTimeout(uangPool, randTime);
}
const start = () => {
    setTimeout(function () {
        confetti.start()
    }, 2000);
};

const stop = () => {
    setTimeout(function () {
        confetti.stop()
    }, 8000);
};
start();
stop();

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const cal = new Date();
document.getElementById("cal").innerHTML = cal.getDate() + " " + months[cal.getMonth()] + " " + cal.getFullYear()

const m = new Date();
var mNow = m.getMonth();
var countDownDate = new Date(months[mNow] + " 15, 2022 23:59:59").getTime();

var x = setInterval(countDownBlueDiamond, 1000);

function countDownBlueDiamond() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("countdown").innerHTML = "EXPIRED";
        mNow++;
        countDownDate = new Date(months[mNow] + " 15, 2022 23:59:59").getTime();
        countDownBlueDiamond();
    }
}