// import functions and grab DOM elements
const currentPollSectionEl = document.getElementById('current-poll-section');
const newPollSectionEl = document.getElementById('new-poll-section');
const pastPollsSectionEl = document.getElementById('past-polls-section');

const newPollFormEl = document.getElementById('new-poll-form');

// let state
let currentPoll = {
    question: '',
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: 0
};

// set event listeners 
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

    // update DOM to reflect the new state
    
    console.log(currentPoll);
});
