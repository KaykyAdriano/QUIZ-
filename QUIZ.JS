document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-btn");
    const resultContainer = document.getElementById("result");

    // Define o gabarito
    const correctAnswers = {
        'html-q1': 'E',
        'html-q2': 'A', 
        'html-q3': 'C',
        'html-q4': 'B',
        'html-q5': 'A',
        'css-q1': 'C',
        'css-q2': 'B',
        'css-q3': 'B',
        'css-q4': 'A',
        'css-q5': 'A',
        'js-q1': 'C',
        'js-q2': 'C',
        'js-q3': 'D',
        'js-q4': 'B',
        'js-q5': 'D'
    };

    submitButton.addEventListener("click", function() {
        let score = 0;
        const totalQuestions = Object.keys(correctAnswers).length;

        // Remove classes anteriores
        document.querySelectorAll('.question-block').forEach(block => {
            block.classList.remove('correct', 'incorrect');
        });

        // Verifica cada questão
        for (const questionName in correctAnswers) {
            const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
            const questionBlock = document.querySelector(`input[name="${questionName}"]`).closest('.question-block');
            
            if (selectedOption) {
                const userAnswer = selectedOption.value;
                const correctAnswer = correctAnswers[questionName];

                if (userAnswer === correctAnswer) {
                    score++;
                    questionBlock.classList.add('correct');
                } else {
                    questionBlock.classList.add('incorrect');
                }
            } else {
                // Questão não respondida
                questionBlock.classList.add('incorrect');
            }
        }

        // Exibe o resultado
        resultContainer.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas!`;
        window.scrollTo(0, 0);
    });
});