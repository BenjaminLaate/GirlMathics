function createButtons() {
    const container = document.getElementById('buttonContainer');
    // Clear existing buttons
    container.innerHTML = '';
    // Create new Yes button
    const yesButton = document.createElement('button');
    yesButton.innerText = 'Yes';
    yesButton.onclick = createButtons; // Re-use the same function for the new Yes button
    // Create new No button
    const noButton = document.createElement('button');
    noButton.innerText = 'No';
    // Append new buttons to the container
    container.appendChild(yesButton);
    container.appendChild(noButton);
}
