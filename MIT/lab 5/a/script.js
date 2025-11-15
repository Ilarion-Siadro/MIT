 const ws = new WebSocket('ws://localhost:8080');

        ws.onmessage = (event) => {
            console.log(event.data);
            const chat = document.getElementById('chat');
            const message = document.createElement('div');

            if (event.data instanceof Blob) {
                event.data.text().then((text) => {
                    message.textContent = text;
                    chat.appendChild(message);
                    chat.scrollTop = chat.scrollHeight;
                });
            } else {
                message.textContent = event.data;
                chat.appendChild(message);
                chat.scrollTop = chat.scrollHeight;
            }
        };

        document.getElementById('send').addEventListener('click', () => {
            const input = document.getElementById('message');
            const role = document.getElementById('role').value;
            const fullMessage = `${role}: ${input.value}`;
            ws.send(fullMessage);
            input.value = '';
        });