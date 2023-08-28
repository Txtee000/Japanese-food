const currentBg = document.getElementById("container2")

const toggle = document.getElementById("title");
const Imgshow = document.getElementById("making");
const showContent = document.getElementById("content");
toggle.onclick = function(){
    showContent.classList.toggle("active");//เนื้อหาการทำ rice show
    Imgshow.classList.toggle("active") //เปลี่ยนรูปหัวข้อ

    Imgshow2.classList.toggle("inactive");
    Imgshow3.classList.toggle("inactive");
    Imgshow4.classList.toggle("inactive");

    currentBg.classList.toggle("add1");
}

const toggle2 = document.getElementById("title2");
const Imgshow2 = document.getElementById("making2");
const showContent2 = document.getElementById("content2");
toggle2.onclick = function(){
    showContent2.classList.toggle("active");//เนื้อหาการทำ rice show
    Imgshow2.classList.toggle("active") //เปลี่ยนรูปหัวข้อ

    Imgshow.classList.toggle("inactive");
    Imgshow3.classList.toggle("inactive");
    Imgshow4.classList.toggle("inactive");

    currentBg.classList.toggle("add2");
}

const toggle3 = document.getElementById("title3");
const Imgshow3 = document.getElementById("making3");
const showContent3 = document.getElementById("content3");
toggle3.onclick = function(){
    showContent3.classList.toggle("active");//เนื้อหาการทำ rice show
    Imgshow3.classList.toggle("active") //เปลี่ยนรูปหัวข้อ

    Imgshow.classList.toggle("inactive");
    Imgshow2.classList.toggle("inactive");
    Imgshow4.classList.toggle("inactive");

    currentBg.classList.toggle("add3");
}

const toggle4 = document.getElementById("title4");
const Imgshow4 = document.getElementById("making4");
const showContent4 = document.getElementById("content4");
toggle4.onclick = function(){
    showContent4.classList.toggle("active");//เนื้อหาการทำ rice show
    Imgshow4.classList.toggle("active") //เปลี่ยนรูปหัวข้อ

    Imgshow.classList.toggle("inactive");
    Imgshow2.classList.toggle("inactive");
    Imgshow3.classList.toggle("inactive");

    currentBg.classList.toggle("add4");
}

