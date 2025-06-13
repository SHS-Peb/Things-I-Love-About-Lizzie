# Things I Love About Lizzie

## Description

This is a heartfelt interactive web page designed to celebrate and share thoughts, quotes, photos, and music dedicated to Lizzie. The application dynamically fetches inspiring quotes, displays personal compliments, and cycles through photos accompanied by background music. It’s a small digital tribute made with love.

## Features

- Fetches random inspirational quotes from an external API.
- Displays personalized compliments using a popup modal.
- Shows a collection of quotes with a button to cycle through them.
- Displays photos that can be cycled through with a button.
- Plays background music with a toggle button to play/pause.
- Animated orbs floating in the background for a subtle visual effect.
- Responsive design with animated transitions using Animate.css.
- Error handling with graceful fallbacks if quotes fail to load.

## How to Use

1. Open `index.html` in a modern web browser.
2. On page load, enjoy a personalized popup with a random quote and compliment.
3. Click **"Click Me?"** button to cycle through preset quotes.
4. Click **"Next Photo"** button to view different photos.
5. Use the **"Play Music"** button to toggle background music on or off.

## Technologies Used

- HTML5, CSS3
- JavaScript (Vanilla)
- [Animate.css](https://animate.style/) for animations
- [SweetAlert2](https://sweetalert2.github.io/) for stylish popups
- Fetch API for external data retrieval

## File Structure (Overview)

- `index.html` — Main HTML file.
- `style.css` — Stylesheet for layout and design.
- `index.js` — JavaScript controlling interactivity, API calls, and UI updates.
- `photos/` — Folder containing images used in the project.
- `mp3/` — Folder containing background music file.
- `quotes.json` — Local JSON file storing custom quotes.

## Setup & Deployment

No build step required. Simply open `index.html` in a browser to run locally or deploy on any static hosting platform like GitHub Pages or Netlify.

## Notes

- Ensure internet connectivity for fetching quotes from the external API.
- Customize `quotes.json` to add or update local quotes.
- Music playback requires user interaction (button click) due to browser autoplay restrictions.

---

Made with ❤️ by Shan  
