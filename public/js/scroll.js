// public/js/scroll.js
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-up");

  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
