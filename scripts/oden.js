//*******************************Read more btn********************************\\
const parentContainer = document.querySelector(".section");
parentContainer.addEventListener("click" , event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes("btn-read");
    
    if(!isReadMoreBtn) return;

    const currentText = document.getElementById("read-more");
    // const currentBg = document.getElementById("container2") //add area container2

    currentText.classList.toggle('show'); //สร้าง class show ขึ้นมา
    // currentBg.classList.toggle("add");
    current.textContent = current.textContent.includes("ดูเพิ่ม") ? "ย่อ":"ดูเพิ่ม";

})

//************************************** btn click *************************************\\
const toggle = document.getElementById("title");
const Imgshow = document.getElementById("making");
const showContent = document.getElementById("ingredient");
const toggleArrow = document.getElementById("arrow")
toggle.onclick = function(){
    showContent.classList.toggle("active");//เนื้อหาการทำ rice show

    // Imgshow2.classList.toggle("inactive");
    // Imgshow3.classList.toggle("inactive");
    // Imgshow4.classList.toggle("inactive");

    // currentBg.classList.toggle("add1");
}
//**************************************slide piecture btn**********************************************\\
//set1
var indexValue = 1; //ใช้คู่กับ html onclick
showImg (indexValue);
function btn_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e){
    var i;
    const img1 = document.querySelectorAll(".view1 img");
    const slide1 = document.querySelectorAll(".tab-slide1 span");
    if(e > img1.length){indexValue = 1}
    if(e < 1){indexValue = img1.length}
    for(i = 0; i < img1.length; i++){
        img1[i].style.display = "none";
    }
    for(i = 0; i < slide1.length; i++){
        slide1[i].style.background = "rgb(27, 27, 27)";
    }
    img1[indexValue-1].style.display = "block";
    slide1[indexValue-1].style.background = "rgba(255, 109, 109, 1)";
}