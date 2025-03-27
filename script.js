function startCountdown(targetDate) {
    let targetTime = new Date(targetDate).getTime();
    
    function updateCountdown() {
        let now = Date.now();
        let remainingTime = Math.max(0, Math.floor((targetTime - now) / 1000));
        let days = Math.floor(remainingTime / (60 * 60 * 24));
        let hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        let seconds = remainingTime % 60;
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        
        if (remainingTime > 0) {
            requestAnimationFrame(updateCountdown);
        } else {
            document.getElementById('countdown').textContent = "Waktu Habis!";
        }
    }
    
    updateCountdown();
}

// Atur tanggal pernikahan (Ubah sesuai kebutuhan)
startCountdown('August 29, 2025 10:00:00');
