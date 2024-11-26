document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const menu = document.getElementById("menu");

    // 3초 후 인트로 메시지 사라짐
    setTimeout(() => {
        intro.classList.add("hidden"); // 인트로 숨기기
        menu.classList.remove("hidden"); // 메뉴판과 공지 표시
    }, 7000); // 3초 후 실행
});
