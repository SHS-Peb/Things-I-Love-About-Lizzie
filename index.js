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
      background: 'pink',
      confirmButtonText: 'Aww!',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
        },
      hideClass: {
        popup: 'animate__animated animate__zoomOut'
        }
    });

    document.getElementById("compliment").innerText = complimentText;
  })
  .catch(err => {
    console.error("Failed to load compliment:", err);
    Swal.fire({
      title: 'uhhh error I think',
      text: 'My brain is not working rn babes',
      imageUrl: 'photos/icon.PNG',
      imageWidth: 280,
      background:`green`,
      imageHeight: 300, 
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
  displayRandomQuote();
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
  'photos/albumPics/a.jpg',
  'photos/albumPics/aa.jpg',
  'photos/albumPics/aaa.jpg',
  'photos/albumPics/b.jpg',
  'photos/albumPics/bb.jpg',
  'photos/albumPics/bbb.jpg',
  'photos/albumPics/c.JPG',
  'photos/albumPics/cc.JPEG',
  'photos/albumPics/ccc.JPEG',
  'photos/albumPics/d.JPG',
  'photos/albumPics/dd.JPG',
  'photos/albumPics/ddd.JPG',
  'photos/albumPics/e.JPG',
  'photos/albumPics/ee.JPG',
  'photos/albumPics/eee.JPG',
  'photos/albumPics/f.jpg',
  'photos/albumPics/ff.JPG',
  'photos/albumPics/fff.jpeg',
  'photos/albumPics/h.jpg',
  'photos/albumPics/hh.jpeg',
  'photos/albumPics/i.jpg',
  'photos/albumPics/ii.jpeg',
  'photos/albumPics/j.jpg',
  'photos/albumPics/jj.JPG',
  'photos/albumPics/k.jpg',
  'photos/albumPics/kk.jpg',
  'photos/albumPics/l.jpg',
  'photos/albumPics/ll.jpg',
  'photos/albumPics/m.jpg',
  'photos/albumPics/mm.JPG',
  'photos/albumPics/n.JPEG',
  'photos/albumPics/nn.JPG',
  'photos/albumPics/o.jpg',
  'photos/albumPics/oo.JPG',
  'photos/albumPics/p.jpg',
  'photos/albumPics/pp.JPG',
  'photos/albumPics/q.jpg',
  'photos/albumPics/qq.JPG',
  'photos/albumPics/r.jpg',
  'photos/albumPics/rr.JPG',
  'photos/albumPics/s.jpg',
  'photos/albumPics/ss.JPG',
  'photos/albumPics/t.jpg',
  'photos/albumPics/tt.JPG',
  'photos/albumPics/u.jpg',
  'photos/albumPics/uu.JPG',
  'photos/albumPics/v.jpg',
  'photos/albumPics/vv.JPG',
  'photos/albumPics/w.jpg',
  'photos/albumPics/ww.jpeg',
  'photos/albumPics/x.jpg',
  'photos/albumPics/xx.JPG',
  'photos/albumPics/y.JPG',
  'photos/albumPics/yy.JPEG',
  'photos/albumPics/z.JPG',
  'photos/albumPics/zz.JPG',
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