// Define an asynchronous function named fetchUserData
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element where user data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API and store the response
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON format
        const users = await response.json();

        // Clear the existing content in dataContainer (the "Loading user data..." message)
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the existing content in dataContainer and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Add an event listener to the document for the DOMContentLoaded event
// This ensures fetchUserData runs once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
