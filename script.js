document.addEventListener("DOMContentLoaded", function () {
    // Play music on button click
    const musicBtn = document.getElementById("music-btn");
    const galleryMusicBtn = document.getElementById("gallery-music-btn");
    const bgMusic = document.getElementById("bg-music");
    const galleryMusic = document.getElementById("gallery-music");

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener("click", function () {
            if (bgMusic.paused) {
                bgMusic.play();
                musicBtn.textContent = "Pause Music ⏸️";
            } else {
                bgMusic.pause();
                musicBtn.textContent = "Play Music 🎶";
            }
        });
    }

    if (galleryMusicBtn && galleryMusic) {
        galleryMusicBtn.addEventListener("click", function () {
            if (galleryMusic.paused) {
                galleryMusic.play();
                galleryMusicBtn.textContent = "Pause Music ⏸️";
            } else {
                galleryMusic.pause();
                galleryMusicBtn.textContent = "Play Music 🎶";
            }
        });
    }

    // Image scroll animation (for gallery.html)
    const slides = document.querySelectorAll(".slide");
    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    slides.forEach((slide) => {
        observer.observe(slide);
    });

    // Modal logic
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("confetti-btn");
    const closeModal = document.getElementById("close-modal");

    if (btn && modal) {
        btn.addEventListener("click", () => {
            modal.style.display = "flex"; // Modal muncul hanya saat tombol diklik
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none"; // Modal ditutup saat tombol close diklik
        });
    }

    // Hide modal if clicked outside content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
