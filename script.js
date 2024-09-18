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

function loadVideo() {
    // Ocultar la miniatura
    document.getElementById('thumbnail').style.display = 'none';
    // Insertar el iframe con autoplay activado
    document.getElementById('iframe-container').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/i5zR6toPVQ8?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}