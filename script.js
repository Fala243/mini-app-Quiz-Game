/* =========================================================
   GENERAL KNOWLEDGE CHALLENGE - SCRIPT
   Step 3: Question bank and random question selection.
   Step 4: Player registration, quiz navigation, answer
           checking, scoring, results, and Play Again.
   Step 5: 15-second countdown timer for each question.
   ========================================================= */


/* ---------------------------------------------------------
   1. SETTINGS
   --------------------------------------------------------- */

// The five quiz categories (used to pick a balanced set of questions)
const CATEGORIES = ["Geography", "History", "Science", "Sports", "General Knowledge"];

// How many questions to pick from each category (2 x 5 = 10 questions)
const QUESTIONS_PER_CATEGORY = 2;


/* ---------------------------------------------------------
   2. QUESTION BANK
   50 questions: 10 per category.

   Each question is an object with:
     id       - a unique number
     category - one of the CATEGORIES above
     question - the question text
     choices  - an array of exactly four answer options
     answer   - the correct answer (must match one of the choices exactly)
   --------------------------------------------------------- */
const questions = [
  // ===== GEOGRAPHY (IDs 1-10) =====
  {
    id: 1,
    category: "Geography",
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    id: 2,
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    id: 3,
    category: "Geography",
    question: "What is the longest river in Africa?",
    choices: ["Nile", "Congo", "Niger", "Zambezi"],
    answer: "Nile"
  },
  {
    id: 4,
    category: "Geography",
    question: "On which continent is Egypt located?",
    choices: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa"
  },
  {
    id: 5,
    category: "Geography",
    question: "Which country has the largest land area in the world?",
    choices: ["Canada", "China", "United States", "Russia"],
    answer: "Russia"
  },
  {
    id: 6,
    category: "Geography",
    question: "Mount Everest sits on the border between Nepal and which other country?",
    choices: ["India", "China", "Bhutan", "Pakistan"],
    answer: "China"
  },
  {
    id: 7,
    category: "Geography",
    question: "What is the capital city of Canada?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa"
  },
  {
    id: 8,
    category: "Geography",
    question: "What is the largest hot desert in the world?",
    choices: ["Gobi Desert", "Sahara Desert", "Kalahari Desert", "Arabian Desert"],
    answer: "Sahara Desert"
  },
  {
    id: 9,
    category: "Geography",
    question: "Which country is known as the \"Land of the Rising Sun\"?",
    choices: ["China", "Thailand", "Japan", "South Korea"],
    answer: "Japan"
  },
  {
    id: 10,
    category: "Geography",
    question: "Which river flows through the city of Paris?",
    choices: ["Thames", "Seine", "Danube", "Rhine"],
    answer: "Seine"
  },

  // ===== HISTORY (IDs 11-20) =====
  {
    id: 11,
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
    answer: "George Washington"
  },
  {
    id: 12,
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1918", "1939", "1945", "1950"],
    answer: "1945"
  },
  {
    id: 13,
    category: "History",
    question: "Which famous ship sank in 1912 after hitting an iceberg?",
    choices: ["Titanic", "Lusitania", "Britannic", "Mayflower"],
    answer: "Titanic"
  },
  {
    id: 14,
    category: "History",
    question: "Who was the first person to walk on the Moon?",
    choices: ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins", "Neil Armstrong"],
    answer: "Neil Armstrong"
  },
  {
    id: 15,
    category: "History",
    question: "Which ancient civilization built the Great Pyramids of Giza?",
    choices: ["The Romans", "The Egyptians", "The Greeks", "The Maya"],
    answer: "The Egyptians"
  },
  {
    id: 16,
    category: "History",
    question: "In which year did the Berlin Wall fall?",
    choices: ["1961", "1975", "1989", "1991"],
    answer: "1989"
  },
  {
    id: 17,
    category: "History",
    question: "Who was the primary author of the U.S. Declaration of Independence?",
    choices: ["Benjamin Franklin", "Thomas Jefferson", "George Washington", "James Madison"],
    answer: "Thomas Jefferson"
  },
  {
    id: 18,
    category: "History",
    question: "Which ancient empire built the Colosseum?",
    choices: ["The Roman Empire", "The Ottoman Empire", "The Persian Empire", "The Byzantine Empire"],
    answer: "The Roman Empire"
  },
  {
    id: 19,
    category: "History",
    question: "Who was the first woman to win a Nobel Prize?",
    choices: ["Florence Nightingale", "Marie Curie", "Mother Teresa", "Rosalind Franklin"],
    answer: "Marie Curie"
  },
  {
    id: 20,
    category: "History",
    question: "In which year did Christopher Columbus first reach the Americas?",
    choices: ["1492", "1520", "1607", "1776"],
    answer: "1492"
  },

  // ===== SCIENCE (IDs 21-30) =====
  {
    id: 21,
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gd", "Au", "Ag"],
    answer: "Au"
  },
  {
    id: 22,
    category: "Science",
    question: "Which planet is known as the \"Red Planet\"?",
    choices: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars"
  },
  {
    id: 23,
    category: "Science",
    question: "Which gas do plants absorb from the air to carry out photosynthesis?",
    choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    id: 24,
    category: "Science",
    question: "At sea level, at what temperature does water boil?",
    choices: ["90°C", "100°C", "110°C", "212°C"],
    answer: "100°C"
  },
  {
    id: 25,
    category: "Science",
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Quartz", "Diamond"],
    answer: "Diamond"
  },
  {
    id: 26,
    category: "Science",
    question: "How many bones are in the adult human body?",
    choices: ["186", "206", "226", "306"],
    answer: "206"
  },
  {
    id: 27,
    category: "Science",
    question: "What is the largest planet in our solar system?",
    choices: ["Saturn", "Earth", "Neptune", "Jupiter"],
    answer: "Jupiter"
  },
  {
    id: 28,
    category: "Science",
    question: "Which part of the cell is known as the \"powerhouse of the cell\"?",
    choices: ["Nucleus", "Mitochondria", "Ribosome", "Cell membrane"],
    answer: "Mitochondria"
  },
  {
    id: 29,
    category: "Science",
    question: "What is the chemical formula for water?",
    choices: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O"
  },
  {
    id: 30,
    category: "Science",
    question: "Which force pulls objects toward the center of the Earth?",
    choices: ["Magnetism", "Friction", "Gravity", "Electricity"],
    answer: "Gravity"
  },

  // ===== SPORTS (IDs 31-40) =====
  {
    id: 31,
    category: "Sports",
    question: "How many players does each soccer team have on the field at one time?",
    choices: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    id: 32,
    category: "Sports",
    question: "Which country won the first FIFA World Cup in 1930?",
    choices: ["Brazil", "Uruguay", "Italy", "Argentina"],
    answer: "Uruguay"
  },
  {
    id: 33,
    category: "Sports",
    question: "In which sport would you perform a slam dunk?",
    choices: ["Volleyball", "Tennis", "Basketball", "Baseball"],
    answer: "Basketball"
  },
  {
    id: 34,
    category: "Sports",
    question: "How many rings are on the Olympic flag?",
    choices: ["4", "5", "6", "7"],
    answer: "5"
  },
  {
    id: 35,
    category: "Sports",
    question: "Which Grand Slam tennis tournament is played on grass courts?",
    choices: ["US Open", "French Open", "Australian Open", "Wimbledon"],
    answer: "Wimbledon"
  },
  {
    id: 36,
    category: "Sports",
    question: "In golf, what is the term for finishing a hole one stroke under par?",
    choices: ["Eagle", "Birdie", "Bogey", "Albatross"],
    answer: "Birdie"
  },
  {
    id: 37,
    category: "Sports",
    question: "How many points is a touchdown worth in American football?",
    choices: ["3", "6", "7", "2"],
    answer: "6"
  },
  {
    id: 38,
    category: "Sports",
    question: "Which country hosted the 2016 Summer Olympics?",
    choices: ["China", "United Kingdom", "Brazil", "Japan"],
    answer: "Brazil"
  },
  {
    id: 39,
    category: "Sports",
    question: "What is the official distance of a marathon?",
    choices: ["40 km", "42.195 km", "45 km", "50 km"],
    answer: "42.195 km"
  },
  {
    id: 40,
    category: "Sports",
    question: "Usain Bolt became world-famous in which sport?",
    choices: ["Swimming", "Cycling", "Athletics (sprinting)", "Boxing"],
    answer: "Athletics (sprinting)"
  },

  // ===== GENERAL KNOWLEDGE (IDs 41-50) =====
  {
    id: 41,
    category: "General Knowledge",
    question: "How many days are in a leap year?",
    choices: ["364", "365", "366", "367"],
    answer: "366"
  },
  {
    id: 42,
    category: "General Knowledge",
    question: "How many sides does a hexagon have?",
    choices: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    id: 43,
    category: "General Knowledge",
    question: "What is the largest mammal in the world?",
    choices: ["African elephant", "Blue whale", "Giraffe", "Hippopotamus"],
    answer: "Blue whale"
  },
  {
    id: 44,
    category: "General Knowledge",
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    id: 45,
    category: "General Knowledge",
    question: "What is the main language spoken in Brazil?",
    choices: ["Spanish", "Portuguese", "French", "English"],
    answer: "Portuguese"
  },
  {
    id: 46,
    category: "General Knowledge",
    question: "What is the currency of the United Kingdom?",
    choices: ["Euro", "Dollar", "Pound sterling", "Franc"],
    answer: "Pound sterling"
  },
  {
    id: 47,
    category: "General Knowledge",
    question: "Who wrote the play \"Romeo and Juliet\"?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    id: 48,
    category: "General Knowledge",
    question: "Which musical instrument usually has 88 keys?",
    choices: ["Guitar", "Violin", "Piano", "Flute"],
    answer: "Piano"
  },
  {
    id: 49,
    category: "General Knowledge",
    question: "Which animal is often called the \"King of the Jungle\"?",
    choices: ["Tiger", "Elephant", "Gorilla", "Lion"],
    answer: "Lion"
  },
  {
    id: 50,
    category: "General Knowledge",
    question: "What is the tallest animal in the world?",
    choices: ["Elephant", "Giraffe", "Ostrich", "Camel"],
    answer: "Giraffe"
  }
];


/* ---------------------------------------------------------
   3. HELPER: SHUFFLE AN ARRAY
   Uses the Fisher-Yates shuffle, a fair way to put items in a
   random order. It returns a NEW array, so the original array
   is never changed.
   --------------------------------------------------------- */
function shuffleArray(array) {
  // Make a copy so we don't modify the original array
  const shuffled = [...array];

  // Walk backwards through the array, swapping each item
  // with a randomly chosen item at or before it
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}


/* ---------------------------------------------------------
   4. SELECT 10 RANDOM QUESTIONS
   Picks 2 unique questions from each of the 5 categories,
   then shuffles them so the categories are mixed together.
   Returns an array of 10 question objects.
   --------------------------------------------------------- */
function selectRandomQuestions() {
  let selected = [];

  // Go through each category one at a time
  CATEGORIES.forEach(function (category) {
    // 1. Get only the questions that belong to this category
    const categoryQuestions = questions.filter(function (q) {
      return q.category === category;
    });

    // 2. Shuffle them and take the first 2.
    //    Because each question appears only once in the shuffled
    //    list, the picked questions can never repeat.
    const picked = shuffleArray(categoryQuestions).slice(0, QUESTIONS_PER_CATEGORY);

    // 3. Add the picked questions to our selection
    selected = selected.concat(picked);
  });

  // Shuffle the final 10 so the quiz doesn't go category by category
  return shuffleArray(selected);
}


/* ---------------------------------------------------------
   5. GAME SETTINGS AND STATE
   "State" means the information the game needs to remember
   while it is running. These variables change as you play.
   --------------------------------------------------------- */
const POINTS_PER_CORRECT = 10;   // points for each correct answer
const PASS_PERCENTAGE = 70;      // percentage needed to pass
const TIME_PER_QUESTION = 15;    // seconds allowed for each question
const WARNING_TIME = 5;          // timer turns red at this many seconds

let playerName = "";             // the name typed on the registration screen
let selectedQuestions = [];      // the 10 questions for this round
let currentQuestionIndex = 0;    // which question we are on (0 = first)
let score = 0;                   // the player's points
let incorrectAnswers = [];       // details of every question answered wrong
let hasAnswered = false;         // true once the current question is answered
let timeLeft = TIME_PER_QUESTION;// seconds remaining on the current question
let timerId = null;              // ID returned by setInterval (null = no timer running)


/* ---------------------------------------------------------
   6. PAGE ELEMENTS
   We look up each HTML element once (by its ID) and save it
   in a variable so we can use it throughout the code.
   --------------------------------------------------------- */
// Screens
const registrationScreen = document.getElementById("registration-screen");
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

// Registration screen
const registrationForm = document.getElementById("registration-form");
const playerNameInput = document.getElementById("player-name-input");
const playerNameError = document.getElementById("player-name-error");

// Welcome screen
const welcomePlayerName = document.getElementById("welcome-player-name");
const startQuizBtn = document.getElementById("start-quiz-btn");

// Quiz screen
const currentQuestionNumberEl = document.getElementById("current-question-number");
const totalQuestionsEl = document.getElementById("total-questions");
const currentScoreEl = document.getElementById("current-score");
const timerEl = document.getElementById("timer");
const quizProgress = document.getElementById("quiz-progress");
const questionCategoryEl = document.getElementById("question-category");
const questionTextEl = document.getElementById("question-text");
const answerButtons = document.querySelectorAll(".answer-btn"); // all 4 answer buttons
const answerFeedback = document.getElementById("answer-feedback");
const nextQuestionBtn = document.getElementById("next-question-btn");

// Results screen
const resultsPlayerName = document.getElementById("results-player-name");
const finalScoreEl = document.getElementById("final-score");
const finalTotalEl = document.getElementById("final-total");
const finalPercentageEl = document.getElementById("final-percentage");
const performanceMessage = document.getElementById("performance-message");
const reviewList = document.getElementById("review-list");
const noMistakesMessage = document.getElementById("no-mistakes-message");
const reviewItemTemplate = document.getElementById("review-item-template");
const playAgainBtn = document.getElementById("play-again-btn");


/* ---------------------------------------------------------
   7. SHOW ONE SCREEN AT A TIME
   Hides every screen except the one passed in.
   --------------------------------------------------------- */
function showScreen(screenToShow) {
  const allScreens = [registrationScreen, welcomeScreen, quizScreen, resultsScreen];

  allScreens.forEach(function (screen) {
    // hidden = true for every screen except the one we want
    screen.hidden = screen !== screenToShow;
  });

  // Scroll back to the top so the new screen is fully visible
  window.scrollTo(0, 0);
}


/* ---------------------------------------------------------
   8. PLAYER REGISTRATION
   Runs when the registration form is submitted (clicking
   "Continue" or pressing Enter in the name field).
   --------------------------------------------------------- */
function handleRegistration(event) {
  // Stop the form from reloading the page (the browser's default)
  event.preventDefault();

  // trim() removes spaces from the start and end of the name
  const enteredName = playerNameInput.value.trim();

  // If the name is empty, show the error and stop here
  if (enteredName === "") {
    playerNameError.hidden = false;
    playerNameInput.setAttribute("aria-invalid", "true");
    playerNameInput.focus();
    return;
  }

  // The name is valid: hide any error and save the name
  clearNameError();
  playerName = enteredName;

  // Show the personalized welcome screen
  welcomePlayerName.textContent = playerName;
  showScreen(welcomeScreen);
  startQuizBtn.focus();
}

// Hides the "please enter your name" error message
function clearNameError() {
  playerNameError.hidden = true;
  playerNameInput.removeAttribute("aria-invalid");
}


/* ---------------------------------------------------------
   9. START (OR RESTART) THE QUIZ
   Picks 10 new questions and resets everything to zero.
   --------------------------------------------------------- */
function startQuiz() {
  // Make sure no timer from a previous game is still running
  stopTimer();

  // Reset the game state
  selectedQuestions = selectRandomQuestions();
  currentQuestionIndex = 0;
  score = 0;
  incorrectAnswers = [];

  // Reset what the player sees
  currentScoreEl.textContent = score;
  totalQuestionsEl.textContent = selectedQuestions.length;
  quizProgress.max = selectedQuestions.length;

  showScreen(quizScreen);
  showQuestion();

  // The Start Quiz / Play Again button just disappeared, so move
  // focus to the first question instead of losing it
  questionTextEl.focus();
}


/* ---------------------------------------------------------
   10. DISPLAY THE CURRENT QUESTION
   Fills in the question text, category, and the four answer
   buttons, and resets the buttons from the previous question.
   --------------------------------------------------------- */
function showQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  // A new question has not been answered yet
  hasAnswered = false;

  // Question number (+1 because the index starts at 0)
  currentQuestionNumberEl.textContent = currentQuestionIndex + 1;
  questionCategoryEl.textContent = currentQuestion.category;
  questionTextEl.textContent = currentQuestion.question;

  // Put one choice on each answer button and reset its style
  answerButtons.forEach(function (button, index) {
    button.textContent = currentQuestion.choices[index];
    button.disabled = false;
    button.classList.remove("correct", "incorrect");
  });

  // Clear the feedback from the previous question
  answerFeedback.textContent = "";
  answerFeedback.classList.remove("correct", "incorrect");

  // Hide "Next Question" until the player answers
  nextQuestionBtn.hidden = true;

  // Progress shows how many questions are finished so far
  updateProgress(currentQuestionIndex);

  // Start a fresh 15-second countdown for this question
  startTimer();
}


/* ---------------------------------------------------------
   11a. COUNTDOWN TIMER
   How it works:
   - setInterval() runs a function again and again, here once
     every 1000 milliseconds (1 second). It returns an ID number.
   - We save that ID in "timerId" so we can stop the timer later
     with clearInterval(timerId).
   - stopTimer() is always called before starting a new timer,
     so two timers can never run at the same time.
   --------------------------------------------------------- */
function startTimer() {
  // Stop any timer that might still be running
  stopTimer();

  // Reset to the full time and show it
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();

  // Every second: take one second off and check if time is up
  timerId = setInterval(function () {
    timeLeft = timeLeft - 1;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      handleTimeUp();
    }
  }, 1000);
}

// Stops the countdown (safe to call even if no timer is running)
function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

// Shows the seconds left and sets the warning colors
function updateTimerDisplay() {
  timerEl.textContent = timeLeft;

  // Remove old warning styles first, then add the right one
  timerEl.classList.remove("timer-warning", "timer-expired");

  if (timeLeft <= 0) {
    timerEl.classList.add("timer-expired");     // red, no pulse
  } else if (timeLeft <= WARNING_TIME) {
    timerEl.classList.add("timer-warning");     // red, pulsing
  }
}


/* ---------------------------------------------------------
   11b. TIME'S UP
   Runs when the countdown reaches zero before an answer.
   The question counts as incorrect and earns zero points.
   --------------------------------------------------------- */
function handleTimeUp() {
  // If the player already answered, there is nothing to do
  if (hasAnswered) {
    return;
  }
  hasAnswered = true;   // blocks any late clicks
  stopTimer();

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  answerFeedback.textContent = "Time's up! The correct answer is: " + currentQuestion.answer;
  answerFeedback.classList.add("incorrect");

  // Save it for the review on the results screen
  incorrectAnswers.push({
    question: currentQuestion.question,
    yourAnswer: "No answer (time ran out)",
    correctAnswer: currentQuestion.answer
  });

  finishQuestion();
}


/* ---------------------------------------------------------
   11c. FINISH THE CURRENT QUESTION
   Shared steps after an answer OR a time-out: lock the
   buttons, show the correct answer in green, update the
   progress bar, and show the Next Question button.
   --------------------------------------------------------- */
function finishQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  // Lock all buttons and highlight the correct answer in green
  answerButtons.forEach(function (button) {
    button.disabled = true;
    const buttonAnswer = currentQuestion.choices[Number(button.dataset.index)];
    if (buttonAnswer === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  // This question is now complete
  updateProgress(currentQuestionIndex + 1);

  // On the last question, the button leads to the results instead
  const isLastQuestion = currentQuestionIndex === selectedQuestions.length - 1;
  if (isLastQuestion) {
    nextQuestionBtn.textContent = "See Results";
  } else {
    nextQuestionBtn.textContent = "Next Question";
  }

  nextQuestionBtn.hidden = false;
  nextQuestionBtn.focus(); // keyboard users can press Enter to continue
}


/* ---------------------------------------------------------
   11. UPDATE THE PROGRESS BAR
   --------------------------------------------------------- */
function updateProgress(questionsCompleted) {
  quizProgress.value = questionsCompleted;
  // Text fallback for browsers/screen readers
  quizProgress.textContent = questionsCompleted + " of " + selectedQuestions.length;
}


/* ---------------------------------------------------------
   12. CHECK THE PLAYER'S ANSWER
   Runs when an answer button is clicked.
   --------------------------------------------------------- */
function checkAnswer(event) {
  // Prevent multiple submissions, and block clicks after time runs out
  if (hasAnswered) {
    return;
  }
  hasAnswered = true;

  // The player answered in time: stop the countdown immediately
  stopTimer();

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const clickedButton = event.currentTarget;

  // data-index tells us which choice (0-3) the button shows
  const chosenAnswer = currentQuestion.choices[Number(clickedButton.dataset.index)];

  if (chosenAnswer === currentQuestion.answer) {
    // CORRECT: add points and show a success message
    score = score + POINTS_PER_CORRECT;
    currentScoreEl.textContent = score;

    answerFeedback.textContent = "Correct! +" + POINTS_PER_CORRECT + " points";
    answerFeedback.classList.add("correct");
  } else {
    // INCORRECT: mark the chosen button red and remember the mistake
    clickedButton.classList.add("incorrect");

    answerFeedback.textContent = "Incorrect. The correct answer is: " + currentQuestion.answer;
    answerFeedback.classList.add("incorrect");

    incorrectAnswers.push({
      question: currentQuestion.question,
      yourAnswer: chosenAnswer,
      correctAnswer: currentQuestion.answer
    });
  }

  // Lock the buttons, show the correct answer, and show "Next Question"
  finishQuestion();
}


/* ---------------------------------------------------------
   13. GO TO THE NEXT QUESTION (OR THE RESULTS)
   --------------------------------------------------------- */
function goToNextQuestion() {
  currentQuestionIndex = currentQuestionIndex + 1;

  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
    // Move focus to the new question so screen readers read it aloud.
    // Keyboard users press Tab once to reach the first answer.
    questionTextEl.focus();
  } else {
    showResults();
  }
}


/* ---------------------------------------------------------
   14. SHOW THE RESULTS
   Calculates the percentage, picks the right message, and
   builds the review of incorrect answers.
   --------------------------------------------------------- */
function showResults() {
  // The quiz is over, so make sure the timer is not still running
  stopTimer();

  const maxScore = selectedQuestions.length * POINTS_PER_CORRECT;
  const percentage = Math.round((score / maxScore) * 100);

  // Fill in the name, score, and percentage
  resultsPlayerName.textContent = playerName;
  finalScoreEl.textContent = score;
  finalTotalEl.textContent = maxScore;
  finalPercentageEl.textContent = percentage;

  // Remove any message color from a previous game
  performanceMessage.classList.remove("message-master", "message-pass", "message-fail");

  // Choose the message. The message text is stored in the HTML
  // (data-msg-* attributes) and {name} is replaced with the player's name.
  let message;
  if (percentage === 100) {
    message = performanceMessage.dataset.msgMaster;
    performanceMessage.classList.add("message-master");
  } else if (percentage >= PASS_PERCENTAGE) {
    message = performanceMessage.dataset.msgPass;
    performanceMessage.classList.add("message-pass");
  } else {
    message = performanceMessage.dataset.msgFail;
    performanceMessage.classList.add("message-fail");
  }
  performanceMessage.textContent = message.replace("{name}", playerName);

  showReview();
  showScreen(resultsScreen);
  playAgainBtn.focus();
}


/* ---------------------------------------------------------
   15. REVIEW OF INCORRECT ANSWERS
   Builds one list item per mistake using the <template>
   from index.html.
   --------------------------------------------------------- */
function showReview() {
  // Remove items left over from a previous game
  reviewList.innerHTML = "";

  // No mistakes: show the "Perfect!" message instead of the list
  if (incorrectAnswers.length === 0) {
    reviewList.hidden = true;
    noMistakesMessage.hidden = false;
    return;
  }

  reviewList.hidden = false;
  noMistakesMessage.hidden = true;

  incorrectAnswers.forEach(function (mistake) {
    // Copy the template's content to create a new list item
    const reviewItem = reviewItemTemplate.content.cloneNode(true);

    reviewItem.querySelector(".review-question").textContent = mistake.question;
    reviewItem.querySelector(".review-your-answer-text").textContent = mistake.yourAnswer;
    reviewItem.querySelector(".review-correct-answer-text").textContent = mistake.correctAnswer;

    reviewList.appendChild(reviewItem);
  });
}


/* ---------------------------------------------------------
   16. EVENT LISTENERS
   Connect each button/form to the function it should run.
   --------------------------------------------------------- */
registrationForm.addEventListener("submit", handleRegistration);

// Hide the name error as soon as the player starts typing
playerNameInput.addEventListener("input", clearNameError);

startQuizBtn.addEventListener("click", startQuiz);

answerButtons.forEach(function (button) {
  button.addEventListener("click", checkAnswer);
});

nextQuestionBtn.addEventListener("click", goToNextQuestion);

// Play Again keeps the same player name and starts a fresh quiz
playAgainBtn.addEventListener("click", startQuiz);

// Ignore a held-down Enter key.
// Pressing Enter on a button moves focus to the next button (for example
// answer -> "Next Question"). If Enter is held a moment too long, the
// keyboard repeats it and would instantly click that next button too,
// skipping the feedback or the results. event.repeat is true for those
// automatic repeats, so we cancel them.
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && event.repeat) {
    event.preventDefault();
  }
});


/* =========================================================
   17. KNOWLEDGE EXPLORER - POKEMON EDITION
   A separate learning tool that looks up live Pokémon data
   from the free PokeAPI. It does not touch any quiz variables,
   so players can use it at any time without affecting the quiz.
   ========================================================= */

// Base address of the API. The Pokémon name is added to the end.
const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";

// Elements for the explorer section
const pokemonInput = document.getElementById("pokemon-input");
const pokemonSearchBtn = document.getElementById("pokemon-search-btn");
const pokemonStatus = document.getElementById("pokemon-status");
const pokemonResult = document.getElementById("pokemon-result");

// true while a request is running. Used to block duplicate searches.
let isSearching = false;


/* ---------------------------------------------------------
   17a. SMALL HELPERS
   --------------------------------------------------------- */

// Show a message under the search box.
// isError = true makes the message red.
function setPokemonStatus(message, isError) {
  pokemonStatus.textContent = message;
  pokemonStatus.classList.toggle("is-error", Boolean(isError));
}

// "bulbasaur" -> "Bulbasaur", "mr-mime" -> "Mr Mime"
function capitalizeName(name) {
  return name
    .split("-")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// Find one base stat (e.g. "hp") in the API's stats array.
// Each item looks like: { base_stat: 45, stat: { name: "hp" } }
function getBaseStat(stats, statName) {
  const found = stats.find(function (item) {
    return item.stat.name === statName;
  });
  return found ? found.base_stat : "N/A";
}

// Turn on/off the "loading" state of the controls
function setLoading(loading) {
  isSearching = loading;
  pokemonSearchBtn.disabled = loading;
  pokemonSearchBtn.textContent = loading ? "Searching..." : "Search";
  pokemonResult.setAttribute("aria-busy", String(loading));
}


/* ---------------------------------------------------------
   17b. BUILD THE POKEMON CARD (DOM UPDATE)
   We create elements with createElement and fill them with
   textContent. textContent never runs HTML, so data from the
   internet is always shown safely as plain text.
   --------------------------------------------------------- */
function displayPokemon(data) {
  const card = document.createElement("article");
  card.className = "pokemon-card";

  // Name (capitalized)
  const nameEl = document.createElement("h3");
  nameEl.className = "pokemon-name";
  nameEl.textContent = capitalizeName(data.name);
  card.appendChild(nameEl);

  // Sprite image. Some Pokémon have no image, so check first.
  const spriteUrl = data.sprites && data.sprites.front_default;
  if (spriteUrl) {
    const img = document.createElement("img");
    img.className = "pokemon-sprite";
    img.src = spriteUrl;
    img.alt = "Sprite of " + capitalizeName(data.name);
    img.width = 160;
    img.height = 160;
    card.appendChild(img);
  } else {
    const noImg = document.createElement("p");
    noImg.className = "pokemon-no-sprite";
    noImg.textContent = "No image available.";
    card.appendChild(noImg);
  }

  // Types. data.types looks like: [{ type: { name: "grass" } }, ...]
  const typesList = document.createElement("ul");
  typesList.className = "pokemon-types";
  typesList.setAttribute("aria-label", "Types");
  data.types.forEach(function (item) {
    const li = document.createElement("li");
    li.className = "pokemon-type";
    li.textContent = item.type.name;
    typesList.appendChild(li);
  });
  card.appendChild(typesList);

  // Base stats: HP, Attack, Defense.
  // A <dl> (description list) pairs each label with its value.
  const statsList = document.createElement("dl");
  statsList.className = "pokemon-stats";
  const statsToShow = [
    { label: "HP", key: "hp" },
    { label: "Attack", key: "attack" },
    { label: "Defense", key: "defense" }
  ];
  statsToShow.forEach(function (stat) {
    const wrapper = document.createElement("div");
    wrapper.className = "pokemon-stat";

    const dt = document.createElement("dt");
    dt.textContent = stat.label;

    const dd = document.createElement("dd");
    dd.textContent = getBaseStat(data.stats, stat.key);

    wrapper.appendChild(dt);
    wrapper.appendChild(dd);
    statsList.appendChild(wrapper);
  });
  card.appendChild(statsList);

  // Add the finished card to the page (no page reload needed)
  pokemonResult.appendChild(card);
}


/* ---------------------------------------------------------
   17c. SEARCH (API REQUEST)
   "async" lets us use "await", which pauses this function
   until the network answers, without freezing the page.
   --------------------------------------------------------- */
async function searchPokemon() {
  // Block duplicate requests while one is already running
  if (isSearching) {
    return;
  }

  // Clean up the input: remove spaces at the ends, make it lowercase,
  // and turn inner spaces into hyphens (the API uses "mr-mime").
  const name = pokemonInput.value.trim().toLowerCase().replace(/\s+/g, "-");

  // Clear any previous card before showing a new result
  pokemonResult.innerHTML = "";

  // Validate: do not send an empty search
  if (name === "") {
    setPokemonStatus("Please enter a Pokémon name to search.", true);
    pokemonInput.setAttribute("aria-invalid", "true");
    pokemonInput.focus();
    return;
  }
  pokemonInput.removeAttribute("aria-invalid");

  // Loading state
  setLoading(true);
  setPokemonStatus("Searching Pokémon...", false);

  try {
    // fetch() sends the request. encodeURIComponent keeps odd characters safe in the URL.
    const response = await fetch(POKEAPI_URL + encodeURIComponent(name));

    // 404 means the API has no Pokémon with that name
    if (response.status === 404) {
      setPokemonStatus("Pokémon not found — check the spelling.", true);
      return;
    }

    // Any other non-OK status (e.g. 500) is a problem on the server side
    if (!response.ok) {
      setPokemonStatus("The Pokémon server had a problem (error " + response.status + "). Please try again later.", true);
      return;
    }

    // JSON parsing: the response body is text in JSON format.
    // response.json() turns it into a normal JavaScript object.
    const data = await response.json();

    setPokemonStatus("", false);
    displayPokemon(data);
  } catch (error) {
    // fetch() throws (instead of returning a response) when there is
    // no connection at all, e.g. Wi-Fi is off or the site is blocked.
    console.error("Pokémon search failed:", error);
    setPokemonStatus("Could not connect to the Pokémon database. Check your internet connection and try again.", true);
  } finally {
    // "finally" always runs, so the button is re-enabled even after an error
    setLoading(false);
  }
}


/* ---------------------------------------------------------
   17d. EXPLORER EVENT LISTENERS
   --------------------------------------------------------- */
pokemonSearchBtn.addEventListener("click", searchPokemon);

// Pressing Enter in the text box also searches
pokemonInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchPokemon();
  }
});

// Remove the red "empty search" border once the player types again
pokemonInput.addEventListener("input", function () {
  pokemonInput.removeAttribute("aria-invalid");
});
