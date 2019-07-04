
autoboundEventHandlers.addEventHandler('toggleNavMenu', (e) => {
    console.log('clicked');
    const links = document.querySelector('.links');
    links.classList.toggle('show-links');
});

assignAutoboundEventHandlers();