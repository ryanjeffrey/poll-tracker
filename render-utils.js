export function renderPastPoll(pastPoll) {
    const container = document.createElement('div');
    const pastQuestion = document.createElement('p');
    const pastOptionA = document.createElement('p');
    const pastOptionB = document.createElement('p');
    const pastVotesA = document.createElement('p');
    const pastVotesB = document.createElement('p');

    pastQuestion.textContent = pastPoll.question;
    pastOptionA.textContent = pastPoll.optionA;
    pastOptionB.textContent = pastPoll.optionB;
    pastVotesA.textContent = pastPoll.votesA;
    pastVotesB.textContent = pastPoll.votesB;

    // and append
    container.append(pastQuestion, pastOptionA, pastOptionB, pastVotesA, pastVotesB);

    // return the DOM element
    return container;
}
