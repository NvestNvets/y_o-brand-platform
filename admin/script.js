// Load orders
async function loadOrders() {
    const response = await fetch('/.netlify/functions/placeOrder');
    const orders = await response.json();
    document.getElementById('orders').innerHTML = `<h2>Orders</h2><pre>${JSON.stringify(orders, null, 2)}</pre>`;
}

// Load intake applications
async function loadIntake() {
    const response = await fetch('/.netlify/functions/intakeSubmission');
    const intake = await response.json();
    document.getElementById('intake').innerHTML = `<h2>Intake Applications</h2><pre>${JSON.stringify(intake, null, 2)}</pre>`;
}

// Load patch requests
async function loadPatches() {
    const response = await fetch('/.netlify/functions/submitPatchRequest');
    const patches = await response.json();
    document.getElementById('patches').innerHTML = `<h2>Patch Requests</h2><pre>${JSON.stringify(patches, null, 2)}</pre>`;
}

// Load raw set sales
async function loadSales() {
    const response = await fetch('/.netlify/functions/placeOrder');
    const sales = await response.json();
    document.getElementById('sales').innerHTML = `<h2>Raw Set Sales</h2><pre>${JSON.stringify(sales, null, 2)}</pre>`;
}

// Load affiliate performance
async function loadAffiliates() {
    const response = await fetch('/.netlify/functions/logAffiliate');
    const affiliates = await response.json();
    document.getElementById('affiliates').innerHTML = `<h2>Affiliate Performance</h2><pre>${JSON.stringify(affiliates, null, 2)}</pre>`;
}

// Load all data on page load
window.onload = () => {
    loadOrders();
    loadIntake();
    loadPatches();
    loadSales();
    loadAffiliates();
}; 