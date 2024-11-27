document.addEventListener("DOMContentLoaded", () => {
    // 메뉴 순환 처리
    const menuContainer = document.querySelector(".menu-categories");
    const menuItems = document.querySelectorAll(".menu-category");
    
    // 메뉴 복제하여 순환 자연스럽게 처리
    menuItems.forEach(item => {
        const clone = item.cloneNode(true);
        menuContainer.appendChild(clone);
    });

    // 컨테이너 너비 설정 (자동 계산)
    const totalWidth = menuItems.length * 220; // 각 메뉴 너비 (200px + 20px gap)
    menuContainer.style.width = `${totalWidth}px`;

    // 음식 궁합 테스트 처리
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const resultFood = document.getElementById("result-food");

    const answersToFood = {
        활기찬: "아메리카노",
        차분한: "치즈케이크",
        열정적인: "스테이크",
        편안한: "파스타"
    };

    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.getAttribute("data-answer");
            const food = answersToFood[answer];

            // 결과 표시
            questionContainer.style.display = "none";
            resultFood.textContent = food;
            resultContainer.style.display = "block";
        });
    });
});
