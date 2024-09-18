const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const trackListItems = document.querySelectorAll('.track-list li');

trackListItems.forEach(item => {
    item.addEventListener('click', () => {
        trackListItems.forEach(el => el.classList.remove('active')); // Remover clase activa de todas las canciones
        item.classList.add('active'); // Añadir clase activa a la canción seleccionada

        const src = item.getAttribute('data-src');
        audioSource.src = src;
        audio.load();
        audio.play();
    });
});
