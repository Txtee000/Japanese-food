const toggle = document.getElementById("title");
const Imgshow = document.getElementById("making");
const showContent = document.getElementById("content");
toggle.onclick = function(){
    showContent.classList.toggle("active");//เนื้อหาหารทำ rice show
    Imgshow.classList.toggle("active") //เปลี่ยนรูปหัวข้อ
}