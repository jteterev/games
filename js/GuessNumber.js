function GuessNumberStart() {

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess = null;
    
    alert('Число загадано! Введите число от 1 до 100\n(Нажмите "Отмена" для выхода из игры)');
    
    while (guess != secretNumber) {
        let input = prompt('Ваше предположение: (или нажмите "Отмена" для выхода)');
        
        if (input === null) {
            if (confirm('Вы уверены, что хотите выйти из игры?')) {
                alert(' Возвращайтесь скорее!');
                return;
            } else {
                continue;
            }
        }
        
        guess = Number(input);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert('Пожалуйста, введите число от 1 до 100!');
            continue;
        }
        
        attempts++;
        
        if (guess < secretNumber) {
            alert('Загаданное число БОЛЬШЕ!');
        } else if (guess > secretNumber) {
            alert('Загаданное число МЕНЬШЕ!');
        } else {
            alert(` Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
        }
    }
}