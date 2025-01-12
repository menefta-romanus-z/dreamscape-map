// Debugging Helper: Log when script runs
console.log("Script loaded successfully");

// Attach hover descriptions
document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('mouseover', (e) => {
        const title = location.getAttribute('title');
        location.setAttribute('data-hover', title); // Set hover text dynamically
    });

    location.addEventListener('mouseout', () => {
        location.removeAttribute('data-hover'); // Remove hover text
    });
});

// Add click event for future interactions (if needed)
document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Clicked on: ${location.className}`);
    });
});
