const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackListItems = document.querySelectorAll('.track-list li');

trackListItems.forEach(item => {
    item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        audioSource.src = src;
        audio.load();
        audio.play();
    });
});
