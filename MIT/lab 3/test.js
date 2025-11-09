
function fetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: id, username: 'Ilarion', value: `Data for ID: ${id}` };
            resolve(data);
        },  3000);
    });
}

function fetchGame(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            const game = { username: "Ilarion",title: `User: ${name} playing in Call of Duty` };
            resolve(game);
        }, 2000);
    });
}

function run() {
    fetchData(1).then(data => {
        console.log("Received:", data.username);
        fetchGame(data.name).then(game => { 
            console.log("Received:", game.title);
        });
        
    });

    console.log("Fetching data...");
}

run();