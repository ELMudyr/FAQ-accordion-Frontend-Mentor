const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    const activeQuestion = document.querySelector(".question.active");

    if (activeQuestion && activeQuestion !== question) {
      const activeAnswer = activeQuestion.nextElementSibling;
      activeQuestion.classList.remove("active");
      activeAnswer.classList.remove("active");

      const activeIcon = activeQuestion.querySelector(".icon");
      activeIcon.src = "assets/images/icon-plus.svg";
    }

    question.classList.toggle("active");
    answer.classList.toggle("active");

    const icon = question.querySelector(".icon");
    icon.src = question.classList.contains("active")
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
  });
});
