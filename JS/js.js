function btnProject(){
    document.getElementById("Projects").scrollIntoView({
        behavior : "smooth"
    })
}
function btndownload(){
    const link = document.createElement("a");
    link.href = "File/background-header.jpg";
    link.download = "gg.jpg"
    link.click();
}
const prosessText = document.querySelectorAll(".skills__nav p");
const prosessBar = document.querySelectorAll(".skills__skill-bar div");
const percentages = [10,50,15,20,90,95];
const see = new IntersectionObserver((elements,Bobserve) => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            const index = [...prosessBar].indexOf(element.target);
            const targetPercentage  = percentages[index];
            let counting = 0;
            const timer = setInterval(() =>{
                counting++;

                element.target.style.width = `${counting}%`;
                prosessText[index].innerHTML = `${counting}%`;


                if (counting >= targetPercentage) {
                    clearInterval(timer);
                }
            }, 20); 
            Bobserve.unobserve(element.target);
        }
    });
})
prosessBar.forEach(element => {
    see.observe(element);
})
const form = document.querySelector(".contact-me__form");
const inpname = document.querySelector(".contact-me__input-name");
const inpemail = document.querySelector(".contact-me__input-email");
const inpcomment = document.querySelector(".contact-me__input-comments");
const btn = document.querySelector(".contact-me__btn");
form.addEventListener("submit" , function(event){
    const name = inpname.value.trim();
    const email = inpemail.value.trim();
    const comment = inpcomment.value.trim();
    if (name === "" || name.length > 10 || /^[0-9]+$/.test(name)) {
        event.preventDefault();
        alert("لطفا نام را به صورت صحیح وارد کنید");
    }else if(email === "" || !email.includes("@")){
        event.preventDefault();
        alert("لطفا ایمیل را به صورت صحیح وارد کنید");
    }else if(comment === "" || comment.length < 10){
        event.preventDefault();
        alert("نظرات نباید کمتر از 10 حرف باشد")
    }else{
        event.preventDefault();
        console.log("everyone : ok");
    }
})

const mobile = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".mobile-menu img");
const menuHeader = document.querySelector(".menu-header");
menuHeader.addEventListener("click" , function(){
    mobile.style.right = "0";
})
closeIcon.addEventListener("click" , function(){
    mobile.style.right = "-15rem";
})