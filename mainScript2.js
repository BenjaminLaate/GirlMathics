function navigate(page) {
    const content = document.getElementById("content");
    switch (page) {
        case 'clothes':
            showClothesContent();
            break;
        case 'makeUp':
            showMakeUpContent(); // This function will be defined in MakeUp.js
            break;
        case 'events':
            showEventsContent(); // This function will be defined in Events.js
            break;
        // Handle other navigations or keep them in their respective files
    }
}
