/* Creating an Array with all the Questions & Answers & Special slot for the currect answer */
/* All the Questions taken from here -> https://quizizz.com/admin/quiz/5c62e0fe19fa8d001c440ca5/mardi-gras-trivia */

const quizData = [
    {
        question: 'What is the day before Mardi Gras called?',
        a: 'Hoop Boop day',
        b: 'Secmo Day',
        c: 'No special day',
        d: 'Lundi Gras',
        correct: 'd',
    },
    {
        question: ' What day comes after Mardi Gras?',
        a: 'Sunday',
        b: 'Monday',
        c: 'Wednesday',
        d: 'Friday',
        correct: 'c',
    },
    {
        question: 'Where was the first known carnival celebration?',
        a: 'Israel',
        b: 'France',
        c: 'England',
        d: 'Austria',
        correct: 'b',
    },
    {
        question: 'What famous father and son were each crowned King Bacchus at New Orleans Mardi Gras?',
        a: 'Alan Thicke and Robin Thicke',
        b: 'Roy Mars and Roy Junior',
        c: 'Avi Mizrahi and Shannel Mizrahi',
        d: 'Linkolen Borose and LJ',
        correct: 'a',
    },
    {
        question: 'What do the colors of Mardi Gras stand for? Green is for _________, gold means_________and purple symbolizes ___________.',
        a: 'faith, power and justice',
        b: 'love, happiness and sacred',
        c: 'grass, sun and flowers',
        d: 'hope, value and richness of life',
        correct: 'a',
    },
    {
        question: 'What does "mardi gras" mean?',
        a: 'Big party',
        b: 'Fat Tuesday',
        c: 'Parade',
        d: 'New Orleans',
        correct: 'c',
    },
    {
        question: 'What is a doubloon?',
        a: 'A cake with a baby inside',
        b: 'A colorful mask worn at Mardi Gras',
        c: 'A decorated truck in a parade',
        d: 'A special coin thrown at parades',
        correct: 'd',
    },
    {
        question: ' The first known celebration of Mardi Gras was held in__________________.',
        a: 'Mobile, AL',
        b: 'Biloxi, MS',
        c: 'New Orleans, LA',
        d: 'Corpus Christi, TX',
        correct: 'a',
    },
    {
        question: 'Mardi Gras has been a legal holiday since ________.',
        a: '1805',
        b: '1875',
        c: '1990',
        d: '2000',
        correct: 'b',
    },
    {
        question: 'What is the general name given to organizations that put together floats for parades and/or balls?',
        a: 'Krewes',
        b: 'Mardi Gras masses',
        c: 'Pacts',
        d: 'Batches',
        correct: 'a',
    },
];

/* Creating a const variabel for each type of element. Taken the Quiz the wrapper */
/* Take each answer */
/* Each Question as well */
/* Each answer */
/* using the submit button to use addEventListener later on. */

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

/* define the current quiz counter */
/* define the  score to display it later*/

let currentQuiz = 0;
let score = 0;
loadQuiz();


/* This function load the Quiz */
/* Inserting the quiestion by innerHTML with the .question of the quizData.question (that's the question slot in the array) */
/* Inserting the answers of each quiz with the currentQuiz.a/b/c/d */
function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer){
        if(answer == quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
                <h2>Your Answered  ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
                `
        }
    }
})

