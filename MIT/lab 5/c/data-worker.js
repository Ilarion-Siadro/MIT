// Web Worker for filtering large data tables
self.onmessage = function(event) {
    const { data, filterCriteria } = event.data;

    // Perform filtering based on the criteria
    const filteredData = data.filter(row => {
        return Object.keys(filterCriteria).every(key => {
            return String(row[key]).includes(filterCriteria[key]);
        });
    });

    // Send the filtered data back to the main thread
    self.postMessage(filteredData);
};