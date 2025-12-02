function loadJoke() {
    const xhr = new XMLHttpRequest();
    // 1. Налаштування запиту: GET-метод, файл jokes.txt, асинхронно
    xhr.open('GET', 'jokes.txt', true); 

    // 2. Обробка відповіді
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Отримуємо весь текст
            const jokesText = xhr.responseText; 
            // Розділяємо його на окремі жарти (припускаємо, що роздільник - новий рядок)
            const jokesArray = jokesText.split('\n').filter(joke => joke.trim() !== '');

            if (jokesArray.length > 0) {
                // Вибираємо випадковий індекс
                const randomIndex = Math.floor(Math.random() * jokesArray.length);
                const randomJoke = jokesArray[randomIndex].trim();

                // Виводимо жарт на сторінку
                document.getElementById('joke-output').textContent = randomJoke;
            } else {
                document.getElementById('joke-output').textContent = "Файл жартів порожній.";
            }

        } else {
            // Обробка помилки HTTP (наприклад, 404 Not Found)
            document.getElementById('joke-output').textContent = `Помилка завантаження: ${xhr.status}`;
        }
    };
    
    // 3. Надсилання запиту
    xhr.send(); 
}

// Завантажити перший жарт при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadJoke);