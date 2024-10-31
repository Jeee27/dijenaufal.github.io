let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header navlinks a')

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - window.innerHeight / 1.2;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            sec.classList.add('scroll-animate')
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header navlinks a [href* ' + id +']'.classList.add('active'))
            })
        }
        else (
            sec.classList.remove('scroll-animate')
        )
    });
    
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const statusMessage = document.createElement("div");
    statusMessage.className = "status-message";
    form.appendChild(statusMessage);

    emailjs.init ({
        publicKey: "eAt_lpQAyeNn9g7b_",
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm("service_1dmq1l5", "template_2glpevm", this)
            .then(() => {
                // Pesan sukses
                statusMessage.textContent = "Message sent successfully!";
                statusMessage.style.color = "green";
                form.reset();
            })
            .catch(() => {
                // Pesan error
                statusMessage.textContent = "Error sending message. Please try again.";
                statusMessage.style.color = "red";
            });
    });
});

