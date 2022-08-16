const question = document.querySelector(".question");
const opt1 = document.querySelector("#a");
const opt2 = document.querySelector("#b");
const opt3 = document.querySelector("#c");
const opt4 = document.querySelector("#d");

const submit = document.querySelector(".submit");

const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

const answers = document.querySelectorAll(".answer");

const showscore = document.querySelector("#showscore");

const questions = [
  {
    ques: "What is the short key for close windows",
    a: "alt + f5",
    b: "ctrl + f5",
    c: "alt + f4",
    d: "ctrl + f4",
    correct: "opt-3",
    score: 0,
  },
  {
    ques: "What is the full form of css",
    a: "style sheet",
    b: "control cascading ",
    c: "cascading styled sheet",
    d: "cascading style sheet",
    correct: "opt-4",
    score: 0,
  },
  {
    ques: "what is the full form of HTML ",
    a: "Hyper text markup language",
    b: "Hyper text makeup language",
    c: "Hypo text language",
    d: "Hello text markup language",
    correct: "opt-1",
    score: 0,
  },
  {
    ques: "what is the short key for minimize",
    a: "window + a",
    b: "window + c",
    c: "window + ↓ ",
    d: "window + ↑",
    correct: "opt-3",
    score: 0,
  },
];

let index = 0;

const changeques = () => {
  if (index < questions.length - 1) {
    submit.style.display = "none";
  } else {
    submit.style.display = "block";
  }
  question.innerHTML = questions[index].ques;

  opt1.innerHTML = questions[index].a;
  opt2.innerHTML = questions[index].b;
  opt3.innerHTML = questions[index].c;
  opt4.innerHTML = questions[index].d;

  answers.forEach((change) => {
    if (questions[index].selected == change.id) {
      console.log(change.id);
      change.checked = true;
    }
  });
};

changeques();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectall = () => {
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      questions[index].selected = curAnsElem.id;
      curAnsElem.checked = false;
    }
  });
};

// next.addEventListener("click", () => {
//   const checkedAnswer = getCheckAnswer();

//   if (checkedAnswer === questions[index].correct) {
//     score++;
//   }
// });
answers.forEach((inner) => {
  inner.addEventListener("input", () => {
    if (inner.checked) {
      const checkedAnswer = getCheckAnswer();

      if (checkedAnswer === questions[index].correct) {
        questions[index].score = 1;
      } else {
        questions[index].score = 0;
      }
    }
  });
});

next.addEventListener("click", () => {
  if (index < questions.length - 1) {
    deselectall();
    index++;
    changeques();
  }
});

previous.addEventListener("click", () => {
  if (index > 0) {
    deselectall();
    index--;
    changeques();
  }
});

submit.addEventListener("click", () => {
  let score = 0;
  questions.forEach((el) => {
    score += el.score;
  });
  showscore.innerHTML = `
  <h3> You scored ${score}/${questions.length} ✌🏻</h3>
  <button class="btn" onclick = "location.reload()">Play again </button>
   `;

  showscore.classList.remove("showscore");
});
