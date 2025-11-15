// Асинхронна функція з двома зворотними викликами

function raceAsyncOperations(asyncOp1, asyncOp2, callback1, callback2) {
    let isResolved = false;

    asyncOp1().then((result) => {
        if (!isResolved) {
            isResolved = true;
            callback1(result);
        }
    });

    asyncOp2().then((result) => {
        if (!isResolved) {
            isResolved = true;
            callback2(result);
        }
    });
}

// Приклад використання
function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Операція 1 завершена"), 1000.1);
    });
}

function asyncOperation2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Операція 2 завершена"), 1000);
    });
}

function callback1(result) {
    console.log("Результат першої операції:", result);
}

function callback2(result) {
    console.log("Результат другої операції:", result);
}

// Виклик функції
document.getElementById("button").addEventListener("click",() => {
raceAsyncOperations(asyncOperation1, asyncOperation2, callback1, callback2);
})
