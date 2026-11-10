const counter = document.querySelector(".Counter")
const minus = document.querySelector(".minus")
const btnCounter = document.querySelector(".btn-Counter")
const addition = document.querySelector(".Addition")

let a = Number(localStorage.getItem("counter"));
function render() {
    counter.textContent = a;
    localStorage.setItem("counter",a);
    if (a >= 5) {
        counter.style.color = "red";
    }else{
        counter.style.color = "#0f1c50";
    }
    if (a >= 10) {
        addition.disabled = true;
    }else{
        addition.disabled = false;
    }
    if (a === 0) {
        minus.disabled = true;
    }else{
        minus.disabled = false;
    }
}
addition.addEventListener("click" , ()=>{
    if (a < 10) a++;
    render();
})
minus.addEventListener("click" , ()=>{
    if (a > 0) a--;
    render();
})
btnCounter.addEventListener("click" , ()=>{
    a = 0;
    render();
})
render();

