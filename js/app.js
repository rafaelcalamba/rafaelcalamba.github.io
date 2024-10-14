document.getElementById('gameButton').onclick = function () { showGameFrame() };
document.getElementById('musicButton').onclick = function () { showMusicFrame() };
function showGameFrame() {
    document.getElementById('gameFrame').style.display = 'block';
}
function showMusicFrame() {
    document.getElementById('musicFrame').style.display = 'block';
}