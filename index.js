document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.orb-container');
  const orbCount = 30;

fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'))
  .then(res => res.json())
  .then(data => {
    const json = JSON.parse(data.contents);
    const quoteObj = json[0];
    const complimentText = `${quoteObj.q} — ${quoteObj.a}`;

    Swal.fire({
      title: 'A Thought Just for You Lizzie!',
      text: complimentText,
      imageUrl: 'photos/icon.PNG', 
      imageWidth: 280,
      imageHeight: 300,
      background: 'light pink',
      confirmButtonText: 'Aww!'
    });

    document.getElementById("compliment").innerText = complimentText;
  })
  .catch(err => {
    console.error("Failed to load compliment:", err);
    Swal.fire({
      title: 'Oops!',
      text: 'Could not load compliment right now 😢',
      icon: 'error',
    });
  });


  for (let i = 0; i < orbCount; i++) {
    const orb = document.createElement('div');
    orb.classList.add('orb');
    
    const size = Math.random() * 8 + 6;
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.left = `${Math.random() * 100}%`;
    
    const duration = Math.random() * 8 + 6;
    orb.style.animationDuration = `${duration}s`;
    
    const delay = Math.random() * 40;
    orb.style.animationDelay = `${delay}s`;
    
    container.appendChild(orb);
  }
});

document.getElementById('new-quote').addEventListener('click', () => {
  const cover = document.getElementById('quote-cover');
  cover.style.display = 'none';
  loadNewQuote(); 
});


const quoteEl = document.getElementById('quote');
const fromEl = document.getElementById('from');
const button = document.getElementById('new-quote');

let quotes = [];

fetch('quotes.json')
  .then(res => res.json())
  .then(data => {
    quotes = data;
    displayRandomQuote();
  });

function displayRandomQuote() {
  if (quotes.length === 0) return;
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = random.text;
  fromEl.textContent = `— ${random.from}`;
}

button.addEventListener('click', displayRandomQuote);

const photoArray = [
  'photos/photo2.jpg',
];

let photoIndex = 0;

const photoDisplay = document.getElementById('photo-display');
const nextPhotoBtn = document.getElementById('next-photo');

nextPhotoBtn.addEventListener('click', () => {
  photoIndex = (photoIndex + 1) % photoArray.length;
  photoDisplay.src = photoArray[photoIndex];
});

const music = document.getElementById("background-music");
const toggleMusicBtn = document.getElementById("toggle-music");

let isPlaying = false;

toggleMusicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    toggleMusicBtn.textContent = "Pause Music";
  } else {
    music.pause();
    toggleMusicBtn.textContent = "Play Music";
  }
  isPlaying = !isPlaying;
});