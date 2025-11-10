const button = document.getElementById("task1");
const label = document.getElementById("label");
const button2 = document.getElementById("task2");
const label2 = document.getElementById("label2");
const button3 = document.getElementById("task3");
const label3 = document.getElementById("label3");
const input1 = document.getElementById("first");
const input2 = document.getElementById("second");
const task41Btn = document.getElementById("task4.1");
const task42Btn = document.getElementById("task4.2");
const task43Btn = document.getElementById("task4.3");
const task44Btn = document.getElementById("task4.4");
const label4 = document.getElementById("label4");

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
    new Promise((resolve) => {
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

// Перший проміс
function getFirstPromise() {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(input1.value == 1){

        console.log("1 Promise finished success");
        resolve("1 Promise finished success")
    
    }
        else{
             console.log("1 Promise finished with error");
             reject("1 Promise finished with error")
            }
    },  5000);})};

// Другий проміс
function getSecondPromise() {
return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(input2.value == 1){

        console.log("2 Promise finished success");
        resolve("2 Promise finished success")
    
    }
        else{
             console.log("2 Promise finished with error");
             reject("2 Promise finished with error")
            }
    },  3000);});}
// Використання Promise.all успішно завершення всіх промісів
task41Btn.addEventListener("click", () => {
    Promise.all([getFirstPromise(), getSecondPromise()])
    .then((results) => {
        console.log(results);
        label4.textContent = "Promise.all успішно завершено: ";
    })
    .catch((error) => {
        console.log(error);
        label4.textContent = "Promise.all помилка";
    });});

// Використання Promise.allSettled результати всіх промісів
task42Btn.addEventListener("click", () => {
    Promise.allSettled([getFirstPromise(), getSecondPromise()])
    .then((results) => {
        console.log(results);
        label4.textContent = "Promise.allSettled завершено: ";})});

// Використання Promise.any перший який виконається успішно
task43Btn.addEventListener("click", () => {
    Promise.any([getFirstPromise(), getSecondPromise()])
    .then((results) => {
        console.log(results);
        label4.textContent = "Promise.any завершено: ";})
    .catch((error) => {
        label4.textContent = "Promise.any помилка";
    });});
// Використ Promise.race перший який виконається незалежно від успіху чи помилки
task44Btn.addEventListener("click", () => {
Promise.race([getFirstPromise(), getSecondPromise()])
    .then((results) => {
        console.log(results);
        label4.textContent = "Promise.any завершено: ";})
    .catch((error) => {
        console.log(error);
        label4.textContent = "Promise.any помилка";
    });});

    
