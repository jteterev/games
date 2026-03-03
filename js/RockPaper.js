function startRockPaper() {
    const choices = ["камень", "ножницы", "бумага"];
    
    let num = prompt("Выберите: 1-камень, 2-ножницы, 3-бумага");
    
    while (!["1", "2", "3"].includes(num)) {
        num = prompt("Ошибка! Введите 1, 2 или 3");
    }
    
    const userChoice = choices[parseInt(num) - 1];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    if (userChoice === computerChoice) {
        alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: Ничья!`);
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: Вы победили!`);
    } else {
        alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: Компьютер победил!`);
    }
}