
window.addEventListener("load", () => {
    const ageInputRef = document.getElementById('age-input');
    ageInputRef.addEventListener('change', (event) => {

        const ageValue = event.target.value;
        // We're realized that ageValue is string but we need a number

        const ageNum = parseInt(ageValue);
        const hiddenCheckboxRef = document.getElementById('hidden-checkbox');

        if (ageNum >= 20) {
            hiddenCheckboxRef.style.display = 'block';
        } else {
            hiddenCheckboxRef.style.display = 'none';
        }
    })
})