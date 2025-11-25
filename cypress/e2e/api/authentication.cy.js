// ...existing code...
describe('API Authentication Tests - ServeRest', () => {
  const validEmail = Cypress.env('VALID_USER_EMAIL') || 'fulano@qa.com';
  const validPassword = Cypress.env('VALID_USER_PASSWORD') || 'teste';
  const invalidEmail = 'invalido@qa.com';
  const invalidPassword = 'senhaerrada';

  it('POST /login - Deve fazer login com credenciais válidas', () => {
    cy.loginAPI(validEmail, validPassword).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      expect(response.body).to.have.property('authorization');
      expect(response.body.authorization).to.include('Bearer');
    });
  });

  it('POST /login - Não deve fazer login com credenciais inválidas', () => {
    // usar cy.request direto com failOnStatusCode false via comando ou manualmente
    cy.request({
      method: 'POST',
      url: '/login',
      body: { email: invalidEmail, password: invalidPassword },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
    });
  });
});
// ...existing code...
