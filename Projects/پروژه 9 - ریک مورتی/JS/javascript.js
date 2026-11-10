const buttonLikeHeader = document.querySelector(".btn-topHeader");
const btnHeart = document.querySelector(".btn-topHeader path")
function btnHeartColor() {
    btnHeart.classList.toggle("btn-Heart-active");
}
buttonLikeHeader.addEventListener('click' , function(){
    btnHeartColor()
})
const btnHeartCart = document.querySelectorAll(".Des-name svg");
btnHeartCart.forEach((heart) => {

    heart.addEventListener("click", () => {
        heart.classList.toggle("btn-color-cards-active");
    });

});