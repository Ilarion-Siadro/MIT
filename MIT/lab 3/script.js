const button = document.getElementById("task1");
const label = document.getElementById("label");
const button2 = document.getElementById("task2");
const label2 = document.getElementById("label2");
const button3 = document.getElementById("task3");
const label3 = document.getElementById("label3");


//Асинхронні функції з використанням функцій зворотного виклику

button.addEventListener("click", () => {
    setTimeout(() => {
       label.textContent ="Processing...";
    }, 1000);
    setTimeout(() => {
        label.textContent = "Done!";
    }, 2000);
     label.textContent = "Starting...";
   
});


//Асинхронні функції з використанням промісів
//Обробка помилок у Promise
button2.addEventListener("click", () => {
    const promise = new Promise((resolve, reject) => {
    const randomValue = Math.random();
    label2.textContent = randomValue;
    console.log("Generated random value:", randomValue);
    setTimeout(() => {
        label2.textContent = "Processing...";
    }, 1000);
    setTimeout(() => { if (randomValue > 0.5) {
        resolve("Promise finished successfully!");
    } else {
        reject("Failure!");
    } }, 3500);
});
    promise
    .then((message) => {
        label2.textContent = message;
        // console.log(message);
    })
    .catch((error) => {
       label2.textContent = error;
        // console.error(error);
    }); 
});



button3.addEventListener("click", () => {
    new Promise((resolve,reject) => {
        label3.textContent = "Крок 1: Починаємо...";
        setTimeout(() => resolve("Крок 1 завершено"), 1000);
       
    })
    .then((msg1) => {
        label3.textContent = msg1;
        return new Promise((resolve,reject) => {
            randomValue = Math.random();
            console.log(randomValue);
            setTimeout(() => { 
            if (randomValue > 0.5) {
                resolve("Крок 2 завершено");
            } else {
                reject("Крок 2 завершився з помилкою");
            }
        }, 1000);   
    });
    })
    .then((msg2) => {
        label3.textContent = msg2;
        return new Promise((resolve) => {
            setTimeout(() => resolve("Всі кроки завершено усіпшно!"), 1000);
        });
    })
    .then((msg3) => {
        label3.textContent = msg3;
    })
    .catch((err) => {
        label3.textContent = err;
    });
});