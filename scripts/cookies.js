let cookies = document.getElementById("cookies");
let button = document.getElementById("cookiesBtn");

if(localStorage.getItem("cookies")){
    cookies.style.display= "none";
}

button.addEventListener("click",()=>{
    cookies.style.display = "none";
    localStorage.setItem("cookies", true);
    setTimeout((()=>{localStorage.removeItem("cookies")}),120 *1000);

})