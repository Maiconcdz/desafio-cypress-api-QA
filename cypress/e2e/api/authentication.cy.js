describe('API Authentication Tests - ServeRest', () => {
  const validEmail = Cypress.env('VALID_USER_EMAIL') || 'fulano@qa.com';
  const validPassword = Cypress.env('VALID_USER_PASSWORD') || 'teste';

  it('POST /login - Deve fazer login com credenciais válidas', () => {
    cy.loginAPI(validEmail, validPassword).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      expect(response.body).to.have.property('authorization');
      expect(response.body.authorization).to.include('Bearer');
    });
  });

  it('POST /login - Não deve fazer login com credenciais inválidas', () => {
    cy.loginAPI('invalido@qa.com', 'senhaerrada').then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
    });
  });
});
