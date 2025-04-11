import Quiz from '../../client/src/components/Quiz';


describe('<Quiz />', () => {
  it('The quiz card should exist after the Start Quiz button is clicked', () => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: [
        {
          "_id": "67d0808dcf5de83d77218c58",
          "question": "Which of the following is used to create an empty set?",
          "answers": [
            {
              "text": "{}",
              "isCorrect": false,
              "_id": "67d0808dcf5de83d77218c59"
            },
            {
              "text": "[]",
              "isCorrect": false,
              "_id": "67d0808dcf5de83d77218c5a"
            },
            {
              "text": "set()",
              "isCorrect": true,
              "_id": "67d0808dcf5de83d77218c5b"
            },
            {
              "text": "()",
              "isCorrect": false,
              "_id": "67d0808dcf5de83d77218c5c"
            }
          ]
        }
      ]
    }).as('getQuestions');

    cy.mount(<Quiz />);
    cy.get('.test-btn').click();
    cy.wait('@getQuestions');
    cy.get('.test-card').should('exist');
  })
});