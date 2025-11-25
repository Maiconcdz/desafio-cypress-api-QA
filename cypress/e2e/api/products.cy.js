describe('🛍️ API Products Tests - ServeRest', () => {
  it('GET /produtos - Deve listar todos os produtos', () => {
    cy.request('GET', '/produtos').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('quantidade');
      expect(response.body).to.have.property('produtos');
      expect(response.body.produtos).to.be.an('array');
      expect(response.body.produtos.length).to.be.greaterThan(0);

      cy.validateProductStructure(response.body.produtos[0]);
    });
  });

  it('GET /produtos/{id} - Deve retornar erro para ID inexistente', () => {
    cy.request({
      method: 'GET',
      url: '/produtos/produto_inexistente_123',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.include('id deve ter exatamente 16 caracteres');
    });
  });
});
