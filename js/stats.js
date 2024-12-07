// stats.js

// Инициализация статистики в локальном хранилище
if (!localStorage.getItem('stats')) {
    const initialStats = {
        electronics: 0,  // Пройдено игр по электронике
        programming: 0   // Пройдено игр по программированию
    };
    localStorage.setItem('stats', JSON.stringify(initialStats));
}

// Загрузка статистики на главной странице
document.addEventListener('DOMContentLoaded', () => {
    const stats = JSON.parse(localStorage.getItem('stats'));
    document.getElementById('electronics-score').textContent = stats.electronics;
    document.getElementById('programming-score').textContent = stats.programming;
});

// Пример обновления статистики (можно вызвать из игры)
function updateStat(category) {
    const stats = JSON.parse(localStorage.getItem('stats'));
    if (stats[category] < 5) {
        stats[category]++;
        localStorage.setItem('stats', JSON.stringify(stats));
    }
}
