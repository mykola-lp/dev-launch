const preview = document.querySelector("#dashboard-showcase");
const overlay = document.querySelector(".dashboard-demo-overlay");

const navItems = document.querySelectorAll("[data-demo-nav]");
const search = document.querySelector("[data-demo-search]");
const fullscreenBtn = document.querySelector("[data-dashboard-fullscreen]");

let running = false;
let paused = false;

/*****************************************
 * Helpers
 *****************************************/

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

/*****************************************
 * Stop demo
 *****************************************/

function stopDemo() {
  paused = true;
  overlay?.classList.add("is-hidden");
}

/*****************************************
 * Start demo
 *****************************************/

function resetDemo() {
  paused = false;
  overlay?.classList.remove("is-hidden");
  startDemo();
}

/*****************************************
 * Hover navigation
 *****************************************/

async function hoverNav(item) {
  if (paused) return;

  item.classList.add("dashboard-demo-active");
  await delay(1200);
  item.classList.remove("dashboard-demo-active");
}

/*****************************************
 * Search typing
 *****************************************/

async function runSearch() {
  if (!search || paused) return;

  const text = "Revenue";

  search.focus({ preventScroll: true });
  search.value = "";

  for (const char of text) {
    if (paused) return;

    search.value += char;
    await delay(150);
  }

  await delay(1500);

  search.value = "";
  search.blur();
}

/*****************************************
 * Main demo loop
 *****************************************/

async function startDemo() {
  if (running) {
    return;
  }

  running = true;

  while (!paused) {
    for (const item of navItems) {
      if (paused) break;

      await hoverNav(item);
      await delay(400);
    }

    if (paused) break;

    await runSearch();
    await delay(800);
  }

  running = false;
}

/*****************************************
 * User interaction
 *****************************************/

preview?.addEventListener("mouseenter", () => {
  stopDemo();
});

preview?.addEventListener("mouseleave", () => {
  if (preview.contains(document.activeElement)) {
    document.activeElement.blur();
  }

  resetDemo();
});

/*****************************************
 * Visible start
 *****************************************/

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startDemo();
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.3
  }
);

if (preview) {
  observer.observe(preview);
}

/*****************************************
 * Fullscreen
 *****************************************/

let savedScrollPosition = 0;

fullscreenBtn?.addEventListener(
  "click",
  async () => {
    if (!document.fullscreenElement) {
      savedScrollPosition = window.scrollY;
      await preview.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  }
);

document.addEventListener(
  "fullscreenchange",
  () => {
    const isFullscreen = document.fullscreenElement === preview;

    preview?.classList.toggle("is-fullscreen", isFullscreen);

    if (isFullscreen) {
      stopDemo();
      fullscreenBtn.textContent = "Exit";
      return;
    }

    fullscreenBtn.blur();
    resetDemo();
    fullscreenBtn.textContent = "Expand";

    setTimeout(() => {
      window.scrollTo({
        top: savedScrollPosition,
        behavior: "instant"
      });
    }, 0);
  }
);
