// script.js

const jokeText = document.getElementById('joke-text');
const jokeButton = document.getElementById('joke-button');
const textSizeSlider = document.getElementById('text-size');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const shareJokeButton = document.getElementById('share-joke');
const container = document.getElementById('container');


async function fetchJoke() {
    try {
        jokeText.innerText = "Loading a joke...";  
        const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
            headers: { 'X-Api-Key': '5AStR37uoeW7ZAgUKCVyTA==NtHIXxRQqUJCHDay' }  
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);  
        const data = await response.json();
        jokeText.innerText = data[0]?.joke || "Oops! Couldn't fetch a joke."; 
    } catch (error) {
        console.error("Error fetching joke:", error);  
        jokeText.innerText = "Oops! Couldn't fetch a joke.";  
    }
}


jokeButton.addEventListener('click', fetchJoke);


textSizeSlider.addEventListener('input', () => {
    jokeText.style.fontSize = `${textSizeSlider.value}px`;
});


darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


shareJokeButton.addEventListener('click', () => {
    const joke = jokeText.innerText;
    if (navigator.share) {
        navigator.share({ text: joke });
    } else {
        alert("Sharing is not supported in this browser.");
    }
});


