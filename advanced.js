const SHEET_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzAzb3iUtO1eu10N1YIrVSxdmdCWFsKlXlwTDVbEGce--CF7XN1xeXM1a3Fl3CNXP5r/exec';

async function submitAdv(e, week) {
  e.preventDefault();
  const form = e.target;
  const msg = form.querySelector('.msg');
  const nameInput = form.querySelector('[name="studentName"]');
  const studentName = nameInput ? nameInput.value.trim() : '';
  if (!studentName) {
    if (msg) {
      msg.textContent = 'Please enter your name.';
      msg.style.color = 'red';
    }
    return;
  }

  const answers = [];
  form.querySelectorAll('textarea').forEach((ta) => {
    answers.push({ answer: ta.value.trim() });
  });

  const payload = {
    studentName: studentName.trim(),
    quizNumber: 'A' + String(week),
    responses: answers
  };

  try {
    await fetch(SHEET_WEBAPP_URL, {
      mode: 'no-cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    form.reset();
    if (msg) {
      msg.textContent = '✅ Submitted!';
      msg.style.color = 'green';
    }
  } catch (err) {
    console.error(err);
    if (msg) {
      msg.textContent = '❌ Submission failed – try again';
      msg.style.color = 'red';
    }
  }
}
