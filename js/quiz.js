const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject');

// Validate subject
if (!subject || !questions[subject] || questions[subject].length === 0) {
  document.getElementById('result').innerHTML = `
    <span style="color: red;">Invalid or missing subject. Please return to</span>
    <a href="quiz.html" class="btn-outline">Subject Selection</a>.
  `;
  document.getElementById('subject-title').innerText = 'Error';
  throw new Error('Invalid or missing subject, or no questions available');
}

document.getElementById('subject-title').innerText = subject;

let current = 0;
let score = 0;
let timer = null; // Initialize as null
let timeLeft = 10;

const qData = questions[subject];

function loadQuestion() {
  
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  if (current >= qData.length) {
    showFinalResults();
    return;
  }

  document.getElementById('result').innerText = '';
  timeLeft = 10;
  document.getElementById('timer').innerText = `Time Left: ${timeLeft}`;

  document.getElementById('question').innerText = qData[current].question;
  const options = document.getElementById('options');
  options.innerHTML = '';
  
  qData[current].options.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerText = opt;
    div.onclick = () => checkAnswer(opt);
    options.appendChild(div);
  });

  // Start the timer
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      document.getElementById('timer').innerText = `Time Left: 0`;
      document.getElementById('result').innerHTML = '<span style="color: red;">Time’s up!</span>';
      // Disable options so user can't click after time is up
      const allOptions = document.querySelectorAll('.option');
      allOptions.forEach(el => el.style.pointerEvents = 'none');
      
      setTimeout(nextQuestion, 1000);
    } else {
      document.getElementById('timer').innerText = `Time Left: ${timeLeft}`;
    }
  }, 1000);
}

function checkAnswer(opt) {
  // Immediately stop the timer so it doesn't keep running during the feedback phase
  clearInterval(timer);
  timer = null;

  // Disable further clicking on options
  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(el => el.style.pointerEvents = 'none');

  if (opt === qData[current].answer) {
    score += 5;
    document.getElementById('result').innerHTML = '<span style="color: green;">YOU GOT THE CORRECT ANSWER</span>';
    setTimeout(nextQuestion, 1000); 
  } else {
    showFailureModal();
  }
}

function showFailureModal() {
  document.getElementById('result').innerHTML = '<span style="color: red;">YOU HAVE FAILED</span>';
  
  const resultWindow = document.createElement('div');
  const overlay = document.createElement('div');
  
  // Modal Styling
  Object.assign(resultWindow.style, {
    position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff', padding: '20px', borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', zIndex: '1000',
    textAlign: 'center', maxWidth: '400px', width: '90%'
  });

  // Overlay Styling
  Object.assign(overlay.style, {
    position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '999'
  });

  resultWindow.innerHTML = `
    <p style="color: #333; margin-bottom: 20px;">Incorrect! The correct answer is: <b>${qData[current].answer}</b></p>
    <button id="modal-close-btn" class="btn-outline" style="background:#4CAF50; color:white; border:none; padding:8px 16px; cursor:pointer; border-radius:4px;">OK</button>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(resultWindow);

  document.getElementById('modal-close-btn').onclick = () => {
    document.body.removeChild(resultWindow);
    document.body.removeChild(overlay);
    nextQuestion();
  };
}

function showFinalResults() {
  const result = (score >= 25) ? "PASS" : "FAIL";
  const link = `${window.location.origin}/quiz.html?subject=${encodeURIComponent(subject)}&score=${score}&ref=${Math.random().toString(36).substring(7)}`;
  
  let scoreColor = score >= 40 ? 'green' : (score >= 25 ? 'orange' : 'red');

  document.getElementById('result').innerHTML = `
    Your Score: <span style="color:${scoreColor}; font-weight:bold;">${score}/50</span> - ${result}<br>
    <p>Share your result: <span class="share-link-text">${link}</span></p>
    <button class="btn-outline copy-btn">Copy Link</button><br>
    <a href="../level.html" class="btn-outline return-btn">Return to Subject Selection</a>
  `;

  document.getElementById('question').innerText = '';
  document.getElementById('options').innerHTML = '';
  document.getElementById('timer').innerText = '';
  
  document.querySelector('.copy-btn').onclick = () => {
    navigator.clipboard.writeText(link).then(() => alert('Link copied!'));
  };
}

function nextQuestion() {
  current++;
  loadQuestion();
}

// Attach event and start
document.getElementById('next-btn').onclick = () => {
  nextQuestion();
};

loadQuestion();