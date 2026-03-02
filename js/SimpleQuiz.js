const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startSimpleQuiz() {
    let correctCount = 0;
    let totalQuestions = quiz.length;
    
    alert('Добро пожаловать в викторину! Вам будет предложено 3 вопроса.');
    
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = `Вопрос ${i + 1}: ${currentQuestion.question}\n\n`;
        questionText += currentQuestion.options.join('\n');
        questionText += '\n\nВведите номер правильного ответа (1, 2 или 3):';
        
        let userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            alert('Игра прервана. До свидания!');
            return;
        }
        
        userAnswer = parseInt(userAnswer);
        
        if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 3) {
            alert('Некорректный ввод! Пожалуйста, введите число от 1 до 3.');
            i--;
            continue;
        }
        
        if (userAnswer === currentQuestion.correctAnswer) {
            correctCount++;
            alert('Правильно! ✓');
        } else {
            alert(`Неправильно! Правильный ответ: ${currentQuestion.correctAnswer}`);
        }
    }
    
    let resultMessage = `Игра окончена!\n\n`;
    resultMessage += `Правильных ответов: ${correctCount} из ${totalQuestions}\n`;
    
    if (correctCount === totalQuestions) {
        resultMessage += 'Отлично! Вы ответили на все вопросы правильно!';
    } else if (correctCount >= totalQuestions / 2) {
        resultMessage += 'Хороший результат!';
    } else {
        resultMessage += 'Попробуйте еще раз!';
    }
    
    alert(resultMessage);
}