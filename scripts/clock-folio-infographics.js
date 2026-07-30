(() => {
  const graphics = [
    ['Project Brief and Success Criteria', '01-project-brief.png', 'Use this process guide to identify evidence requirements. Confirm every project claim against the supplied drawing and assessment brief.'],
    ['Plans, Dimensions and Cutting List', '../../clock-plan-overview.png', 'The supplied working drawing controls geometry and written dimensions. Do not scale this image.', true],
    ['WHS, WMS and Drill Press SOP', '../../reference/hierarchy-of-controls.jpg', 'Use the hierarchy to strengthen controls. The actual school SOP and teacher direction control every machine operation.', true],
    ['Timber Inspection and Responsible Selection', '04-timber-selection.png', 'Use this process guide to plan inspection and evidence. Confirm the actual timber with the teacher.'],
    ['Carcass, Rebates and Chamfers', '../../clock-plan-overview.png', 'Use the supplied drawing to verify the carcass arrangement. Teacher direction and approved procedures control manufacture.', true],
    ['Clock Face Opening and Mechanism', '../../clock-plan-overview.png', 'Use the written drawing information and supplied mechanism details. Do not infer geometry or settings from the image.', true],
    ['Hidden Drawer and Off-cut Use', '../../clock-plan-overview.png', 'The supplied drawing and assessment brief authorise the hidden drawer and off-cut requirement; confirm construction details before manufacture.', true],
    ['Surface Preparation', '08-surface-preparation.png', 'Use this process guide for evidence planning. The approved abrasive sequence and dust controls come from teacher direction and school procedure.'],
    ['Three-coat Oil Finish', '../../reference/clock-assessment-requirements.png', 'The assessment requires surface preparation and a three-coat oil finish. The selected product label, SDS and teacher control the application details.', true],
    ['Photos, Captions and Project Evidence', '10-project-evidence.png', 'Use this process guide to collect authentic, safely timed evidence and explain what each item proves.'],
    ['Problem Solving and Improvement', '11-problem-solving.png', 'Use this process guide to structure diagnosis and evidence; every correction must be teacher approved.'],
    ['PMI Evaluation and Final Quality', '12-pmi-evaluation.png', 'Use this process guide to organise evaluation, then support each judgement with actual Clock evidence.']
  ];

  function addInfographics() {
    const cards = document.querySelectorAll('#folioCards .folio-card');
    cards.forEach((card, index) => {
      const graphic = graphics[index];
      const header = card.querySelector('.folio-head');
      if (!graphic || !header || card.querySelector('.folio-card-graphic')) return;

      const figure = document.createElement('figure');
      figure.className = `folio-card-graphic${graphic[3] ? ' source-authority' : ''}`;
      figure.innerHTML = `
        <img src="assets/folio/cards/${graphic[1]}" alt="${graphic[0]} infographic" loading="lazy" decoding="async">
        <figcaption><strong>${graphic[3] ? 'Source authority:' : 'Evidence use:'}</strong> ${graphic[2]}</figcaption>
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
