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
            'autoplay': 1, // Autoplay the video
            'rel': 0,      // Disable related videos at the end
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function to start playing the video when the player is ready
function onPlayerReady(event) {
    event.target.playVideo();
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
