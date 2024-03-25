function chechSpeed() {
    let speed = parseInt(document.getElementById('car-speed').value);
    let points = Math.floor((speed-70) / 5);

    if (speed <= 70) {
        document.getElementById('speed-output').textContent = 'ok';
    }else if (points >= 12) {
        document.getElementById('speed-output').textContent = 'points: ${points}, License suspended';
    }else {
        document.getElementById('speed-output').textContent = 'points: ${points}';
    }
}