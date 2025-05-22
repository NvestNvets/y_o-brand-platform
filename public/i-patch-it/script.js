document.getElementById('patchForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        await fetch('/.netlify/functions/submitPatchRequest', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        alert('Patch request submitted successfully!');
        window.location.href = 'thankyou.html';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}); 