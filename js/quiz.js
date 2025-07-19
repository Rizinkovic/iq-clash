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
let timer;
let timeLeft = 10;

const qData = questions[subject];

function loadQuestion() {
  if (current >= qData.length) {
    const result = (score >= 25) ? "PASS" : "FAIL";
    const link = `${window.location.origin}/quiz.html?subject=${encodeURIComponent(subject)}&score=${score}&ref=${Math.random().toString(36).substring(7)}`;
    
    let scoreColor;
    if (score >= 40) {
      scoreColor = 'green';          
    } else if (score >= 25) {
      scoreColor = 'orange';         
    } else {
      scoreColor = 'red';            
    }

    document.getElementById('result').innerHTML = `
      Your Score: <span style="color:${scoreColor}; font-weight:bold;">${score}/50</span> - ${result}<br>
      <p>Share your result: <span class="share-link-text">${link}</span></p>
      <button class="btn-outline copy-btn">Copy Link</button><br>
      <a href="quiz.html" class="btn-outline return-btn">Return to Subject Selection</a>
    `;

    document.getElementById('question').innerText = '';
    document.getElementById('options').innerHTML = '';
    document.getElementById('timer').innerText = '';
    clearInterval(timer);
    document.querySelector('.copy-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy link. Please copy it manually.');
      });
    });
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

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = `Time Left: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById('result').innerHTML = '<span style="color: red;">Time’s up!</span>';
      setTimeout(nextQuestion, 1000); // Show "Time’s up!" for 1 second before advancing
    }
  }, 1000);
}

function checkAnswer(opt) {
  clearInterval(timer);
  if (opt === qData[current].answer) {
    score += 5;
    document.getElementById('result').innerHTML = '<span style="color: green;">YOU GOT THE CORRECT ANSWER</span>';
  } else {
    document.getElementById('result').innerHTML = '<span style="color: red;">YOU HAVE FAILED</span>';
  }
  setTimeout(nextQuestion, 1000); // Advance to next question after 1 second
}

function nextQuestion() {
  current++;
  loadQuestion();
}

document.getElementById('next-btn').onclick = nextQuestion;

loadQuestion();

