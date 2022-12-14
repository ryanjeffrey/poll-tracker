// import functions and grab DOM elements
import { renderPastPoll } from './render-utils.js';

const newPollFormEl = document.getElementById('new-poll-form');

const currentPollQuestion = document.getElementById('current-poll-question');
const optionAEl = document.getElementById('option-a');
const optionASubtractButton = document.getElementById('option-a-subtract');
const optionAVoteCountEl = document.getElementById('option-a-vote-count');
const optionAAddButton = document.getElementById('option-a-add');
const optionBEl = document.getElementById('option-b');
const optionBSubtractButton = document.getElementById('option-b-subtract');
const optionBVoteCountEl = document.getElementById('option-b-vote-count');
const optionBAddButton = document.getElementById('option-b-add');

const closePollButton = document.getElementById('close-poll-button');

const pastPollsDivEl = document.getElementById('past-polls-div');

// let state
let currentPoll = {
    question: '-',
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: 0
};

const pastPollsArray = [];

// set event listeners 
optionASubtractButton.addEventListener('click', () => {
    currentPoll.votesA--;
    optionAVoteCountEl.textContent = currentPoll.votesA;
});

optionAAddButton.addEventListener('click', () => {
    currentPoll.votesA++;
    optionAVoteCountEl.textContent = currentPoll.votesA;
});

optionBSubtractButton.addEventListener('click', () => {
    currentPoll.votesB--;
    optionBVoteCountEl.textContent = currentPoll.votesB;
});

optionBAddButton.addEventListener('click', () => {
    currentPoll.votesB++;
    optionBVoteCountEl.textContent = currentPoll.votesB;
});

newPollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(newPollFormEl);

    // get user input
    const userQuestion = formData.get('user-question-input');
    const userOptionA = formData.get('option-a-input');
    const userOptionB = formData.get('option-b-input');

    // use user input to update state
    currentPoll.question = userQuestion;
    currentPoll.optionA = userOptionA;
    currentPoll.optionB = userOptionB;

    newPollFormEl.reset();

    // update DOM to reflect the new state
    if (currentPoll.question === '' || currentPoll.optionA === '' || currentPoll.optionB === '') {
        resetState();
        alert('Please enter a question and two answer options before you submit poll.');
    } else {
        displayCurrentPoll();
    }
});

closePollButton.addEventListener('click', () => {
    if (currentPoll.question === '-') {
        resetState();
        alert('Please enter a new poll in the New Poll section below.');
    } else {
        pastPollsArray.push(currentPoll);
    
        resetState();
    
        displayAllPolls();
    }
});
  
function displayCurrentPoll() {
    currentPollQuestion.textContent = currentPoll.question;
    optionAEl.textContent = currentPoll.optionA;
    optionBEl.textContent = currentPoll.optionB;
    optionAVoteCountEl.textContent = currentPoll.votesA;
    optionBVoteCountEl.textContent = currentPoll.votesB;
}

function resetState() {
    currentPoll = {
        question: '-',
        optionA: 'Option A',
        optionB: 'Option B',
        votesA: 0,
        votesB: 0,
    };

    currentPollQuestion.textContent = currentPoll.question;
    optionAEl.textContent = currentPoll.optionA;
    optionBEl.textContent = currentPoll.optionB;
    optionAVoteCountEl.textContent = currentPoll.votesA;
    optionBVoteCountEl.textContent = currentPoll.votesB;
}

function displayAllPolls() {
    pastPollsDivEl.textContent = '';

    // for each item
    for (let pastPoll of pastPollsArray) {
        const container = renderPastPoll(pastPoll);
        pastPollsDivEl.append(container);
    }
}