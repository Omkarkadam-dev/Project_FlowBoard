const textArray = [
    "Organize. Prioritize. Execute.",
    "Your Workflow. Simplified.",
    "Build with Kanban Power."
];
const typingSpeed = 80;
const erasingSpeed = 50;
const delayBetween = 1800;
let textIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, 500);
});


// Typing animation already present above...

// Scroll reveal for feature cards
document.addEventListener("DOMContentLoaded", () => {
    const featureCards = document.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    featureCards.forEach(card => observer.observe(card));
});


// Scroll reveal for preview cards
document.addEventListener("DOMContentLoaded", () => {
    const previewCards = document.querySelectorAll(".preview-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    previewCards.forEach(card => observer.observe(card));
});

// VanillaTilt init
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// Scroll reveal for How It Works section
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll("[data-step]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    steps.forEach(step => observer.observe(step));
});

// Scroll reveal for Testimonials
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll("[data-testimonial]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    testimonials.forEach(t => observer.observe(t));
});


// Scroll reveal for Use Cases
document.addEventListener("DOMContentLoaded", () => {
    const cases = document.querySelectorAll("[data-case]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    cases.forEach(c => observer.observe(c));
});


// Scroll reveal for Tech Stack
document.addEventListener("DOMContentLoaded", () => {
    const techItems = document.querySelectorAll("[data-tech]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    techItems.forEach(item => observer.observe(item));
});


// Scroll reveal for CTA
document.addEventListener("DOMContentLoaded", () => {
    const ctaSection = document.querySelector("[data-cta]");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    observer.observe(ctaSection);
  });
  