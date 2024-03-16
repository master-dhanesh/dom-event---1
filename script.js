const heart = document.querySelector(".heart");
const card = document.querySelector(".card");

card.addEventListener("dblclick", function () {
    heart.style.opacity = 1;
    heart.style.scale = 1;
    setTimeout(() => {
        heart.style.opacity = 0;
        heart.style.scale = 0;
    }, 350);
});
