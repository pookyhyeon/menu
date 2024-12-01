document.addEventListener("DOMContentLoaded", () => {
    // 질문 데이터
    const questions = [
        { question: "당신의 하루를 가장 잘 묘사하는 단어는?", answers: ["활기찬", "차분한"] },
        { question: "아침에 가장 먹고 싶은 음식은?", answers: ["샌드위치", "시리얼"] },
        { question: "휴일에 주로 하고 싶은 활동은?", answers: ["여행", "독서"] },
        { question: "운동할 때 가장 좋아하는 환경은?", answers: ["야외", "실내"] }
    ];

    // 각 답변 조합에 따른 음식 결과
    const combinationsToFood = {
        "활기찬-샌드위치-여행-야외": "바비큐",
        "활기찬-샌드위치-여행-실내": "스테이크",
        "활기찬-샌드위치-독서-야외": "비빔밥",
        "활기찬-샌드위치-독서-실내": "샐러드",
        "활기찬-시리얼-여행-야외": "허브티",
        "활기찬-시리얼-여행-실내": "파스타",
        "활기찬-시리얼-독서-야외": "치킨",
        "활기찬-시리얼-독서-실내": "초콜릿",
        "차분한-샌드위치-여행-야외": "아메리카노",
        "차분한-샌드위치-여행-실내": "케이크",
        "차분한-샌드위치-독서-야외": "떡볶이",
        "차분한-샌드위치-독서-실내": "우동",
        "차분한-시리얼-여행-야외": "스무디",
        "차분한-시리얼-여행-실내": "과일 샐러드",
        "차분한-시리얼-독서-야외": "라면",
        "차분한-시리얼-독서-실내": "초코 푸딩"
    };

    // DOM 요소 참조
    const questionContainer = document.getElementById("question-container");
    const questionText = document.querySelector(".question-text");
    const answerOptions = document.querySelector(".answer-options");
    const resultContainer = document.getElementById("result-container");
    const resultFood = document.getElementById("result-food");

    let currentQuestionIndex = 0; // 현재 질문 인덱스
    let userChoices = []; // 사용자 선택 저장

    // 다음 질문 로드
    function loadNextQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionText.textContent = currentQuestion.question;

            // 기존 버튼 삭제 후 새 버튼 추가
            answerOptions.innerHTML = "";
            currentQuestion.answers.forEach((answer) => {
                const button = document.createElement("button");
                button.textContent = answer;
                button.classList.add("answer-button");
                button.setAttribute("data-answer", answer);
                button.addEventListener("click", () => handleAnswer(answer));
                answerOptions.appendChild(button);
            });
        } else {
            showResult(); // 모든 질문 완료 시 결과 표시
        }
    }

    // 사용자 답변 처리
    function handleAnswer(answer) {
        userChoices.push(answer); // 사용자 선택 저장
        currentQuestionIndex++; // 다음 질문으로 이동
        loadNextQuestion();
    }

    // 결과 표시
    function showResult() {
        questionContainer.style.display = "none"; // 질문 숨기기

        // 사용자가 선택한 답변 조합으로 결과 찾기
        const userCombination = userChoices.join("-");
        const food = combinationsToFood[userCombination] || "알 수 없음";

        resultFood.textContent = food;
        resultContainer.style.display = "block"; // 결과 보이기
    }

    // 초기화 및 시작
    loadNextQuestion();
});
