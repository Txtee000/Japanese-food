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