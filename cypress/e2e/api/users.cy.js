describe('👥 API Users Tests - ServeRest', () => {
  it('GET /usuarios - Deve listar todos os usuários', () => {
    cy.request('GET', '/usuarios').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('quantidade');
      expect(response.body).to.have.property('usuarios');
      expect(response.body.usuarios).to.be.an('array');
      expect(response.body.usuarios.length).to.be.greaterThan(0);

      cy.validateUserStructure(response.body.usuarios[0]);
    });
  });

  it('GET /usuarios/{id} - Deve retornar erro para ID inválido', () => {
    cy.request({
      method: 'GET',
      url: '/usuarios/usuario_inexistente_123',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.include('id deve ter exatamente 16 caracteres');
    });
  });
});
