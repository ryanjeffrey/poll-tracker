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

    newPollFormEl.reset();

    // update DOM to reflect the new state
    function displayCurrentPoll() {
        const currentPollDiv = document.createElement('div');
        const currentPollQuestion = document.createElement('h4');

        const currentPollOptionADiv = document.createElement('div');
        const currentPollOptionA = document.createElement('p');
        const currentPollOptionAVoteCount = document.createElement('p');
        const currentPollOptionASubtractButton = document.createElement('button');
        const currentPollOptionAAddButton = document.createElement('button');

        currentPollOptionADiv.append(
            currentPollOptionA,
            currentPollOptionASubtractButton,
            currentPollOptionAVoteCount,
            currentPollOptionAAddButton
        );

        const currentPollOptionBDiv = document.createElement('div');
        const currentPollOptionB = document.createElement('p');
        const currentPollOptionBVoteCount = document.createElement('p');
        const currentPollOptionBSubtractButton = document.createElement('button');
        const currentPollOptionBAddButton = document.createElement('button');

        currentPollOptionBDiv.append(
            currentPollOptionB,
            currentPollOptionBSubtractButton,
            currentPollOptionBVoteCount,
            currentPollOptionBAddButton
        );

        const currentPollFinishButton = document.createElement('button');

        currentPollQuestion.textContent = currentPoll.question;
        currentPollOptionA.textContent = currentPoll.optionA;
        currentPollOptionB.textContent = currentPoll.optionB;
        currentPollOptionAVoteCount.textContent = currentPoll.votesA;
        currentPollOptionBVoteCount.textContent = currentPoll.votesB;

        currentPollOptionASubtractButton.textContent = '-'; 
        currentPollOptionAAddButton.textContent = '+';
        currentPollOptionBSubtractButton.textContent = '-'; 
        currentPollOptionBAddButton.textContent = '+';
        
        currentPollFinishButton.textContent = 'Finish Poll';

        currentPollDiv.append(
            currentPollQuestion,
            currentPollOptionADiv,
            currentPollOptionBDiv,
            currentPollFinishButton
        );

        currentPollDiv.classList.add('current-poll-div');
        currentPollOptionADiv.classList.add('current-poll-options');
        currentPollOptionBDiv.classList.add('current-poll-options');

        currentPollSectionEl.append(currentPollDiv);
        
        return currentPollDiv;
    }

    displayCurrentPoll();
});
