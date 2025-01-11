document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', () => {
        alert(`You clicked on ${location.id}`);
    });
});

document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', () => {
        const locationDetails = {
            garden: "A place of serenity and continuity.",
            cliffs: "Where the sea meets the sky, and resilience thrives.",
            observatory: "A hub of wonder, curiosity, and starlight."
        };
        alert(locationDetails[location.id] || "Details not available.");
    });
});
