// ================================
// CONTACT FORM VALIDATION
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check empty fields
        if (name === "" || email === "" || message === "") {

            formMessage.textContent =
                "Please fill in all fields.";

            return;
        }

        // Check email format
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            return;
        }

        // Successful validation
        formMessage.textContent =
            "Message submitted successfully!";

        // Clear form
        contactForm.reset();

    });

}


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },

        {
            threshold: 0.15
        }

    );


    // Initial section state

    sections.forEach(function (section) {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(30px)";

        section.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(section);

    });

}