function reverseText(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

function startTurnText() {
    let playing = true;
    
    while (playing) {

        const userInput = prompt('Введите текст (или "exit" для выхода):');
        
        if (userInput === null || userInput.toLowerCase() === 'exit') {
            console.log('Спасибо за игру! До свидания!');
            playing = false;
            break;
        }
        
        if (userInput.trim() === '') {
            console.log('Вы ничего не ввели! Попробуйте снова.');
            continue;
        }
        
        const reversed = reverseText(userInput);
        
        alert(`Результат:\nОригинал: ${userInput}\nПеревернуто: ${reversed}`);

        if (userInput.toLowerCase() === reversed.toLowerCase()) {
            alert('Это палиндром! Текст одинаково читается в обе стороны!');
        }
    }
}