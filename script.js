document.addEventListener("DOMContentLoaded", () => {
    // 질문 데이터
    const questions = [
        { question: "당신의 하루를 가장 잘 묘사하는 단어는?", answers: ["활기찬", "차분한"] },
        { question: " 만약에 갑자기 이 집이 무너진다면면?", answers: ["뭐래", "헐 그럼 어떡하지"] },
        { question: "나 우울해서 음식을 못했어 당신의 반응은? ", answers: ["헐.. 어뜨캐 괜찮아? ", "당장 배민켜 이것아"] },
        { question: " 오늘 지각했나요? ", answers: ["ㅈㅅ ", "아뇽 미리 일찍옴"] }
    ];

    // 각 답변 조합에 따른 음식 결과
  // 각 답변 조합에 따른 음식 결과
const combinationsToFood = {
    "활기찬-뭐래-헐.. 어뜨캐 괜찮아?-ㅈㅅ": "ENFP: 비빔밥",
    "활기찬-뭐래-헐.. 어뜨캐 괜찮아?-아뇽 미리 일찍옴": "ENTP: 바비큐",
    "활기찬-뭐래-당장 배민켜 이것아-ㅈㅅ": "ESTP: 치킨",
    "활기찬-뭐래-당장 배민켜 이것아-아뇽 미리 일찍옴": "ESFP: 파스타",
    "활기찬-헐 그럼 어떡하지-헐.. 어뜨캐 괜찮아?-ㅈㅅ": "ENFJ: 허브티",
    "활기찬-헐 그럼 어떡하지-헐.. 어뜨캐 괜찮아?-아뇽 미리 일찍옴": "ENTJ: 스테이크",
    "활기찬-헐 그럼 어떡하지-당장 배민켜 이것아-ㅈㅅ": "ESTJ: 라면",
    "활기찬-헐 그럼 어떡하지-당장 배민켜 이것아-아뇽 미리 일찍옴": "ESFJ: 샐러드",
    "차분한-뭐래-헐.. 어뜨캐 괜찮아?-ㅈㅅ": "INFP: 초코 푸딩",
    "차분한-뭐래-헐.. 어뜨캐 괜찮아?-아뇽 미리 일찍옴": "INTP: 초콜릿",
    "차분한-뭐래-당장 배민켜 이것아-ㅈㅅ": "ISTP: 떡볶이",
    "차분한-뭐래-당장 배민켜 이것아-아뇽 미리 일찍옴": "ISFP: 아메리카노",
    "차분한-헐 그럼 어떡하지-헐.. 어뜨캐 괜찮아?-ㅈㅅ": "INFJ: 스무디",
    "차분한-헐 그럼 어떡하지-헐.. 어뜨캐 괜찮아?-아뇽 미리 일찍옴": "INTJ: 케이크",
    "차분한-헐 그럼 어떡하지-당장 배민켜 이것아-ㅈㅅ": "ISTJ: 우동",
    "차분한-헐 그럼 어떡하지-당장 배민켜 이것아-아뇽 미리 일찍옴": "ISFJ: 과일 샐러드"
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
