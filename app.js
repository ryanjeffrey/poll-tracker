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
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
