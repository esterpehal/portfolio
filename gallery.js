/**
 * ESTER PEHAL — PORTFOLIO GALLERY LOGIC
 * Includes: Video Showcase Switcher, Filter System, Fullscreen Lightbox, Email Copy Toast
 */

// Artwork Database
const artworksData = [
  // ==========================================
  // PAINTINGS
  // ==========================================
  {
    id: "painting-angel",
    title: "Angel on a Wire",
    czechTitle: "Anděl na drátě",
    category: "paintings",
    categoryLabel: "Paintings",
    year: "2024",
    medium: "Digital Painting",
    dimensions: "1591 × 2064 px",
    image: "Angel on a wire.jpg",
    thumbnail: "thumbnails/Angel on a wire.jpg",
    description: "Atmospheric twilight piece depicting a winged angel perched atop a high-voltage electrical pylon against radiant sunset storm clouds.",
    aspectClass: "portrait-aspect"
  },
  {
    id: "painting-nostalgic",
    title: "Nostalgic View",
    czechTitle: "Nostalgický výhled",
    category: "paintings",
    categoryLabel: "Paintings",
    year: "2024",
    medium: "Digital Painting",
    dimensions: "1591 × 2371 px",
    image: "Nostalgic view.PNG",
    thumbnail: "thumbnails/Nostalgic view.jpg",
    description: "Vibrant golden hour study striking modernist rooftop buildings beneath a soft pink moon in a dusky violet sky.",
    aspectClass: "portrait-aspect"
  },
  {
    id: "painting-somewhere",
    title: "Somewhere Far",
    czechTitle: "Někde daleko",
    category: "paintings",
    categoryLabel: "Paintings",
    year: "2024",
    medium: "Digital Landscape Painting",
    dimensions: "665 × 1000 px",
    image: "somewhere far.jpg",
    thumbnail: "thumbnails/somewhere far.jpg",
    description: "Sunlit coastal landscape with wildflowers and chamomile on rocky crags overlooking an expansive mountain lake.",
    aspectClass: "portrait-aspect"
  },
  {
    id: "painting-eggs",
    title: "Eggs",
    czechTitle: "Vejce",
    category: "paintings",
    categoryLabel: "Paintings",
    year: "2024",
    medium: "Painterly Still Life Study",
    dimensions: "1550 × 2064 px",
    image: "eggs.jpg",
    thumbnail: "thumbnails/eggs.jpg",
    description: "Textural still-life study capturing the fragile translucency of cracked eggshells and glistening raw yolks.",
    aspectClass: "portrait-aspect"
  },
  {
    id: "painting-susie",
    title: "Susie Myerson",
    czechTitle: "Susie Myerson",
    category: "paintings",
    categoryLabel: "Paintings",
    year: "2024",
    medium: "Digital Portrait Painting",
    dimensions: "1541 × 1932 px",
    image: "Susie Myerson.jpg",
    thumbnail: "thumbnails/Susie Myerson.jpg",
    description: "Expressive painted portrait tribute to talent manager Susie Myerson (The Marvelous Mrs. Maisel) mid-conversation on the telephone.",
    aspectClass: "portrait-aspect"
  },
  {
    id: "painting-horseman",
    title: "Unknown Horseman",
    czechTitle: "Neznámý jezdec",
    category: "paintings",
    categoryLabel: "Paintings",
    year: "2024",
    medium: "Digital Character Painting",
    dimensions: "1059 × 1940 px",
    image: "unknown horseman.jpg",
    thumbnail: "thumbnails/unknown horseman.jpg",
    description: "Moody character portrait rendered in opulent violet tones, featuring a brooding figure in military headwear and a gold-buckled cape.",
    aspectClass: "portrait-aspect"
  },

  // ==========================================
  // CHARACTER ART
  // ==========================================
  {
    id: "char-angelic-agents",
    title: "Angelic Agents",
    czechTitle: "Andělští agenti",
    category: "character-art",
    categoryLabel: "Character Art",
    year: "2024",
    medium: "Digital Character Illustration",
    dimensions: "2266 × 2422 px",
    image: "Angelic Agents.PNG",
    thumbnail: "thumbnails/Angelic Agents.jpg",
    description: "Stylized, charismatic duo of winged agents in dark tactical uniforms posing with playful sibling chemistry.",
    aspectClass: "square-aspect"
  },
  {
    id: "char-nurses",
    title: "Nurses at Karlovo Náměstí",
    czechTitle: "Sestřičky z Karláku",
    category: "character-art",
    categoryLabel: "Character Art",
    year: "2024",
    medium: "Character Art / Mixed Media",
    dimensions: "4032 × 3024 px",
    image: "Nurses.PNG",
    thumbnail: "thumbnails/Nurses.jpg",
    description: "Humorous illustration of pigeon nurses taking a cigarette break outside the Prague Karlovo Náměstí clinic (Fakultní poliklinika).",
    aspectClass: "wide-aspect"
  },
  {
    id: "char-mobster",
    title: "Little Mobster",
    czechTitle: "Malý mafián",
    category: "character-art",
    categoryLabel: "Character Art",
    year: "2024",
    medium: "Digital Character Design",
    dimensions: "1658 × 2015 px",
    image: "little mobster.PNG",
    thumbnail: "thumbnails/little mobster.jpg",
    description: "Formidable demon underworld boss in a crisp tailored three-piece suit, equipped with a cane and bloody brass knuckles.",
    aspectClass: "portrait-aspect"
  },
  {
    id: "char-ussr",
    title: "Boar General (USSR)",
    czechTitle: "Divočák generál",
    category: "character-art",
    categoryLabel: "Character Art",
    year: "2024",
    medium: "Character Concept & Satire",
    dimensions: "1869 × 1900 px",
    image: "USSR.PNG",
    thumbnail: "thumbnails/USSR.jpg",
    description: "Satirical character design of an authoritative wild boar commander in ceremonial Soviet military dress with sickle and spade.",
    aspectClass: "square-aspect"
  },
  {
    id: "char-princesses",
    title: "Princesses / Royal Guard",
    czechTitle: "Princezny / Stráž",
    category: "character-art",
    categoryLabel: "Character Art",
    year: "2024",
    medium: "Character Silhouette & Costume Design",
    dimensions: "1795 × 1762 px",
    image: "princesses.png",
    thumbnail: "thumbnails/princesses.jpg",
    description: "Intricately silhouetted guards dressed in Victorian-style ruffled crinoline dresses combined with tactical military field gear and carbines.",
    aspectClass: "square-aspect"
  },
  {
    id: "char-kapri-panna",
    title: "Kapří panna (Projekt PARALEGAL)",
    czechTitle: "Kapří panna - Projekt PARALEGAL",
    category: "character-art",
    categoryLabel: "Character Art",
    year: "2024",
    medium: "Visual Development Concept",
    dimensions: "1205 × 1759 px",
    image: "kapri_panna_projekt_paralegal.jpg",
    thumbnail: "thumbnails/kapri_panna_projekt_paralegal.jpg",
    description: "Whimsical freshwater carp mermaid concept holding a brown glass bottle, created for the visual development of Projekt PARALEGAL.",
    aspectClass: "portrait-aspect"
  },

  // ==========================================
  // SKETCHES & STUDIES
  // ==========================================
  {
    id: "sketch-turnaround",
    title: "Character Turnaround Sheet",
    czechTitle: "Skici postav a obraty",
    category: "sketches",
    categoryLabel: "Sketches & Studies",
    year: "2024",
    medium: "Model Sheet & Turnaround Study",
    dimensions: "2732 × 2064 px",
    image: "Character sketches.PNG",
    thumbnail: "thumbnails/Character sketches.jpg",
    description: "Turnaround model sheet exploring streetwear proportions, schoolboy silhouette, and soccer uniform front/back posture.",
    aspectClass: "wide-aspect"
  },
  {
    id: "sketch-faces",
    title: "Face & Emotion Sketches",
    czechTitle: "Skici obličejů a emocí",
    category: "sketches",
    categoryLabel: "Sketches & Studies",
    year: "2024",
    medium: "Facial Expression Sheet",
    dimensions: "2536 × 1989 px",
    image: "Face sketches.PNG",
    thumbnail: "thumbnails/Face sketches.jpg",
    description: "Lively character emotion sheet investigating facial expressions, confusion, skepticism, hesitation, and humor.",
    aspectClass: "wide-aspect"
  },
  {
    id: "sketch-ivan",
    title: "Roaring Ivan",
    czechTitle: "Řvoucí Ivan",
    category: "sketches",
    categoryLabel: "Sketches & Studies",
    year: "2024",
    medium: "Ink & Wash Caricature",
    dimensions: "1638 × 1501 px",
    image: "roaring Ivan.PNG",
    thumbnail: "thumbnails/roaring Ivan.jpg",
    description: "High-energy ink and wash caricature with bold angular strokes and expressive facial exaggeration of a shouting officer.",
    aspectClass: "square-aspect"
  },
  {
    id: "sketch-anestesiologist",
    title: "Anesthesiologist",
    czechTitle: "Anestezioložka",
    category: "sketches",
    categoryLabel: "Sketches & Studies",
    year: "2024",
    medium: "Digital Line Art Design",
    dimensions: "2201 × 2185 px",
    image: "Anestesiologist.PNG",
    thumbnail: "thumbnails/Anestesiologist.jpg",
    description: "Clean linework concept design of an imposing, grim surgical matron wielding a giant war sledgehammer.",
    aspectClass: "square-aspect"
  },
  {
    id: "sketch-floorballist",
    title: "Floorballist",
    czechTitle: "Florbalista",
    category: "sketches",
    categoryLabel: "Sketches & Studies",
    year: "2024",
    medium: "Tonal Shaded Figure Drawing",
    dimensions: "1812 × 2064 px",
    image: "Floorballist.PNG",
    thumbnail: "thumbnails/Floorballist.jpg",
    description: "Athletic character study of a determined floorball player #7 with dynamic silhouette and tonal marker shading.",
    aspectClass: "portrait-aspect"
  }
];

// Video Showcase Catalog
const videoCatalog = {
  main: {
    title: "AVE 2 — Animated Semestral Project",
    runtime: "34s",
    srcMp4: "animation.mp4",
    srcMov: "PehalováEsterAVE2SemestralniPrace.MOV",
    ratioClass: "ratio-16-9",
    meta: ["2D Animation", "34s"],
    description: ""
  },
  drawing: {
    title: "Endless Drawing",
    runtime: "36s",
    srcMp4: "endless_drawing.mp4",
    srcMov: "endless drawing.MOV",
    ratioClass: "ratio-1-1",
    meta: ["Process Loop", "36s"],
    description: ""
  }
};

// State
let currentLightboxIndex = 0;
let currentArtworkList = [...artworksData];
let isLightboxZoomed = false;

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderGalleries();
  setupVideoPlayer();
  setupFilterButtons();
  setupLightbox();
  setupScrollEffects();
  setupContactFeatures();
});

// Render Artworks into Respective Style Sections
function renderGalleries() {
  const paintingsGrid = document.getElementById("paintings-grid");
  const characterGrid = document.getElementById("character-grid");
  const sketchesGrid = document.getElementById("sketches-grid");

  if (!paintingsGrid || !characterGrid || !sketchesGrid) return;

  paintingsGrid.innerHTML = "";
  characterGrid.innerHTML = "";
  sketchesGrid.innerHTML = "";

  artworksData.forEach((art) => {
    const card = createArtCard(art);
    if (art.category === "paintings") {
      paintingsGrid.appendChild(card);
    } else if (art.category === "character-art") {
      characterGrid.appendChild(card);
    } else if (art.category === "sketches") {
      sketchesGrid.appendChild(card);
    }
  });
}

function createArtCard(art) {
  const card = document.createElement("article");
  card.className = "art-card";
  card.dataset.id = art.id;
  card.dataset.category = art.category;

  card.innerHTML = `
    <div class="art-card-media ${art.aspectClass}">
      <img
        src="${art.thumbnail}"
        alt="${art.title} by Ester Pehal"
        class="art-card-img"
        loading="lazy"
      >
      <div class="art-card-overlay">
        <span class="view-prompt">View</span>
      </div>
    </div>
    <div class="art-card-content">
      <h3 class="art-card-title">${art.title}</h3>
      <span class="category-tag">${art.categoryLabel}</span>
    </div>
  `;

  card.addEventListener("click", () => {
    openLightbox(art.id);
  });

  return card;
}

// Video Showcase Controls
function setupVideoPlayer() {
  const tabBtns = document.querySelectorAll(".video-tab-btn");
  const videoPlayerWrapper = document.getElementById("video-player-wrapper");
  const videoElem = document.getElementById("featured-video");
  const videoTitle = document.getElementById("video-title");
  const videoDesc = document.getElementById("video-desc");
  const videoTags = document.getElementById("video-tags");
  const btnRestart = document.getElementById("btn-restart-video");
  const btnMute = document.getElementById("btn-mute-video");

  if (!tabBtns || !videoElem) return;

  function loadVideo(type) {
    const data = videoCatalog[type];
    if (!data) return;

    // Update class for aspect ratio
    videoPlayerWrapper.className = `video-player-wrapper ${data.ratioClass}`;

    // Update source
    videoElem.pause();
    videoElem.innerHTML = `
      <source src="${data.srcMp4}" type="video/mp4">
      <source src="${data.srcMov}" type="video/quicktime">
      Your browser does not support HTML5 video.
    `;
    videoElem.load();

    // Update text
    videoTitle.textContent = data.title;
    if (videoDesc) videoDesc.textContent = data.description;

    if (videoTags) {
      videoTags.innerHTML = data.meta
        .map(tag => `<span class="meta-pill">${tag}</span>`)
        .join("");
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const videoKey = btn.dataset.video;
      loadVideo(videoKey);
    });
  });

  if (btnRestart) {
    btnRestart.addEventListener("click", () => {
      videoElem.currentTime = 0;
      videoElem.play();
    });
  }

  if (btnMute) {
    btnMute.addEventListener("click", () => {
      videoElem.muted = !videoElem.muted;
      btnMute.textContent = videoElem.muted ? "🔇 Unmute Audio" : "🔊 Mute Audio";
    });
  }
}

// Category Filter System
function setupFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll(".art-style-section");
  const statusText = document.getElementById("filter-status-text");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      if (filter === "all") {
        sections.forEach(sec => sec.classList.remove("hidden-by-filter"));
        if (statusText) statusText.textContent = "Showing all 17 works";
        currentArtworkList = [...artworksData];
      } else {
        sections.forEach(sec => {
          if (sec.id === `section-${filter}`) {
            sec.classList.remove("hidden-by-filter");
          } else {
            sec.classList.add("hidden-by-filter");
          }
        });

        const activeSec = document.getElementById(`section-${filter}`);
        if (activeSec) {
          activeSec.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        const filtered = artworksData.filter(a => a.category === filter);
        currentArtworkList = filtered;

        const count = filtered.length;
        const nameMap = {
          paintings: "Paintings",
          "character-art": "Character Art",
          sketches: "Sketches & Studies"
        };
        if (statusText) statusText.textContent = `Showing ${count} works in ${nameMap[filter] || filter}`;
      }
    });
  });
}

// Lightbox Modal
function setupLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  const zoomBtn = document.getElementById("lightbox-zoom");
  const image = document.getElementById("lightbox-img");

  if (!modal) return;

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrevArtwork);
  nextBtn.addEventListener("click", showNextArtwork);

  zoomBtn.addEventListener("click", () => {
    isLightboxZoomed = !isLightboxZoomed;
    image.classList.toggle("zoomed", isLightboxZoomed);
    zoomBtn.innerHTML = isLightboxZoomed
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  });

  image.addEventListener("click", () => {
    isLightboxZoomed = !isLightboxZoomed;
    image.classList.toggle("zoomed", isLightboxZoomed);
  });

  // Close on backdrop click (outside image)
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("lightbox-stage")) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrevArtwork();
    if (e.key === "ArrowRight") showNextArtwork();
  });
}

function openLightbox(artworkId) {
  const modal = document.getElementById("lightbox-modal");
  const idx = currentArtworkList.findIndex(a => a.id === artworkId);
  currentLightboxIndex = idx !== -1 ? idx : 0;
  updateLightboxContent();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const image = document.getElementById("lightbox-img");
  modal.classList.remove("open");
  document.body.style.overflow = "";
  isLightboxZoomed = false;
  image.classList.remove("zoomed");
}

function showPrevArtwork() {
  if (!currentArtworkList.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentArtworkList.length) % currentArtworkList.length;
  updateLightboxContent();
}

function showNextArtwork() {
  if (!currentArtworkList.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentArtworkList.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const art = currentArtworkList[currentLightboxIndex];
  if (!art) return;

  const image = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const meta = document.getElementById("lightbox-meta");
  const counter = document.getElementById("lightbox-counter");
  const btnOriginal = document.getElementById("lightbox-open-original");

  isLightboxZoomed = false;
  image.classList.remove("zoomed");

  image.src = art.image;
  image.alt = `${art.title} - Ester Pehal`;

  title.innerHTML = `
    ${art.title}
    <span class="category-tag">${art.categoryLabel}</span>
  `;

  if (meta) {
    meta.innerHTML = "";
  }

  counter.textContent = `${currentLightboxIndex + 1} / ${currentArtworkList.length}`;

  if (btnOriginal) {
    btnOriginal.href = art.image;
    btnOriginal.target = "_blank";
  }

  // Preload adjacent images
  if (currentArtworkList.length > 1) {
    const nextIdx = (currentLightboxIndex + 1) % currentArtworkList.length;
    const prevIdx = (currentLightboxIndex - 1 + currentArtworkList.length) % currentArtworkList.length;
    new Image().src = currentArtworkList[nextIdx].image;
    new Image().src = currentArtworkList[prevIdx].image;
  }
}

// Scroll Effects & Back to Top
function setupScrollEffects() {
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add("visible");
    } else {
      backToTopBtn?.classList.remove("visible");
    }
  });

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact Features: Copy Email and Toast
function setupContactFeatures() {
  const copyBtns = document.querySelectorAll(".btn-copy-email");
  const toast = document.getElementById("toast-notice");
  const email = "ester@pehal.net";

  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email address copied: ester@pehal.net");
      }).catch(() => {
        showToast("Ester Pehal: " + email);
      });
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
}
