function play() {

    let list = [
        "😂 قول اسمك بالعكس",
        "🎤 غني 5 ثواني",
        "🐧 امشي مثل البطريق",
        "🤣 اضحكي 10 ثواني",
        "🤔 جاوبي سؤال",
        "🎨 قولي 3 ألوان بسرعة",
        "😈 اقفزي 5 مرات"
    ];

    let random = Math.floor(Math.random() * list.length);

    document.getElementById("result").innerText = list[random];

    // تغيير لون الخلفية
    let colors = ["#ffe4e1", "#e0ffff", "#fffacd", "#e6e6fa"];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}