const character = document.getElementById('character');
const speech = document.getElementById('speech');
const languageSelect = document.getElementById('language-select');
const additionQuestion = document.getElementById('addition-question');
const additionAnswers = document.getElementById('addition-answers');
const additionStatus = document.getElementById('addition-status');
const subtractionQuestion = document.getElementById('subtraction-question');
const subtractionAnswers = document.getElementById('subtraction-answers');
const subtractionStatus = document.getElementById('subtraction-status');
const countStarsQuestion = document.getElementById('count-stars-question');
const countStarsAnswers = document.getElementById('count-stars-answers');
const countStarsStatus = document.getElementById('count-stars-status');
const colorMatchQuestion = document.getElementById('color-match-question');
const colorMatchAnswers = document.getElementById('color-match-answers');
const colorMatchStatus = document.getElementById('color-match-status');

const translations = {
  en: {
    title: 'Giggle Garden',
    badge: '🌈 Tiny chaos • Big smiles',
    heading: 'Welcome to Giggle Garden!',
    intro: 'This is a silly little world where bouncy blobs, rainbow giggles, and starry surprises all live together.',
    speech: 'Hi! Tap a button and make me giggle!',
    actionButtons: ['Boop the bouncing blob', 'Tickle the rainbow', 'Launch a silly star'],
    sectionTitle: '🧮 Math Games',
    sectionText: 'Pick a game and solve the silly number puzzles before the giggles zoom away!',
    footer: 'Made for giggles, wiggles, and tiny adventures.',
    actionMessages: {
      bounce: ['Boing! The blob is bouncy now!', 'Pomp! The garden just got extra wiggly!', 'Yippee! The unicorn did a tiny victory dance!'],
      rainbow: ['Achoo! The rainbow sneezed glitter at you!', 'Zoom! Rainbow ribbons are dancing around!', 'Bloop! The sky wore a silly hat!'],
      star: ['Pfft! A star zoomed by like a sleepy rocket!', 'Twinkle! A goofy star just landed in your pocket!', 'Whoosh! The universe made a tiny hiccup!']
    },
    startMessages: {
      addition: 'Addition time! Tap the right answer!',
      subtraction: 'Subtraction time! Tap the right answer!',
      'count-stars': 'Star counting time! Pick the right number!',
      'color-match': 'Color match time! Pick the right color!'
    },
    score: 'Score',
    pressStart: 'Press start to play!',
    countStarsQuestion: (count) => `There are ${count} stars here. How many?`,
    colorPalette: [
      { label: 'Red', emoji: '🟥', value: 'red' },
      { label: 'Green', emoji: '🟩', value: 'green' },
      { label: 'Blue', emoji: '🟦', value: 'blue' },
      { label: 'Yellow', emoji: '🟨', value: 'yellow' }
    ],
    answerFeedback: {
      correct: 'Yay! That is the right answer!',
      wrong: 'Oops! The correct answer was',
      colorCorrect: 'Awesome! You picked the right color!',
      colorWrong: 'Oops! The correct color was',
      next: 'That answer was a wiggle. Try the next one!' 
    },
    sudoku: {
      newPuzzle: 'New puzzle',
      check: 'Check it!',
      status: 'Pick a square and tap a number.',
      pickCell: (row, col) => `You picked row ${row}, column ${col}.`,
      locked: 'That spot is locked in place.',
      empty: 'That square is empty again.',
      placed: (value) => `You placed ${value} in the puzzle.`,
      chooseFirst: 'Pick a square first!',
      solved: 'Hooray! You solved the tiny Sudoku!',
      almost: 'You are matching so far. Keep going!',
      wrong: 'A few numbers are wiggly. Try again!',
      colorGood: 'Green means correct and red means wrong.'
    }
  },
  te: {
    title: 'గిగ్ల్ గార్డెన్',
    badge: '🌈 చిన్న క్రమరాహిత్యం • పెద్ద చిరునవ్వులు',
    heading: 'గిగ్ల్ గార్డెన్కి స్వాగతం!',
    intro: 'ఇది ఒక మంత్రముగ్ధమైన స్థలం, ఇక్కడ కదిలే బంతులు, వర్ణమయ క్షణాలు మరియు నక్షత్రాల మాదిరి హాస్యాలు కలిసి జీవిస్తాయి.',
    speech: 'హాయ్! ఒక బటన్ నొక్కి నన్ను నవ్వించండి!',
    actionButtons: ['కదిలే బంతిని తాకండి', 'వర్ణమయ ఇంద్రధనస్సును తాకండి', 'ముసుగు నక్షత్రాన్ని ప్రారంభించండి'],
    sectionTitle: '🧮 గణిత ఆటలు',
    sectionText: 'ఒక ఆటను ఎంచుకుని, చిరునవ్వులు పులకించే సంఖ్య పజిల్లను పరిష్కరించండి!',
    footer: 'చిరునవ్వులు, కదలికలు మరియు చిన్న సాహసాల కోసం తయారు చేయబడింది.',
    actionMessages: {
      bounce: ['బింగ్! బ్లబ్ ఇప్పుడు మరింత దూకుడు అయ్యింది!', 'పోమ్! తోట మరింత ఉల్లాసంగా మారింది!', 'హాయ్! యూనికోర్న్ ఒక చిన్న విజయం నృత్యం చేసింది!'],
      rainbow: ['అచూ! ఇంద్రధనస్సు నీపై చిలికిన Glitterని వదిలింది!', 'జూమ్! ఇంద్రధనస్సు పట్టు వలె తిరుగుతుంది!', 'బ్లూప్! ఆకాశం ఒక ముసుగు టోపీ వేసుకుంది!'],
      star: ['ప్ఫ్ట్! ఒక నక్షత్రం నిద్రలో ఉన్న రాకెట్ వలె దూసుకెళ్లింది!', 'ట్వింకిల్! ఒక మజాకి నక్షత్రం నీ జేబులో దిగింది!', 'వుహ్! విశ్వం ఒక చిన్న కక్కిరిసింది!']
    },
    startMessages: {
      addition: 'కూడిక సమయం! సరైన సమాధానాన్ని నొక్కండి!',
      subtraction: 'తీసివేత సమయం! సరైన సమాధానాన్ని నొక్కండి!',
      'count-stars': 'నక్షత్రాల లెక్కింపు సమయం! సరైన సంఖ్యను ఎంచుకోండి!',
      'color-match': 'రంగు మేళా సమయం! సరైన రంగును ఎంచుకోండి!'
    },
    score: 'స్కోరు',
    pressStart: 'ఆట ప్రారంభించడానికి నొక్కండి!',
    countStarsQuestion: (count) => `ఇక్కడ ${count} నక్షత్రాలు ఉన్నాయి. ఎన్ని?`,
    colorPalette: [
      { label: 'ఎరుపు', emoji: '🟥', value: 'red' },
      { label: 'ఆకుపచ్చ', emoji: '🟩', value: 'green' },
      { label: 'నీలం', emoji: '🟦', value: 'blue' },
      { label: 'పసుపు', emoji: '🟨', value: 'yellow' }
    ],
    answerFeedback: {
      correct: 'అద్భుతం! సరైన సమాధానం!',
      wrong: 'అయ్యో! సరైన సమాధానం',
      colorCorrect: 'అద్భుతం! మీరు సరైన రంగును ఎంచుకున్నారు!',
      colorWrong: 'అయ్యో! సరైన రంగు',
      next: 'ఆ సమాధానం ఒక కదలిక. మరొకసారి ప్రయత్నించండి!'
    },
    sudoku: {
      newPuzzle: 'కొత్త పజిల్',
      check: 'తనిఖీ చేయండి!',
      status: 'ఒక చతురస్రాన్ని ఎంచుకుని సంఖ్య నొక్కండి.',
      pickCell: (row, col) => `మీరు అడ్డు ${row}, నిలువు ${col}ని ఎంచుకున్నారు.`,
      locked: 'ఆ స్థానం ఇక్కడే లాక్ అయింది.',
      empty: 'ఆ చతురస్రం మళ్లీ ఖాళీ అయింది.',
      placed: (value) => `మీరు పజిల్లో ${value}ను పెట్టారు.`,
      chooseFirst: 'ముందుగా ఒక చతురస్రాన్ని ఎంచుకోండి!',
      solved: 'హుర్రే! మీరు ఈ చిన్న సూదోకును పరిష్కరించారు!',
      almost: 'మీరు ఇప్పటివరకు సరిపోతున్నారు. కొనసాగించండి!',
      wrong: 'కొన్ని సంఖ్యలు కదులుతున్నాయి. మళ్లీ ప్రయత్నించండి!',
      colorGood: 'ఆకుపచ్చ సరైనది, ఎరుపు తప్పు అని సూచిస్తుంది.'
    }
  }
};

const state = { language: 'en' };

const actionMessages = {
  bounce: [],
  rainbow: [],
  star: []
};

const gameStates = {
  addition: { score: 0, current: null },
  subtraction: { score: 0, current: null },
  'count-stars': { score: 0, current: null },
  'color-match': { score: 0, current: null }
};

const sudokuBoard = document.getElementById('sudoku-board');
const sudokuNumberPad = document.getElementById('sudoku-number-pad');
const sudokuStatus = document.getElementById('sudoku-status');
const sudokuNewButton = document.getElementById('sudoku-new');
const sudokuCheckButton = document.getElementById('sudoku-check');

const sudokuSolution = [
  [1, 2, 3, 4],
  [2, 1, 4, 3],
  [3, 4, 1, 2],
  [4, 3, 2, 1]
];

const sudokuPuzzles = [
  [
    [1, 0, 0, 4],
    [0, 1, 4, 0],
    [0, 4, 1, 0],
    [4, 0, 0, 3]
  ],
  [
    [0, 2, 0, 4],
    [2, 0, 4, 0],
    [0, 4, 0, 2],
    [4, 0, 2, 0]
  ],
  [
    [1, 0, 3, 0],
    [0, 2, 0, 4],
    [3, 0, 4, 0],
    [0, 4, 0, 2]
  ]
];

const sudokuState = {
  board: [],
  selectedCell: null,
  fixedCells: new Set(),
  correctCells: new Set(),
  wrongCells: new Set()
};

function setSpeech(text) {
  speech.textContent = text;
}

function updateLanguageUI() {
  const lang = translations[state.language];
  document.title = lang.title;
  document.documentElement.lang = state.language;
  document.querySelector('.badge').textContent = lang.badge;
  document.querySelector('h1').textContent = lang.heading;
  document.querySelector('.intro').textContent = lang.intro;
  speech.textContent = lang.speech;
  document.querySelectorAll('.buttons button').forEach((button, index) => {
    button.textContent = lang.actionButtons[index];
  });
  document.querySelector('.section-head h2').textContent = lang.sectionTitle;
  document.querySelector('.section-head p').textContent = lang.sectionText;
  document.querySelector('.footer').textContent = lang.footer;
  document.querySelector('#sudoku-new').textContent = lang.sudoku.newPuzzle;
  document.querySelector('#sudoku-check').textContent = lang.sudoku.check;
  sudokuStatus.textContent = lang.sudoku.status;
  document.querySelectorAll('.game-btn').forEach((button) => {
    const game = button.dataset.game;
    if (game === 'addition') {
      button.textContent = state.language === 'en' ? 'Start adding' : 'కూడిక ప్రారంభించండి';
    }
    if (game === 'subtraction') {
      button.textContent = state.language === 'en' ? 'Start subtracting' : 'తీసివేత ప్రారంభించండి';
    }
    if (game === 'count-stars') {
      button.textContent = state.language === 'en' ? 'Start counting' : 'లెక్కింపు ప్రారంభించండి';
    }
    if (game === 'color-match') {
      button.textContent = state.language === 'en' ? 'Start matching' : 'రంగు మేళా ప్రారంభించండి';
    }
  });
  document.querySelectorAll('.game-card h3').forEach((title, index) => {
    const gameTitles = [
      state.language === 'en' ? 'Addition Adventure' : 'కూడిక ప్రయాణం',
      state.language === 'en' ? 'Subtraction Surprise' : 'తీసివేత ఆశ్చర్యం',
      state.language === 'en' ? 'Star Count' : 'నక్షత్రాల లెక్కింపు',
      state.language === 'en' ? 'Color Match' : 'రంగు-మేళా',
      state.language === 'en' ? 'Mini Sudoku' : 'మినీ సూదోకు'
    ];
    title.textContent = gameTitles[index];
  });
  document.querySelectorAll('.game-card p').forEach((para, index) => {
    const descriptions = [
      state.language === 'en' ? 'Choose the correct sum and collect shiny stars.' : 'సరైన మొత్తం ఎంచుకుని మెరిసే నక్షత్రాలను సేకరించండి.',
      state.language === 'en' ? 'Find the missing number before the monkey steals your answer.' : 'జంతువు నీ సమాధానాన్ని దొంగిలించే ముందు తప్పిపోయిన సంఖ్యను కనుగొనండి.',
      state.language === 'en' ? 'Look at the stars and choose the correct number.' : 'నక్షత్రాల సంఖ్యను చూచి సరైన సంఖ్యను ఎంచుకోండి.',
      state.language === 'en' ? 'Pick the color named in the silly clue.' : 'పేరు చెప్పిన రంగును ఎంచుకుని మెరిసే పూలాంటి బటన్లను నొక్కండి.',
      state.language === 'en' ? 'Fill the tiny grid so every row and box gets 1, 2, 3, and 4 once.' : 'చిన్న గ్రిడ్లో ప్రతి అడ్డు వరుసకు 1, 2, 3 మరియు 4 ఒక్కొక్కసారి వచ్చేటట్లు నింపండి.'
    ];
    if (index < descriptions.length) {
      para.textContent = descriptions[index];
    }
  });
}

function makeSparkles(count = 8) {
  for (let i = 0; i < count; i += 1) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.textContent = ['✨', '🌟', '💫', '🦄'][i % 4];
    sparkle.style.left = `${40 + Math.random() * 20}%`;
    sparkle.style.top = `${40 + Math.random() * 20}%`;
    document.querySelector('.character-wrap').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 900);
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildChoices(answer, maxValue = 10) {
  const choices = new Set([answer]);
  while (choices.size < 6) {
    const silly = answer + Math.floor(Math.random() * 7) - 3;
    if (silly >= 0 && silly <= maxValue) {
      choices.add(silly);
    }
  }
  return shuffle([...choices]);
}

function makeAdditionQuestion() {
  const left = Math.floor(Math.random() * 8) + 1;
  const right = Math.floor(Math.random() * 8) + 1;
  const answer = left + right;
  return {
    question: `${left} + ${right} = ?`,
    answer,
    choices: buildChoices(answer)
  };
}

function makeSubtractionQuestion() {
  const left = Math.floor(Math.random() * 10) + 2;
  const right = Math.floor(Math.random() * left) + 1;
  const answer = left - right;
  return {
    question: `${left} - ${right} = ?`,
    answer,
    choices: buildChoices(answer)
  };
}

function makeCountStarsQuestion() {
  const count = Math.floor(Math.random() * 5) + 1;
  return {
    question: translations[state.language].countStarsQuestion(count),
    answer: count,
    choices: buildChoices(count, 6)
  };
}

function makeColorMatchQuestion() {
  const palette = translations[state.language].colorPalette;
  const target = palette[Math.floor(Math.random() * palette.length)];
  return {
    question: `${target.emoji} ${target.label} color?`,
    answer: target.value,
    answerLabel: target.label,
    choices: shuffle(palette).map((item) => ({ label: `${item.emoji} ${item.label}`, value: item.value }))
  };
}

function renderQuestion(type) {
  const stateGame = gameStates[type];
  const question = type === 'addition'
    ? makeAdditionQuestion()
    : type === 'subtraction'
      ? makeSubtractionQuestion()
      : type === 'count-stars'
        ? makeCountStarsQuestion()
        : makeColorMatchQuestion();
  stateGame.current = question;

  const questionEl = type === 'addition'
    ? additionQuestion
    : type === 'subtraction'
      ? subtractionQuestion
      : type === 'count-stars'
        ? countStarsQuestion
        : colorMatchQuestion;
  const answerEl = type === 'addition'
    ? additionAnswers
    : type === 'subtraction'
      ? subtractionAnswers
      : type === 'count-stars'
        ? countStarsAnswers
        : colorMatchAnswers;
  const statusEl = type === 'addition'
    ? additionStatus
    : type === 'subtraction'
      ? subtractionStatus
      : type === 'count-stars'
        ? countStarsStatus
        : colorMatchStatus;

  questionEl.textContent = question.question;
  answerEl.innerHTML = '';
  question.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = typeof choice === 'object' ? choice.label : choice;
    button.addEventListener('click', () => handleAnswer(type, typeof choice === 'object' ? choice.value : choice));
    answerEl.appendChild(button);
  });
  statusEl.textContent = `${translations[state.language].score}: ${stateGame.score}`;
}

function handleAnswer(type, choice) {
  const currentGame = gameStates[type];
  if (!currentGame.current) {
    return;
  }

  const lang = translations[state.language];
  const isCorrect = choice === currentGame.current.answer;
  const feedback = isCorrect
    ? (type === 'color-match'
      ? lang.answerFeedback.colorCorrect
      : lang.answerFeedback.correct)
    : (type === 'color-match'
      ? `${lang.answerFeedback.colorWrong} ${lang.colorPalette.find((item) => item.value === currentGame.current.answer)?.label || ''}.`
      : `${lang.answerFeedback.wrong} ${currentGame.current.answer}.`);

  const statusEl = type === 'addition'
    ? additionStatus
    : type === 'subtraction'
      ? subtractionStatus
      : type === 'count-stars'
        ? countStarsStatus
        : colorMatchStatus;
  statusEl.textContent = `${feedback} ${lang.score}: ${currentGame.score}`;

  if (isCorrect) {
    currentGame.score += 1;
    makeSparkles(4);
    setSpeech(type === 'color-match' ? (state.language === 'en' ? 'Hooray! Color match complete!' : 'హుర్రే! రంగు మేళా సిద్ధమైంది!') : (state.language === 'en' ? 'Hooray! The math monster gives you a high-five!' : 'హుర్రే! గణిత జంతువు నీకు హై-ఫైవ్ ఇస్తోంది!'));
  } else {
    setSpeech(lang.answerFeedback.next);
  }

  window.setTimeout(() => renderQuestion(type), 700);
}

function startGame(type) {
  gameStates[type].score = 0;
  renderQuestion(type);
  setSpeech(translations[state.language].startMessages[type] || 'New game started!');
}

function cloneBoard(board) {
  return board.map((row) => [...row]);
}

function startSudoku() {
  const puzzle = sudokuPuzzles[Math.floor(Math.random() * sudokuPuzzles.length)];
  sudokuState.board = cloneBoard(puzzle);
  sudokuState.selectedCell = null;
  sudokuState.fixedCells = new Set();
  sudokuState.correctCells = new Set();
  sudokuState.wrongCells = new Set();

  puzzle.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value !== 0) {
        sudokuState.fixedCells.add(`${rowIndex}-${colIndex}`);
      }
    });
  });

  renderSudoku();
  sudokuStatus.textContent = translations[state.language].sudoku.status;
}

function renderSudoku() {
  sudokuBoard.innerHTML = '';

  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const cell = document.createElement('button');
      cell.className = 'sudoku-cell';
      const value = sudokuState.board[row][col];
      cell.textContent = value === 0 ? '' : value;

      if (sudokuState.fixedCells.has(`${row}-${col}`)) {
        cell.classList.add('fixed');
      }

      if (sudokuState.selectedCell && sudokuState.selectedCell.row === row && sudokuState.selectedCell.col === col) {
        cell.classList.add('selected');
      }

      if (sudokuState.correctCells.has(`${row}-${col}`)) {
        cell.classList.add('correct');
      }

      if (sudokuState.wrongCells.has(`${row}-${col}`)) {
        cell.classList.add('wrong');
      }

      cell.addEventListener('click', () => {
        sudokuState.selectedCell = { row, col };
        renderSudoku();
        sudokuStatus.textContent = translations[state.language].sudoku.pickCell(row + 1, col + 1);
      });

      sudokuBoard.appendChild(cell);
    }
  }
}

function updateSudokuFeedback() {
  const correct = [];
  const wrong = [];

  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const value = sudokuState.board[row][col];
      if (value === 0) {
        continue;
      }

      if (value === sudokuSolution[row][col]) {
        correct.push(`${row}-${col}`);
      } else {
        wrong.push(`${row}-${col}`);
      }
    }
  }

  sudokuState.correctCells = new Set(correct);
  sudokuState.wrongCells = new Set(wrong);
}

function renderNumberPad() {
  sudokuNumberPad.innerHTML = '';

  [1, 2, 3, 4].forEach((number) => {
    const button = document.createElement('button');
    button.className = 'number-btn';
    button.textContent = number;
    button.addEventListener('click', () => fillSudoku(number));
    sudokuNumberPad.appendChild(button);
  });

  const eraseButton = document.createElement('button');
  eraseButton.className = 'number-btn';
  eraseButton.textContent = '✕';
  eraseButton.addEventListener('click', () => fillSudoku(0));
  sudokuNumberPad.appendChild(eraseButton);
}

function fillSudoku(value) {
  if (!sudokuState.selectedCell) {
    sudokuStatus.textContent = translations[state.language].sudoku.chooseFirst;
    return;
  }

  const { row, col } = sudokuState.selectedCell;
  const key = `${row}-${col}`;

  if (sudokuState.fixedCells.has(key)) {
    sudokuStatus.textContent = translations[state.language].sudoku.locked;
    return;
  }

  sudokuState.board[row][col] = value;
  updateSudokuFeedback();
  renderSudoku();

  if (value === 0) {
    sudokuStatus.textContent = translations[state.language].sudoku.empty;
  } else {
    sudokuStatus.textContent = translations[state.language].sudoku.placed(value);
  }
}

function checkSudoku() {
  let filledCount = 0;
  const matches = [];
  const mismatches = [];

  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      const value = sudokuState.board[row][col];
      if (value === 0) {
        continue;
      }

      filledCount += 1;
      if (value === sudokuSolution[row][col]) {
        matches.push(`${row}-${col}`);
      } else {
        mismatches.push(`${row}-${col}`);
      }
    }
  }

  sudokuState.correctCells = new Set(matches);
  sudokuState.wrongCells = new Set(mismatches);
  renderSudoku();

  if (mismatches.length === 0 && filledCount === 16) {
    sudokuStatus.textContent = translations[state.language].sudoku.solved;
    makeSparkles(6);
    setSpeech(state.language === 'en' ? 'You cracked the puzzle! The garden is cheering!' : 'మీరు పజిల్ని అధిగమించారు! తోట కేకలు వేస్తోంది!');
    return;
  }

  if (mismatches.length === 0) {
    sudokuStatus.textContent = translations[state.language].sudoku.almost;
  } else {
    sudokuStatus.textContent = translations[state.language].sudoku.wrong;
  }
}

function setLanguage(language) {
  state.language = language;
  languageSelect.value = language;
  updateLanguageUI();
  const actionButtons = document.querySelectorAll('[data-action]');
  actionButtons.forEach((button) => {
    const action = button.dataset.action;
    const messages = translations[language].actionMessages[action] || [];
    if (messages.length > 0) {
      actionMessages[action] = messages;
    }
  });
  if (document.querySelectorAll('.game-btn').length) {
    const currentGame = document.querySelector('.game-btn[data-game]:focus');
    if (currentGame) {
      currentGame.blur();
    }
  }
}

document.querySelectorAll('button[data-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    character.classList.remove('jump', 'spin');
    void character.offsetWidth;

    if (action === 'bounce') {
      character.classList.add('jump');
    } else if (action === 'rainbow') {
      character.classList.add('spin');
    } else if (action === 'star') {
      character.classList.add('jump');
      makeSparkles();
    }

    const message = actionMessages[action][Math.floor(Math.random() * actionMessages[action].length)];
    setSpeech(message);
  });
});

document.querySelectorAll('.game-btn').forEach((button) => {
  button.addEventListener('click', () => {
    startGame(button.dataset.game);
  });
});

sudokuNewButton.addEventListener('click', () => {
  startSudoku();
});

sudokuCheckButton.addEventListener('click', () => {
  checkSudoku();
});

languageSelect.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

renderNumberPad();
startSudoku();
setLanguage('en');

Object.keys(actionMessages).forEach((key) => {
  actionMessages[key] = translations.en.actionMessages[key];
});

character.addEventListener('click', () => {
  character.classList.remove('jump', 'spin');
  void character.offsetWidth;
  character.classList.add('jump');
  makeSparkles(5);
  setSpeech(state.language === 'en' ? 'You pet the unicorn and it says: “More giggles, please!”' : 'మీరు యూనికోర్న్ని తాకితే అది చెబుతుంది: “మరిన్ని హాస్యాలు, దయచేసి!”');
});
// Initialize QR code
function initQRCode() {
  const qrContainer = document.getElementById('qr-code');
  qrContainer.innerHTML = '';
  const pageURL = window.location.href || 'https://giggle-garden.example.com';
  new QRCode(qrContainer, {
    text: pageURL,
    width: 200,
    height: 200,
    colorDark: '#2f2154',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

initQRCode();
