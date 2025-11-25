describe('🛒 API Carts Tests - ServeRest', () => {
  it('GET /carrinhos - Deve listar todos os carrinhos', () => {
    cy.request('GET', '/carrinhos').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('quantidade');
      expect(response.body).to.have.property('carrinhos');
      expect(response.body.carrinhos).to.be.an('array');

      if (response.body.carrinhos.length > 0) {
        const firstCart = response.body.carrinhos[0];
        expect(firstCart).to.have.property('_id');
        expect(firstCart).to.have.property('precoTotal');
        expect(firstCart).to.have.property('quantidadeTotal');
        expect(firstCart).to.have.property('idUsuario');
      }
    });
  });

  it('GET /carrinhos/{id} - Deve retornar erro para ID inválido', () => {
    cy.request({
      method: 'GET',
      url: '/carrinhos/carrinho_inexistente_123',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.include('id deve ter exatamente 16 caracteres');
    });
  });
});
