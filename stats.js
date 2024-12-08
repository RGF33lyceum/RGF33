function loadStats() {
    const electronicsCompleted = localStorage.getItem('electronicsCompleted') || 0;
    const programmingCompleted = localStorage.getItem('programmingCompleted') || 0;

    document.getElementById('electronics-stats').innerText = `Пройдено игр: ${electronicsCompleted} / 5`;
    document.getElementById('programming-stats').innerText = `Пройдено игр: ${programmingCompleted} / 5`;
}

function updateStats(category, gameId) {
    const gameKey = `${category}-${gameId}-completed`;

    // Проверяем, завершена ли игра
    if (localStorage.getItem(gameKey) === "true") {
        alert("Вы уже завершили это задание!");
        return; // Прекращаем выполнение
    }

    // Увеличиваем прогресс в категории
    let completedGames = parseInt(localStorage.getItem(`${category}Completed`) || 0);
    if (completedGames < 5) {
        completedGames += 1;
        localStorage.setItem(`${category}Completed`, completedGames);
        alert(`Прогресс обновлён: ${completedGames}/5`);
    }

    // Помечаем игру как завершённую
    localStorage.setItem(gameKey, "true");
}


function loadGameButtonState(category) {
    // Проходимся по всем кнопкам с атрибутом data-game-id
    const buttons = document.querySelectorAll(`button[data-game-id]`);
    buttons.forEach((button) => {
        const gameId = button.getAttribute("data-game-id");
        const gameKey = `${category}-${gameId}-completed`;

        // Если игра завершена, делаем кнопку серой
        if (localStorage.getItem(gameKey) === "true") {
            button.disabled = true;
            button.style.background = "#555"; // Меняем цвет фона
            button.style.color = "#aaa"; // Меняем цвет текста
        }
    });
}



function gameCompletedWithButton(category, gameId) {
    updateStats(category, gameId);

    // После обновления статистики отключаем кнопку в меню
    const button = document.querySelector(`button[data-game-id="${gameId}"]`);
    if (button) {
        button.disabled = true;
        button.style.background = "#555"; // Меняем цвет на серый
        button.style.color = "#aaa"; // Меняем цвет текста
    }
}
