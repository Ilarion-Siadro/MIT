const http = require('http');

const stocks = [
    { symbol: 'AAPL', price: 150 },
    { symbol: 'GOOGL', price: 2800 },
    { symbol: 'AMZN', price: 3400 },
    { symbol: 'MSFT', price: 299 },
];

function updateStockPrices() {
    stocks.forEach(stock => {
        const change = parseFloat((Math.random() * 10 - 5).toFixed(2)); // Random change between -5 and +5
        stock.price = (parseFloat(stock.price) + change).toFixed(2);
    });
}

const server = http.createServer((req, res) => {
    if (req.url === '/stocks') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*', // Додано для вирішення проблеми CORS
        });

        const interval = setInterval(() => {
            updateStockPrices();
            res.write(`data: ${JSON.stringify(stocks)}\n\n`);
        }, 2000);

        req.on('close', () => {
            clearInterval(interval);
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(8081, () => {
    console.log('SSE server running on http://localhost:8081/stocks');
});