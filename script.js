document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".animate-text");
    const sub = document.querySelector(".animate-sub");

    text.style.opacity = 0;
    sub.style.opacity = 0;

    setTimeout(() => {
        text.style.transition = "1s";
        text.style.opacity = 1;
        text.style.transform = "translateY(-10px)";
    }, 300);

    setTimeout(() => {
        sub.style.transition = "1s";
        sub.style.opacity = 1;
        sub.style.transform = "translateY(-10px)";
    }, 800);
});
