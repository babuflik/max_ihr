// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select all gallery items
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Function to show items when they enter the viewport
    function showGalleryItem(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);  // Stop observing once it's shown
            }
        });
    }

    // Create an intersection observer
    const observer = new IntersectionObserver(showGalleryItem, {
        threshold: 0.1 // Show item when 10% of it is visible
    });

    // Observe each gallery item
    galleryItems.forEach(item => {
        observer.observe(item);
    });
});


// Scroll-based fade-in for sections
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            section.style.opacity = 1;
        }
    });
});


// Eller skapa ett element med en specifik klass
const errorMessage = document.createElement('div');
errorMessage.classList.add('alert', 'alert-danger');
errorMessage.textContent = 'Vänligen fyll i alla fält.';
form.appendChild(errorMessage);

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('kontaktformulär');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const namn = document.getElementById('namn').value;
        const email = document.getElementById('email').value;
        const meddelande = document.getElementById('meddelande').value;

        let isValid = true;

	if (!namn) {
	    alert('Vänligen ange ett namn.');
	    isValid = false;
	}
        // E-postvalidering                                              
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Vänligen ange en giltig e-postadress.');
            isValid = false;
        }

        // Meddelandelängd
        if (meddelande.length < 10) {
            alert('Meddelandet måste vara minst 10 tecken långt.');
            isValid = false;
        }

        if (isValid) {
	    // Koda specialtecken i meddelandet
            const meddelandeField = document.getElementById('meddelande');
            const encodedMessage = encodeURIComponent(meddelandeField.value);
            meddelandeField.value = encodedMessage;

            // Skicka formuläret (mailto kommer att triggas automatiskt)
            form.submit(); 

            // Visa ett bekräftelsemeddelande
            const confirmationMessage = document.createElement('p');
            confirmationMessage.textContent = 'Tack för ditt meddelande! Vi återkommer snart.';
            form.appendChild(confirmationMessage);

            // Dölj bekräftelsemeddelandet efter några sekunder
            setTimeout(() => {
                confirmationMessage.remove();
            }, 5000); // 5000 millisekunder = 5 sekunder
            form.reset();
        }
    });
});
