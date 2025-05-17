const container = document.querySelector('.orb-container');
const orbCount = 30; // How many orbs

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
