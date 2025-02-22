const moodButtons = document.querySelectorAll(".mood-btn");
const musicFrame = document.getElementById("music-frame");
const moodMusic = {
    Happy: ["https://www.youtube.com/embed/BWczaSneA0Q"],
    
    Sad: [
        "https://www.youtube.com/embed/0XyV-vw5II4",
        "https://www.youtube.com/embed/VGDlKrCKh6E",
        "https://www.youtube.com/embed/dfgPvuNunAw",
        "https://www.youtube.com/embed/r0McrrrFNtA",
    ],
    
    Energetic: ["https://www.youtube.com/embed/ZZ5LpwO-An4"],

    Calm: [
        "https://www.youtube.com/embed/lFcSrYw-ARY",
        "https://www.youtube.com/embed/2OEL4P1Rz04", 
        "https://www.youtube.com/embed/Nt8ZmiP9bzE",  
        "https://www.youtube.com/embed/DWcJFNfaw9c",  
        "https://www.youtube.com/embed/jgpJVI3tDbY"  
    ],

    Romantic: ["https://www.youtube.com/embed/BWczaSneA0Q"]
};

moodButtons.forEach(button => {
    button.addEventListener("click", function () {
        const mood = this.dataset.mood;
        if (moodMusic[mood]) {
            const songs = moodMusic[mood];
            const randomSong = songs[Math.floor(Math.random() * songs.length)];
            
            musicFrame.src = randomSong + "?autoplay=1";
            musicFrame.style.display = "block"; 
        } else {
            musicFrame.style.display = "none"; 
        }
    });
});
