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
            hoverElement.style.left = `${e.pageX + 10}px`;
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
            const hoverElement = document.querySelector('.hover-description');
            if (hoverElement) document.body.removeChild(hoverElement);
            location.removeAttribute('data-hover-id');
        }
    });
});

// Add click event for pop-up handling
document.querySelectorAll('.location').forEach(location => {
    location.addEventListener('click', (e) => {
        e.preventDefault();
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popup-content');
        const shortDescription = location.getAttribute('data-short');
        const longDescription = location.getAttribute('data-long');

        if (popup && popupContent) {
            if (shortDescription) {
                console.log("Pop-up found and updated.");

                // Populate and display the short description with Read More button
                popupContent.innerHTML = `
                    <p>${shortDescription}</p>
                    ${longDescription ? `<button id="read-more">Read More</button>` : ''}
                `;
                popup.classList.remove('hidden');
                popup.style.display = 'block'; // Ensure visibility
            }

            // Handle Read More button
            if (longDescription) {
                const readMoreBtn = document.getElementById('read-more');
                if (readMoreBtn) {
                    readMoreBtn.addEventListener('click', () => {
                        popupContent.innerHTML = `
                            <p>${longDescription}</p>
                            <button id="popup-close-long">Close</button>
                        `;
                        console.log("Long description displayed.");

                        // Add a close button for long description
                        const closeLongButton = document.getElementById('popup-close-long');
                        if (closeLongButton) {
                            closeLongButton.addEventListener('click', () => {
                                popup.classList.add('hidden');
                                popup.style.display = 'none';
                            });
                        }
                    });
                }
            }
        } else {
            console.log("Pop-up structure not found.");
        }

        // Close the pop-up
        const closeButton = document.getElementById('popup-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                popup.classList.add('hidden');
                popup.style.display = 'none';
                console.log("Pop-up closed.");
            });
        }
    });
});
