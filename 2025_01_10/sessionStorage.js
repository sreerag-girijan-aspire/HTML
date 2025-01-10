function saveAge() {
    const age = document.getElementById('ageInput').value;
    sessionStorage.setItem('age', age);
    displaySavedAge();
}

function displaySavedAge() {
    const savedAge = sessionStorage.getItem('age'); 
    if (savedAge) {
        document.getElementById('savedAge').textContent = savedAge;
    }
}
btn=document.getElementById('saveAge');
btn.addEventListener('click', saveAge);
window.onload = displaySavedAge;
