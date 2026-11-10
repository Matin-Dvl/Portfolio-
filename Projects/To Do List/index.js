let input = document.getElementById("input-work");
let addBtn = document.getElementById("btn-add");
let list = document.getElementById("list");
let counterBaghi = document.getElementById("counter-Baghi");
let counterShode = document.getElementById("counter-shode");
let btnClear = document.getElementById("btn-clear");

let karha = []
function render(){
    list.innerHTML = "";
    karha.forEach(function(kar){
        list.innerHTML += `<li class="flex items-center justify-between"> <label class="flex items-center"> <input type="checkbox"  class="ml-2" ${kar.done ? "checked":""}> <p class= "text-[#bdbfc2]">${kar.Work}</p> </label> <span><img src="./image/Close.svg" class="w-[15px]"></span> </li>`;
    })
    input.value = "";

    let doneCount = 0;
    karha.forEach(function(g) {
    if (g.done === true) {
        doneCount++;
    }
    });

    counterShode.textContent = doneCount;                 
    counterBaghi.textContent = karha.length - doneCount;  
}
list.addEventListener("change" , (e)=>{
    if(e.target.matches("input[type=checkbox]")){   
        let items = list.querySelectorAll("li");
        let index = Array.from(items).indexOf(e.target.closest("li"));
        karha[index].done = e.target.checked;
        render();
    }
})
addBtn.addEventListener("click" , ()=>{
    let valinput = input.value.trim();
    if(valinput === "")return;
    karha.push({Work:valinput,done:false});
    render();
})
btnClear.addEventListener("click" , ()=>{
    karha = [];
    render();
})