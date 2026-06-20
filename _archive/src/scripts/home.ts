const shell = document.querySelector<HTMLElement>("[data-world-shell]");
const hero = document.querySelector<HTMLElement>("[data-hero]");
const ghostHeader = document.querySelector<HTMLElement>("[data-ghost-header]");
const ageControls = document.querySelectorAll<HTMLAnchorElement>("[data-age-control]");
const ageDetail = document.querySelector<HTMLElement>(".age-reading");
const ageLabel = document.querySelector<HTMLElement>("[data-age-detail-label]");
const ageGenre = document.querySelector<HTMLElement>("[data-age-detail-genre]");
const ageVoice = document.querySelector<HTMLElement>("[data-age-detail-voice]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (hero && ghostHeader && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      ghostHeader.dataset.visible = String(!entry.isIntersecting);
    },
    { threshold: 0.08 },
  );

  observer.observe(hero);
}

const updateAge = (control: HTMLAnchorElement) => {
  const id = control.dataset.ageControl;
  const label = control.dataset.ageLabel;
  const genre = control.dataset.ageGenre;
  const voice = control.dataset.ageVoice;
  const color = control.dataset.ageColor;

  if (!id || !label || !genre || !voice || !shell || !ageLabel || !ageGenre || !ageVoice) return;

  ageControls.forEach((item) => {
    if (item === control) item.setAttribute("aria-current", "true");
    else item.removeAttribute("aria-current");
  });

  const commit = () => {
    shell.dataset.age = id;
    if (color) shell.style.setProperty("--color-accent", color);
    ageLabel.textContent = label;
    ageGenre.textContent = genre;
    ageVoice.textContent = voice;
  };

  if (reduceMotion || !ageDetail) {
    commit();
    return;
  }

  const leaving = ageDetail.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(8px)" },
    ],
    { duration: 220, easing: "ease", fill: "forwards" },
  );

  leaving.finished.then(() => {
    commit();
    ageDetail.animate(
      [
        { opacity: 0, transform: "translateY(-8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 320, delay: 60, easing: "ease", fill: "forwards" },
    );
  });
};

ageControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
    updateAge(control);
    history.replaceState(null, "", control.hash);
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;

  document.querySelectorAll<HTMLDetailsElement>(".archive-search[open]").forEach((search) => {
    if (!search.contains(target)) search.removeAttribute("open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll<HTMLDetailsElement>(".archive-search[open]").forEach((search) => {
    search.removeAttribute("open");
    search.querySelector<HTMLElement>("summary")?.focus();
  });
});
