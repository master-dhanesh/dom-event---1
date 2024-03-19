const card = document.querySelector(".card");
const heart = document.querySelector(".heart");

card.addEventListener("dblclick", function () {
    heart.style.scale = 1;
    heart.style.opacity = 1;

    setTimeout(() => {
        heart.style.scale = 0;
        heart.style.opacity = 0;
    }, 350);
});

const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", function (e) {
    cursor.style.left = `${e.x + 10}px`;
    cursor.style.top = `${e.y + 10}px`;
});

card.addEventListener("mouseover", function (e) {
    cursor.style.scale = 3;
});
card.addEventListener("mouseleave", function (e) {
    cursor.style.scale = 1;
});
