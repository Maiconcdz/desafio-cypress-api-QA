describe('👥 API Users Tests - ServeRest', () => {
  const baseUrl = 'https://serverest.dev'

  it('GET /usuarios - Deve listar todos os usuários', () => {
    cy.request('GET', `${baseUrl}/usuarios`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('quantidade')
        expect(response.body).to.have.property('usuarios')
        expect(response.body.usuarios).to.be.an('array')
        expect(response.body.usuarios.length).to.be.greaterThan(0)
        
        // Valida estrutura do primeiro usuário
        const firstUser = response.body.usuarios[0]
        expect(firstUser).to.have.property('nome')
        expect(firstUser).to.have.property('email')
        expect(firstUser).to.have.property('password')
        expect(firstUser).to.have.property('administrador')
        expect(firstUser).to.have.property('_id')
      })
  })

  it('GET /usuarios/{id} - Deve retornar erro para ID inválido', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/usuarios/usuario_inexistente_123`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('id')
      expect(response.body.id).to.include('id deve ter exatamente 16 caracteres')
    })
  })
})