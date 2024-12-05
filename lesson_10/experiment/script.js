const btn1 = document.getElementById("button1");
const clonedBtn = btn.cloneNode(true);
clonedBtn.id = "button2";

document.getElementById("button1").addEventListener("click", function() {
    document.title = "Новый заголовок";
});