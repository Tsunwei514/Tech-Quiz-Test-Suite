describe('Has button that says Start Quiz', () => {
  it('Has a button that says start quiz', () => {
    cy.visit('http://127.0.0.1:3001')
    cy.get('.test-btn').contains('Start Quiz')
  });
});

describe('Gets Questions', () => {
  it('GET request returns with a status code of 200 and has 10 questions', () => {
    cy.request({
      url: 'http://127.0.0.1:3001/api/questions/random',
      method: 'GET',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(10);
    });
  });
});