function saveName() {
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('name', name);
    displaySavedName();
}

function displaySavedName() {
    const savedName = localStorage.getItem('name'); 
    if (savedName) {
        document.getElementById('savedName').textContent = savedName;
    }
}
btn=document.getElementById('saveName');
btn.addEventListener('click', saveName);
window.onload = displaySavedName;
