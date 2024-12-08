function loadStats() {
    const electronicsCompleted = localStorage.getItem('electronicsCompleted') || 0;
    const programmingCompleted = localStorage.getItem('programmingCompleted') || 0;

    document.getElementById('electronics-stats').innerText = `Пройдено игр: ${electronicsCompleted} / 5`;
    document.getElementById('programming-stats').innerText = `Пройдено игр: ${programmingCompleted} / 5`;
}

function updateStats(category, gameId) {
    const gameKey = `${category}-${gameId}-completed`;
    if (localStorage.getItem(gameKey) === "true") {
        alert("Вы уже завершили это задание!");
        return;
    }

    // Помечаем игру как завершённую
    localStorage.setItem(gameKey, "true");

    // Увеличиваем прогресс в категории
    let completedGames = parseInt(localStorage.getItem(`${category}Completed`) || 0);
    if (completedGames < 5) {
        completedGames += 1;
        localStorage.setItem(`${category}Completed`, completedGames);
        alert(`Прогресс обновлён: ${completedGames}/5`);
    }
}

function gameCompleted(category, gameId) {
    updateStats(category, gameId);
}
