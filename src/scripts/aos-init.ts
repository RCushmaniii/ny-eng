import AOS from "aos";

const isPhone = () => window.matchMedia("(max-width: 767px)").matches;

AOS.init({
  duration: 800,
  once: true,
  disable: isPhone, // phones skip animations
});

if (isPhone()) {
  document.querySelectorAll("[data-aos]").forEach((el) => {
    (el as HTMLElement).style.opacity = "1";
    (el as HTMLElement).style.transform = "none";
    (el as HTMLElement).style.transition = "none";
  });
}
