function checkStatus() {
    const hour = new Date().getHours();
    const container = document.getElementById('status-container');
    
    if (hour >= 10 && hour < 22) {
        container.innerHTML = '<span class="status-badge open">DESCHIS</span>';
    } else {
        container.innerHTML = '<span class="status-badge closed">ÎNCHIS</span>';
    }
}

checkStatus();

setInterval(checkStatus, 60000);