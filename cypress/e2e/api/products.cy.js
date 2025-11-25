describe('🛍️ API Products Tests - ServeRest', () => {
  const baseUrl = 'https://serverest.dev';

  it('GET /produtos - Deve listar todos os produtos', () => {
    cy.request('GET', `${baseUrl}/produtos`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('quantidade');
      expect(response.body).to.have.property('produtos');
      expect(response.body.produtos).to.be.an('array');
      expect(response.body.produtos.length).to.be.greaterThan(0);

      // Valida estrutura do primeiro produto
      const firstProduct = response.body.produtos[0];
      expect(firstProduct).to.have.property('nome');
      expect(firstProduct).to.have.property('preco');
      expect(firstProduct).to.have.property('descricao');
      expect(firstProduct).to.have.property('quantidade');
      expect(firstProduct).to.have.property('_id');
    });
  });

  it('GET /produtos/{id} - Deve retornar erro para ID inexistente', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/produtos/produto_inexistente_123`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.include('id deve ter exatamente 16 caracteres');
    });
  });
});
