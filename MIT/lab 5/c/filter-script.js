// Example data for the table
const largeData = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.random().toFixed(2)
}));

const worker = new Worker('data-worker.js');

// Function to filter data
function filterData(criteria) {
    worker.postMessage({ data: largeData, filterCriteria: criteria });
}

worker.onmessage = function(event) {
    const filteredData = event.data;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    filteredData.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `ID: ${item.id}, Name: ${item.name}, Value: ${item.value}`;
        resultsDiv.appendChild(div);
    });
};

document.getElementById('applyFilter').addEventListener('click', () => {
    const filterValue = document.getElementById('filter').value;
    filterData({ name: filterValue });
});