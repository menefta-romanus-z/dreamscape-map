document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', () => {
        alert(`You clicked on ${location.id}`);
    });
});
