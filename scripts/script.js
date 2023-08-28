//*******************************Read more btn********************************\\
const parentContainer = document.querySelector(".section2");
parentContainer.addEventListener("click" , event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes("btn-read");
    
    if(!isReadMoreBtn) return;

    const currentText = document.getElementById("read-more");
    const currentBg = document.getElementById("container2") //add area container2

    currentText.classList.toggle('show'); //สร้าง class show ขึ้นมา
    currentBg.classList.toggle("add");
    current.textContent = current.textContent.includes("ดูเพิ่ม") ? "ย่อ":"ดูเพิ่ม";

})
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
        slide1[i].style.background = "white";
    }
    img1[indexValue-1].style.display = "block";
    slide1[indexValue-1].style.background = "rgba(255, 109, 109, 1)";
}
//set2
var indexValue2 = 1; //ใช้คู่กับ html onclick
showImg2 (indexValue2);
function btn_slide2(e){showImg2(indexValue2 = e);}
function side_slide2(e){showImg2(indexValue2 += e);}
function showImg2(e){
    var i;
    const img2 = document.querySelectorAll(".view2 img");
    const slide2 = document.querySelectorAll(".tab-slide2 span");
    if(e > img2.length){indexValue2 = 1}
    if(e < 1){indexValue2 = img2.length}
    for(i = 0; i < img2.length; i++){
        img2[i].style.display = "none";
    }
    for(i = 0; i < slide2.length; i++){
        slide2[i].style.background = "white";
    }
    img2[indexValue2-1].style.display = "block";
    slide2[indexValue2-1].style.background = "rgba(255, 109, 109, 1)";
}
//set3
var indexValue3 = 1; //ใช้คู่กับ html onclick
showImg3 (indexValue3);
function btn_slide3(e){showImg3(indexValue3 = e);}
function side_slide3(e){showImg3(indexValue3 += e);}
function showImg3(e){
    var i;
    const img3 = document.querySelectorAll(".view3 img");
    const slide3 = document.querySelectorAll(".tab-slide3 span");
    if(e > img3.length){indexValue3 = 1}
    if(e < 1){indexValue3 = img3.length}
    for(i = 0; i < img3.length; i++){
        img3[i].style.display = "none";
    }
    for(i = 0; i < slide3.length; i++){
        slide3[i].style.background = "white";
    }
    img3[indexValue3-1].style.display = "block";
    slide3[indexValue3-1].style.background = "rgba(255, 109, 109, 1)";
}
//set4
var indexValue4 = 1; //ใช้คู่กับ html onclick
showImg4 (indexValue4);
function btn_slide4(e){showImg4(indexValue4 = e);}
function side_slide4(e){showImg4(indexValue4 += e);}
function showImg4(e){
    var i;
    const img4 = document.querySelectorAll(".view4 img");
    const slide4 = document.querySelectorAll(".tab-slide4 span");
    if(e > img4.length){indexValue4 = 1}
    if(e < 1){indexValue4 = img4.length}
    for(i = 0; i < img4.length; i++){
        img4[i].style.display = "none";
    }
    for(i = 0; i < slide4.length; i++){
        slide4[i].style.background = "white";
    }
    img4[indexValue4-1].style.display = "block";
    slide4[indexValue4-1].style.background = "rgba(255, 109, 109, 1)";
}
//set5
var indexValue5 = 1; //ใช้คู่กับ html onclick
showImg5 (indexValue5);
function btn_slide5(e){showImg5(indexValue5 = e);}
function side_slide5(e){showImg5(indexValue5 += e);}
function showImg5(e){
    var i;
    const img5 = document.querySelectorAll(".view5 img");
    const slide5 = document.querySelectorAll(".tab-slide5 span");
    if(e > img5.length){indexValue5 = 1}
    if(e < 1){indexValue5 = img5.length}
    for(i = 0; i < img5.length; i++){
        img5[i].style.display = "none";
    }
    for(i = 0; i < slide5.length; i++){
        slide5[i].style.background = "white";
    }
    img5[indexValue5-1].style.display = "block";
    slide5[indexValue5-1].style.background = "rgba(255, 109, 109, 1)";
}
//set6
var indexValue6 = 1; //ใช้คู่กับ html onclick
showImg6 (indexValue6);
function btn_slide6(e){showImg6(indexValue6 = e);}
function side_slide6(e){showImg6(indexValue6 += e);}
function showImg6(e){
    var i;
    const img6 = document.querySelectorAll(".view6 img");
    const slide6 = document.querySelectorAll(".tab-slide6 span");
    if(e > img6.length){indexValue6 = 1}
    if(e < 1){indexValue6 = img6.length}
    for(i = 0; i < img6.length; i++){
        img6[i].style.display = "none";
    }
    for(i = 0; i < slide6.length; i++){
        slide6[i].style.background = "white";
    }
    img6[indexValue6-1].style.display = "block";
    slide6[indexValue6-1].style.background = "rgba(255, 109, 109, 1)";
}


