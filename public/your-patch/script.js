document.getElementById('uploadForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        // Call placeOrder function
        await fetch('/.netlify/functions/placeOrder', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        // Call sendToWarehouse function
        await fetch('/.netlify/functions/sendToWarehouse', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        // Call notifyEmbroidery function
        await fetch('/.netlify/functions/notifyEmbroidery', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        // Call sendSMS function
        await fetch('/.netlify/functions/sendSMS', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        // Call logAffiliate function
        await fetch('/.netlify/functions/logAffiliate', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        alert('Form submitted successfully!');
        window.location.href = 'thankyou.html';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
