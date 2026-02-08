const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');

let notes = [];

function loadNotes() {

    let saved = localStorage.getItem('notes');

    if (saved) {
        notes = JSON.parse(saved);
        renderNotes();
    }
}


function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function addNote() {
    let text = noteInput.value.trim();

    if (text === '') {
        return;
    }

    notes.push(text);

    saveNotes();
    renderNotes();

    noteInput.value = '';
}


function renderNotes() {
    notesList.innerHTML = '';

    notes.forEach((note, index) => {
        let li = document.createElement('li');

        li.textContent = note;

        notesList.appendChild(li);
    });
}


addBtn.addEventListener('click', addNote);

noteInput.addEventListener('keypress', function(e) {

    if (e.key === 'Enter') {
        addNote();
    }
});


loadNotes();
