function startSimpleArithmetic() {
    alert(' Добро пожаловать в игру "Простая арифметика"!');
    
    let playAgain = true;
    let score = 0;
    let totalQuestions = 0;
    
    while (playAgain) {
        const task = generateTask();
        const userAnswer = prompt(`${task.question}\n\nВаш ответ (или "exit" для выхода):`);
        
        if (userAnswer === null || userAnswer.toLowerCase() === 'exit') {
            break;
        }
        
        const userNumber = Number(userAnswer);
        totalQuestions++;
        
        if (isNaN(userNumber)) {
            alert('❌ Пожалуйста, введите число!');
            totalQuestions--;
            continue;
        }
        
        if (Math.abs(userNumber - task.answer) < 0.001) {
            alert(`✅ Правильно! ${task.question} = ${task.answer}`);
            score++;
        } else {
            alert(`❌ Неправильно! ${task.question} = ${task.answer}\nВаш ответ: ${userNumber}`);
        }
        
        if (totalQuestions % 1 === 0) {
            playAgain = confirm(`Счет: ${score}/${totalQuestions}\n\nХотите продолжить игру?`);
        }
    }
    
    if (totalQuestions > 0) {
        alert(` Игра окончена!\n\nВаш результат: ${score} из ${totalQuestions}\nПроцент правильных: ${Math.round(score/totalQuestions*100)}%`);
    } else {
        alert('👋 До свидания!');
    }
}

function generateTask() {
    const operations = [
        { name: '+', func: (a, b) => a + b },
        { name: '-', func: (a, b) => a - b },
        { name: '*', func: (a, b) => a * b },
        { name: '/', func: (a, b) => a / b }
    ];
    
    const op = operations[Math.floor(Math.random() * operations.length)];
    
    let a, b;
    
    switch (op.name) {
        case '+':
            a = Math.floor(Math.random() * 50) + 1;
            b = Math.floor(Math.random() * 50) + 1;
            break;
        case '-':
            a = Math.floor(Math.random() * 50) + 10;
            b = Math.floor(Math.random() * a) + 1;
            break;
        case '*':
            a = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            break;
        case '/':
            b = Math.floor(Math.random() * 10) + 1;
            a = b * (Math.floor(Math.random() * 10) + 1);
            break;
    }
    
    let answer = op.func(a, b);
    if (op.name === '/') {
        answer = Math.round(answer * 100) / 100;
    }
    
    return {
        question: `${a} ${op.name} ${b} = ?`,
        answer: answer
    };
}