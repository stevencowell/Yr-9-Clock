(() => {
  const graphics = [
    ['Project Brief and Success Criteria', '01-project-brief.png'],
    ['Plans, Dimensions and Cutting List', '02-plans-cutting-list.png'],
    ['WHS, WMS and Drill Press SOP', '03-whs-wms-sop.png'],
    ['Timber Inspection and Responsible Selection', '04-timber-selection.png'],
    ['Carcass, Rebates and Chamfers', '05-carcass-rebates-chamfers.png'],
    ['Clock Face Opening and Mechanism', '06-face-opening-mechanism.png'],
    ['Hidden Drawer and Off-cut Use', '07-hidden-drawer.png'],
    ['Surface Preparation', '08-surface-preparation.png'],
    ['Three-coat Oil Finish', '09-three-coat-finish.png'],
    ['Photos, Captions and Project Evidence', '10-project-evidence.png'],
    ['Problem Solving and Improvement', '11-problem-solving.png'],
    ['PMI Evaluation and Final Quality', '12-pmi-evaluation.png']
  ];

  function addInfographics() {
    const cards = document.querySelectorAll('#folioCards .folio-card');
    cards.forEach((card, index) => {
      const graphic = graphics[index];
      const header = card.querySelector('.folio-head');
      if (!graphic || !header || card.querySelector('.folio-card-graphic')) return;

      const figure = document.createElement('figure');
      figure.className = 'folio-card-graphic';
      figure.innerHTML = `
        <img src="assets/folio/cards/${graphic[1]}" alt="${graphic[0]} infographic" loading="lazy" decoding="async">
        <figcaption>Use this visual to help you identify the evidence and explanation needed for this stage.</figcaption>
      `;
      header.insertAdjacentElement('afterend', figure);
    });
  }

  function start() {
    requestAnimationFrame(addInfographics);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
