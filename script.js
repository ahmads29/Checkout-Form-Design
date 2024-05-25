function toggleNoteInput(checkbox) {
    const noteInput = document.getElementById('devzur_noteInput');
    if (checkbox.checked) {
        noteInput.classList.remove('devzur_hidden');
    } else {
        noteInput.classList.add('devzur_hidden');
    }
}