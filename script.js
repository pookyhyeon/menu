document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const menu = document.getElementById("menu");

    setTimeout(() => {
        intro.classList.add("hidden");
        menu.style.display = "block";
    }, 5000); // 5초 후 메뉴판 표시
});
