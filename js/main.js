const guestForm = document.getElementById('guestForm');
const guestEntries = document.getElementById('guestEntries');
let selectedEntry = null;

guestForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (selectedEntry) {
        // Update the selected entry
        selectedEntry.querySelector('h4').textContent = name;
        selectedEntry.querySelector('p').textContent = message;
        selectedEntry = null;
        guestForm.reset();
    } else {
        // Create a new entry
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        const entryName = document.createElement('h4');
        entryName.textContent = name;

        const entryMessage = document.createElement('p');
        entryMessage.textContent = message;

        entryDiv.appendChild(entryName);
        entryDiv.appendChild(entryMessage);

        // Add an edit button
        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.style.marginTop = "10px";
        editButton.style.backgroundColor = "#ff9800";
        editButton.style.color = "#fff";
        editButton.style.border = "none";
        editButton.style.padding = "5px 10px";
        editButton.style.borderRadius = "5px";
        editButton.style.cursor = "pointer";

        editButton.addEventListener('click', function() {
            selectedEntry = entryDiv;
            document.getElementById('name').value = entryName.textContent;
            document.getElementById('message').value = entryMessage.textContent;
        });

        entryDiv.appendChild(editButton);
        guestEntries.appendChild(entryDiv);
    }

    guestForm.reset();
});

function updateEntry() {
    if (selectedEntry) {
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        selectedEntry.querySelector('h4').textContent = name;
        selectedEntry.querySelector('p').textContent = message;
        selectedEntry = null;
        guestForm.reset();
    } else {
        alert('Please select an entry to update.');
    }
}