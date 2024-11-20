/*
    Author:         Chad Bloom
    Date:           2024-11-22
    Description:    ISM6251.360 Assignment 2, design interactive web page meeting
                    specific guidelines laid out in assignment documentation. The 
                    topic of this web page is comedy movies.
    File:           main.js is currently unused.  It would be the JavaScript file
                    that supports the guest book card.  It contains exclusively 
                    JavaScript.  Something different is required to get the code 
                    to work from here as opposed to directly from the html file 
                    where it runs great.  Running from here, the entries do not 
                    display. 
*/

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

        // Create a button group for edit and delete buttons
        const entryButtonsDiv = document.createElement('div');
        entryButtonsDiv.classList.add('entry-buttons');

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
        editButton.classList.add('edit-button');

        editButton.addEventListener('click', function() {
            selectedEntry = entryDiv;
            document.getElementById('name').value = entryName.textContent;
            document.getElementById('message').value = entryMessage.textContent;
        });

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.style.marginTop = "10px";
        deleteButton.style.backgroundColor = "#fd0202";
        deleteButton.style.color = "#fff";
        deleteButton.style.border = "none";
        deleteButton.style.padding = "05px 10px";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.cursor = "pointer";
        deleteButton.classList.add('delete-button');

        deleteButton.addEventListener('click', function() {
            guestEntries.removeChild(entryDiv);
        });

        entryButtonsDiv.appendChild(editButton);
        entryButtonsDiv.appendChild(deleteButton);
        entryDiv.appendChild(entryButtonsDiv);

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