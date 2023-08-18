//Read more btn
const parentContainer = document.querySelector(".section2");
parentContainer.addEventListener("click" , event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes("btn-read");
    
    if(!isReadMoreBtn) return;

    const currentText = document.getElementById("read-more");

    currentText.classList.toggle('show'); //สร้าง class show ขึ้นมา
    current.textContent = current.textContent.includes("ดูเพิ่ม") ? "ย่อ":"ดูเพิ่ม";

})
//slide piecture btn
