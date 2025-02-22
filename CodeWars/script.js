const moodButtons = document.querySelectorAll(".mood-btn");
const musicFrame = document.getElementById("music-frame");

// Mood-to-Music Mapping with Multiple Songs for Some Moods
const moodMusic = {
    Happy: ["https://www.youtube.com/embed/BWczaSneA0Q",
            "https://www.youtube.com/embed/jCEdTq3j-0U",
    ],
    
    Sad: [
        "https://www.youtube.com/embed/0XyV-vw5II4",
        "https://www.youtube.com/embed/VGDlKrCKh6E",
        "https://www.youtube.com/embed/dfgPvuNunAw",
        "https://www.youtube.com/embed/r0McrrrFNtA",
    ],
    
    Energetic: ["https://www.youtube.com/embed/ZZ5LpwO-An4",
                "https://www.youtube.com/embed/jCEdTq3j-0U",
                "https://www.youtube.com/embed/jCEdTq3j-0U",

    ],
    Calm: ["https://www.youtube.com/embed/lFcSrYw-ARY",
        "https://www.youtube.com/embed/jCEdTq3j-0U",
        "https://www.youtube.com/embed/jCEdTq3j-0U",
    ],
    Romantic: ["https://www.youtube.com/embed/BWczaSneA0Q",
        "https://www.youtube.com/embed/jCEdTq3j-0U",
        "https://www.youtube.com/embed/jCEdTq3j-0U",
    ],
};

moodButtons.forEach(button => {
    button.addEventListener("click", function () {
        const mood = this.dataset.mood;
        if (moodMusic[mood]) {
            // Select a random song if there are multiple options
            const songs = moodMusic[mood];
            const randomSong = songs[Math.floor(Math.random() * songs.length)];
            
            musicFrame.src = randomSong + "?autoplay=1";
            musicFrame.style.display = "block"; // Show the player
        } else {
            musicFrame.style.display = "none"; // Hide player if no URL
        }
    });
});
