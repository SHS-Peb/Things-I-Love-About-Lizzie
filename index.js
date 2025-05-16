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
