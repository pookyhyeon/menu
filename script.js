document.addEventListener("DOMContentLoaded", () => {
    // 질문 데이터
    const questions = [
        { question: "당신의 하루를 가장 잘 묘사하는 단어는?", answers: ["활기찬", "차분한"] },
        { question: "만약에 갑자기 이 집이 무너진다면?", answers: ["뭐래", "헐 그럼 어떡하지"] },
        { question: "나 우울해서 음식을 못했어 당신의 반응은?", answers: ["헐.. 어뜨캐 괜찮아?", "뭔 상관"] },
        { question: "오늘 지각했나요?", answers: ["ㅈㅅ", "아뇽 미리 일찍옴"] }
    ];

    // 각 답변 조합에 따른 음식 결과
    const combinationsToFood = {
        "활기찬-뭐래-헐.. 어뜨캐 괜찮아?-ㅈㅅ": { food: "ENFP: 다양한 맛의 퓨전 음식", image: "ENFP.png" },
        "활기찬-뭐래-뭔 상관-ㅈㅅ": { food: "ENTP: 이국적인 푸드트럭 요리", image: "ENTP.png" },
        "활기찬-뭐래-뭔 상관-ㅈㅅ": { food: "ESTP: 즉석 떡볶이", image: "ESTP.png" },
        "활기찬-뭐래-당장 배민켜 이것아-ㅈㅅ": { food: "ESFP: 타코", image: "ESFP.png" },
        "활기찬-헐 그럼 어떡하지-헐.. 어뜨캐 괜찮아?-아뇽 미리 일찍옴": { food: "ENFJ: 웰빙 스무디", image: "ENFJ.png" },
        "활기찬-헐 그럼 어떡하지-뭔 상관-아뇽 미리 일찍옴": { food: "ENTJ: 프리미엄 버거", image: "ENTJ.png" },
        "활기찬-헐 그럼 어떡하지-뭔 상관-ㅈㅅ": { food: "ESTJ: 고기와 밥이 든든한 비빔밥", image: "ESTJ.png" },
        "활기찬-헐 그럼 어떡하지-헐..어뜨캐 괜찮아?-아뇽 미리 일찍옴": { food: "ESFJ: 엄마가 만든 집밥", image: "ESFJ.png" },
        "차분한-뭐래-헐.. 어뜨캐 괜찮아?-ㅈㅅ": { food: "INFP: 비건 파스타", image: "INFP.png" },
        "차분한-뭐래-뭔 상관-아뇽 미리 일찍옴": { food: "INTP: 크래프트 맥주와 간단한 안주", image: "INTP.png" },
        "차분한-뭐래-뭔 상관-ㅈㅅ": { food: "ISTP: 치킨 윙", image: "ISTP.png" },
        "차분한-뭐래-헐..어뜨캐 괜찮아?-아뇽 미리 일찍옴": { food: "ISFP: 과일 디저트", image: "ISFP.png" },
        "차분한-헐 그럼 어떡하지-헐.. 어뜨캐 괜찮아?-ㅈㅅ": { food: "INFJ: 건강한 채소 샐러드", image: "INFJ.png" },
        "차분한-헐 그럼 어떡하지-뭔 상관-아뇽 미리 일찍옴": { food: "INTJ: 고급 스테이크", image: "INTJ.png" },
        "차분한-헐 그럼 어떡하지-뭔 상관-ㅈㅅ": { food: "ISTJ: 전통적인 한식 백반", image: "ISTJ.png" },
        "차분한-헐 그럼 어떡하지-헐..어뜨캐 괜찮아?-아뇽 미리 일찍옴": { food: "ISFJ: 따뜻한 수제비", image: "ISFJ.png" }
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
        const userCombination = userChoices.map(choice => choice.trim()).join("-");  // 공백 제거 후 조합
        console.log("User Combination:", userCombination); // 디버깅용 출력

        const result = combinationsToFood[userCombination] || { food: "알 수 없음", image: "default.png" };
        console.log("Matched Result:", result); // 디버깅용 출력

        resultFood.textContent = result.food; // 음식 이름 표시

        // 이미지 경로 설정
        document.getElementById("result-image").src = result.image;

        resultContainer.style.display = "block"; // 결과 보이기
    }

    // 초기화 및 시작
    loadNextQuestion();
});
