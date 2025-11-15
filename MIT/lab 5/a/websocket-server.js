const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Новий клієнт підключився');

    ws.on('message', (message) => {
        console.log(`Отримано повідомлення: ${message}`);
        // Розсилаємо повідомлення всім клієнтам
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Клієнт відключився');
    });
});

console.log('Сервер WebSocket запущено на порту 8080');