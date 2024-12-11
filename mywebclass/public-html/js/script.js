function testFunction() {
    const result = document.getElementById('result');
    
    // Fetch data from Drupal
    fetch('https://api.abdo.agency/jsonapi/node/article')
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `
                <h3>Data from Drupal API:</h3>
                <pre>${JSON.stringify(data, null, 2)}</pre>
                <p>Timestamp: ${new Date().toLocaleString()}</p>
            `;
        })
        .catch(error => {
            result.innerHTML = `
                <h3>Error fetching data:</h3>
                <p>${error.message}</p>
                <p>Timestamp: ${new Date().toLocaleString()}</p>
            `;
        });
}

// Test console log to verify script loading
console.log('Script loaded successfully!');