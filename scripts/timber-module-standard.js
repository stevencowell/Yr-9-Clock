(function () {
  "use strict";

  const moduleId = location.pathname.match(/weeks\d+-\d+/i)?.[0]?.toLowerCase();
  const heroTitle = document.querySelector(".lesson-hero h1");
  const heroSubtitle = document.querySelector(".lesson-hero .hero-subtitle");
  const studentKicker = document.querySelector(".student-strip .section-kicker");
  const studentTitle = document.querySelector("#student-details-title");

  if (heroTitle && heroSubtitle) {
    heroTitle.textContent = heroSubtitle.textContent.trim();
    heroSubtitle.textContent = moduleId ? moduleId.replace("weeks", "Weeks ").replace("-", "–") + " guided learning" : "Clock guided learning";
  }
  if (studentKicker) studentKicker.textContent = "Student evidence";
  if (studentTitle) studentTitle.textContent = "Your details";

  const videos = {
    "weeks3-4": [{
      section: "theory-1",
      id: "oZkYLVrTYe4",
      title: "The Way Wood Works",
      source: "Workshop Companion",
      watch: "Watch for grain direction, timber movement and the way material structure affects marking and machining decisions."
    }],
    "weeks5-6": [{
      section: "theory-2",
      id: "Nu9tYcld7ck",
      title: "Drill Press Safety",
      source: "WoodWorkers Guild Of America",
      watch: "Watch for pre-start checks, work restraint, hand position and the order of a safe drill-press operation."
    }],
    "weeks7-8": [{
      section: "theory-1",
      id: "-KGOSwbHIuc",
      title: "Rebates / Rabbets with a Router",
      source: "Mitch Peacock",
      watch: "Watch how the rebate is referenced, controlled and checked; use only the school-approved method demonstrated by your teacher."
    }],
    "weeks13-14": [{
      section: "theory-2",
      id: "rLLn19Y3ULc",
      title: "Safety Tips for Working with Wood Finishing Products",
      source: "Rockler",
      watch: "Watch for ventilation, ignition risks, personal protection and safe handling of finishing materials."
    }, {
      section: "theory-3",
      id: "Vkw_-6YwLb0",
      title: "Clock Mechanism Installation",
      source: "Woodcraft",
      watch: "Watch the fitting sequence and the checks that keep the mechanism square, supported and free to operate."
    }],
    "weeks15-16": [{
      section: "theory-2",
      id: "BiwmJ4t2KWM",
      title: "Introduction to Orthographic Drawing",
      source: "Riaan Meeser",
      watch: "Watch how related views communicate the same object and how features line up between views."
    }]
  };

  (videos[moduleId] || []).forEach((video) => {
    const section = document.getElementById(video.section);
    if (!section || section.querySelector(".section-video")) return;

    const block = document.createElement("aside");
    block.className = "section-video screen-only";
    block.setAttribute("aria-label", `Video support: ${video.title}`);
    block.innerHTML = `
      <div class="section-video__copy">
        <p class="section-kicker">Watch beside the theory</p>
        <h3>${video.title}</h3>
        <p>${video.source}</p>
        <p><strong>Watch for:</strong> ${video.watch}</p>
        <a class="section-video__fallback" href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">Open video on YouTube</a>
      </div>
      <div class="section-video__frame">
        <button class="section-video__launch" type="button">Load the authorised video</button>
      </div>`;

    const heading = section.querySelector("h2");
    const insertionPoint = heading?.nextElementSibling || heading;
    if (insertionPoint) insertionPoint.insertAdjacentElement("afterend", block);
    else section.append(block);

    block.querySelector(".section-video__launch").addEventListener("click", (event) => {
      const iframe = document.createElement("iframe");
      iframe.title = video.title;
      iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      event.currentTarget.replaceWith(iframe);
    });
  });
})();
