const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const video = document.querySelector("#hgwVideo");
const playOverlay = document.querySelector(".play-overlay");

if (video && playOverlay) {
  playOverlay.addEventListener("click", async () => {
    try {
      await video.play();
      playOverlay.classList.add("is-hidden");
    } catch (error) {
      video.setAttribute("controls", "controls");
    }
  });

  video.addEventListener("play", () => {
    playOverlay.classList.add("is-hidden");
  });

  video.addEventListener("pause", () => {
    if (!video.ended) playOverlay.classList.remove("is-hidden");
  });

  video.addEventListener("ended", () => {
    playOverlay.classList.remove("is-hidden");
  });
}

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof fbq === "function") {
      fbq("track", "Lead", {
        content_name: "WhatsApp HGW",
        contact_channel: "whatsapp"
      });
    }
  });
});


document.querySelectorAll(".js-product").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof fbq === "function") {
      fbq("track", "ViewContent", {
        content_name: link.dataset.product || "Producto HGW",
        content_category: "HGW Productos"
      });
    }
  });
});
