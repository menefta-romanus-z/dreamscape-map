// Debugging Helper: Log when script runs
console.log("Script loaded successfully");

// Attach hover descriptions
document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('mouseover', (e) => {
        const title = location.getAttribute('title');
        if (title) {
            const hoverElement = document.createElement('div');
            hoverElement.className = 'hover-description';
            hoverElement.textContent = title;
            hoverElement.style.position = 'absolute';
            hoverElement.style.left = `${e.pageX + 10}px`; // Slight offset from cursor
            hoverElement.style.top = `${e.pageY + 10}px`;
            hoverElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            hoverElement.style.color = 'white';
            hoverElement.style.padding = '5px';
            hoverElement.style.borderRadius = '5px';
            hoverElement.style.zIndex = '1000';
            document.body.appendChild(hoverElement);

            location.addEventListener('mousemove', (moveEvent) => {
                hoverElement.style.left = `${moveEvent.pageX + 10}px`;
                hoverElement.style.top = `${moveEvent.pageY + 10}px`;
            });

            location.setAttribute('data-hover-id', hoverElement);
        }
    });

    location.addEventListener('mouseout', () => {
        const hoverId = location.getAttribute('data-hover-id');
        if (hoverId) {
            document.body.removeChild(document.querySelector('.hover-description'));
            location.removeAttribute('data-hover-id');
        }
    });
});

// Add click event for debugging
document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Clicked on: ${location.className}`);
    });
});
