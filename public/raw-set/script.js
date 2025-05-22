document.getElementById('browseForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchTerm = formData.get('search');

    // Simulate browsing raw sets (replace with actual logic)
    alert(`Searching for: ${searchTerm}`);
    window.location.href = 'thankyou.html';
}); 