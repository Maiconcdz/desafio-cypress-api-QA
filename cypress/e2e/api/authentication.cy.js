describe('🔐 API Authentication Tests - ServeRest', () => {
  const baseUrl = 'https://serverest.dev'

  it('POST /login - Deve fazer login com credenciais válidas', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        email: 'fulano@qa.com',
        password: 'teste'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('message', 'Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')
      expect(response.body.authorization).to.include('Bearer')
    })
  })

  it('POST /login - Não deve fazer login com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        email: 'invalido@qa.com',
        password: 'senhaerrada'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos')
    })
  })
})