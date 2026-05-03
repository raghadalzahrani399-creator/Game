function play() {

    // رقم عشوائي من 1 إلى 20
    let number = Math.floor(Math.random() * 20) + 1;

    document.getElementById("result").innerText = number;

    // تغيير لون الخلفية
    let colors = [
        "#ff9a9e",
        "#a18cd1",
        "#fbc2eb",
        "#fad0c4",
        "#84fab0",
        "#8fd3f4"
    ];

    document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    // 👇 يخفي الزر بعد أول ضغطة
    let btn = document.querySelector("button");
    btn.style.display = "none";
}
