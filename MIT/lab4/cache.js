// Автономне кешування запитів

const API_URL = "https://official-joke-api.appspot.com/random_joke";
const CACHE_KEY = "cachedData";

function fetchDataFromCache() {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const dataElement = document.getElementById("data");

    if (cachedData) {
        // Якщо дані є в кеші, відображаємо їх
        dataElement.textContent = `Кешовані дані: ${cachedData}`;
        console.log("Дані завантажені з кешу:", cachedData);
    } else {
        // Якщо даних немає, повідомляємо про це
        dataElement.textContent = "Кешованих даних немає.";
        console.log("Кешованих даних немає.");
    }
}

function fetchAndCacheData() {
    const dataElement = document.getElementById("data");
    dataElement.textContent = "Завантаження нових даних...";

    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            const result = data.setup; // Використовуємо лише поле title
            localStorage.setItem(CACHE_KEY, result); // Зберігаємо в localStorage
            dataElement.textContent = `Нові дані: ${result}`;
            console.log("Дані завантажені з API:", result);
        })
        .catch((error) => {
            console.error("Помилка при завантаженні даних:", error);
            dataElement.textContent = "Помилка при завантаженні даних.";
        });
}

// Додаємо обробник події для кнопки
document.getElementById("fetchData").addEventListener("click", () => {
    fetchAndCacheData(); // Завантажуємо нові дані
});

// Завантажуємо дані з кешу при завантаженні сторінки
fetchDataFromCache();