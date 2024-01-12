const users = {
    "users": [
        {
            "name": "John Doe",
            "username": "john.doe",
            "password": "pass123"
        },
        {
            "name": "Jane Smith",
            "username": "jane.smith",
            "password": "pass123"
        },
        {
            "name": "Alice Johnson",
            "username": "alice.johnson",
            "password": "pass123"
        },
        {
            "name": "Bob Brown",
            "username": "bob.brown",
            "password": "pass123"
        }
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    // Initialize the datepicker with startDate option set to today
    $('#pick-up-date, #drop-off-date').datepicker({
        startDate: new Date()  // Set the startDate option to today
    });

    // Add an event listener for date selection
    $('#pick-up-date, #drop-off-date').on('changeDate', function (e) {
        // Close the datepicker when a date is selected
        $(this).datepicker('hide');
    });
});

// YouTube Video ID
var videoId = 'xF3g6_i9lSE';

// Create a variable to store the YouTube player
var player;

// Function to initialize the YouTube player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubeVideo', {
        videoId: videoId,
        playerVars: {
            'autoplay': 0, // Autoplay the video
            'rel': 0,      // Disable related videos at the end
        }
    });
}


// Function to stop the YouTube video
function stopVideo() {
    player.stopVideo();
}

// Attach an event listener to close the modal and stop the video when the modal is hidden
$('#videoModal').on('hidden.bs.modal', function () {
    stopVideo();
});

// Attach an event listener to show the modal when the button is clicked
$(document).on('click', '.play-now', function () {
    $('#videoModal').modal('show');
});

// Function to handle login
function handleLogin() {
    // Get the username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password are correct (you can replace this with your actual validation logic)
    const isValid = validateLogin(username, password);

    // Get the Bootstrap alert element within the modal content
    const alertElement = document.getElementById('login-alert');

    if (isValid) {
        // Find the user object in the JSON data
        const user = users.users.find(user => user.username === username);

        if (user) {
            // If the user is found, display a personalized greeting
            alertElement.classList.remove('alert-danger');
            alertElement.classList.add('alert-success');
            alertElement.innerHTML = `Hi ${user.name}, Welcome to AZoom Car Rental!`;
            alertElement.style.display = 'block';
            // Place your logic for successful login here
            // For example, you can redirect the user to another page
        }
    } else {
        // If login is unsuccessful, display a danger alert
        alertElement.classList.remove('alert-success');
        alertElement.classList.add('alert-danger');
        alertElement.innerHTML = 'Incorrect username or password. Please try again.';
        alertElement.style.display = 'block';
    }

    // Toggle the visibility of the alert
    alertElement.classList.remove('d-none');
}

// Define the validateLogin function
function validateLogin(username, password) {
    // You can implement your login validation logic here
    // For example, you can compare the provided username and password with your user data
    for (const user of users.users) {
        if (user.username === username && user.password === password) {
            return true; // Valid login
        }
    }
    return false; // Invalid login
}

// Attach a click event listener to the "Login" button
document.getElementById('login-button').addEventListener('click', handleLogin);
